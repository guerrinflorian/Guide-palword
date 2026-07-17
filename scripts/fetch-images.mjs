/*
  Downloads game images locally (personal use) so the site never hotlinks anything.

  Usage: node scripts/fetch-images.mjs

  Sources tried in order:
    1. Community GitHub repos with Pal icons (raw.githubusercontent.com, listed once via the git trees API)
    2. MediaWiki Special:FilePath on palworld.wiki.gg then palworld.fandom.com
    3. paldb.cc page scrape (og:image / PalIcon CDN url)

  Everything lands in public/images/{pals,brand,locations}.
  The script is idempotent: existing files are kept, and it always rebuilds
  src/content/image-manifest.json and public/images/SOURCES.md from what is on disk,
  so manually dropped files are picked up too.
*/

import { mkdir, readFile, writeFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMG_ROOT = path.join(ROOT, "public", "images");
const PALS_DIR = path.join(IMG_ROOT, "pals");
const BRAND_DIR = path.join(IMG_ROOT, "brand");
const LOC_DIR = path.join(IMG_ROOT, "locations");
const MANIFEST_PATH = path.join(ROOT, "src", "content", "image-manifest.json");
const LOG_PATH = path.join(IMG_ROOT, "fetch-log.json");
const SOURCES_PATH = path.join(IMG_ROOT, "SOURCES.md");

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 PalworldFieldGuide/1.0 (private fan guide, personal use)";
const TIMEOUT_MS = 20000;
const CONCURRENCY = 2;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Community repos likely to hold pal icons. Failures are silently skipped.
const GITHUB_REPOS = [
  { repo: "mlg404/palworld-paldex-api", branches: ["main", "master"] },
  { repo: "Palworld-Data/palworld-assets", branches: ["main", "master"] },
];

// fandom.com serves 403 to non-browser clients, wiki.gg is the reliable one.
const WIKI_HOSTS = ["https://palworld.wiki.gg"];

// When the wiki starts serving 403s we are rate-banned: stop hitting it,
// leave the rest missing and let a later rerun (idempotent) fill the gaps.
let wikiBlocked = false;

const slugify = (name) =>
  name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeKey = (s) => slugify(s.replace(/\.(png|webp|jpg|jpeg)$/i, ""));

async function fetchWithTimeout(url, opts = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": UA, ...(opts.headers || {}) },
      signal: ctrl.signal,
      ...opts,
    });
  } finally {
    clearTimeout(t);
  }
}

function extFrom(url, contentType) {
  if (contentType?.includes("png")) return ".png";
  if (contentType?.includes("webp")) return ".webp";
  if (contentType?.includes("jpeg") || contentType?.includes("jpg")) return ".jpg";
  const m = url.match(/\.(png|webp|jpe?g)(\?|$)/i);
  return m ? `.${m[1].toLowerCase()}` : ".png";
}

async function download(url, destDir, baseName) {
  // Wikis throttle bursts hard: retry transient failures with backoff.
  for (let attempt = 1; attempt <= 3; attempt++) {
    let res;
    try {
      res = await fetchWithTimeout(url);
    } catch {
      await sleep(700 * attempt);
      continue;
    }
    if (res.status === 429 || res.status >= 500) {
      await sleep(1500 * attempt);
      continue;
    }
    if (res.status === 403 && url.includes("wiki.gg")) {
      wikiBlocked = true;
      return null;
    }
    if (!res.ok) return null;
    // Some CDNs (paldb.cc) omit content-type: fall back to the URL extension,
    // then validate with magic bytes so we never save an HTML error page.
    const type = res.headers.get("content-type") || "";
    const finalUrl = res.url || url;
    if (type && !type.startsWith("image/")) return null;
    if (!type && !/\.(png|webp|jpe?g)(\?|$)/i.test(finalUrl)) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1000) return null;
    const isPng = buf[0] === 0x89 && buf[1] === 0x50;
    const isWebp = buf.slice(8, 12).toString() === "WEBP";
    const isJpg = buf[0] === 0xff && buf[1] === 0xd8;
    if (!isPng && !isWebp && !isJpg) return null;
    const file = baseName + extFrom(finalUrl, type);
    await writeFile(path.join(destDir, file), buf);
    return { file, url: finalUrl };
  }
  return null;
}

function existingFile(dir, slug) {
  for (const ext of [".png", ".webp", ".jpg", ".jpeg"]) {
    if (existsSync(path.join(dir, slug + ext))) return slug + ext;
  }
  return null;
}

/* ---------- Resolver 1: GitHub repo indexes ---------- */

async function buildGithubIndex() {
  const index = new Map(); // normalized name -> raw url
  for (const { repo, branches } of GITHUB_REPOS) {
    for (const branch of branches) {
      try {
        const res = await fetchWithTimeout(
          `https://api.github.com/repos/${repo}/git/trees/${branch}?recursive=1`,
          { headers: { accept: "application/vnd.github+json" } }
        );
        if (!res.ok) continue;
        const data = await res.json();
        for (const node of data.tree || []) {
          if (node.type !== "blob" || !/\.(png|webp)$/i.test(node.path)) continue;
          const key = normalizeKey(path.basename(node.path));
          if (!index.has(key)) {
            index.set(
              key,
              `https://raw.githubusercontent.com/${repo}/${branch}/${node.path
                .split("/")
                .map(encodeURIComponent)
                .join("/")}`
            );
          }
        }
        console.log(`[github] indexed ${repo}@${branch} (${index.size} images so far)`);
        break; // branch worked, skip the other one
      } catch {
        // repo or branch unavailable, move on
      }
    }
  }
  return index;
}

/* ---------- Resolver 2: MediaWiki Special:FilePath ---------- */

async function tryWiki(titles, destDir, slug) {
  for (const host of WIKI_HOSTS) {
    for (const title of titles) {
      if (wikiBlocked) return null;
      const url = `${host}/wiki/Special:FilePath/${encodeURIComponent(title)}`;
      try {
        await sleep(350 + Math.floor(Math.random() * 250));
        const got = await download(url, destDir, slug);
        if (got) return got;
      } catch {
        // next candidate
      }
    }
  }
  return null;
}

/* ---------- Resolver 3: paldb.cc scrape ---------- */

async function tryPaldb(name, destDir, slug) {
  const page = `https://paldb.cc/en/${encodeURIComponent(name.replace(/ /g, "_"))}`;
  try {
    await sleep(250 + Math.floor(Math.random() * 200));
    const res = await fetchWithTimeout(page);
    if (!res.ok) return null;
    const html = await res.text();
    const m =
      html.match(/https:\/\/cdn\.paldb\.cc\/image\/Pal\/Texture\/PalIcon\/[^"'\s)]+\.(?:webp|png)/) ||
      html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/);
    const url = Array.isArray(m) && m[1] && m[1].startsWith("http") ? m[1] : m?.[0];
    if (!url) return null;
    return await download(url, destDir, slug);
  } catch {
    return null;
  }
}

/* ---------- Worker pool ---------- */

async function pool(items, worker, size = CONCURRENCY) {
  const queue = [...items];
  const results = [];
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (queue.length) {
        const item = queue.shift();
        results.push(await worker(item));
      }
    })
  );
  return results;
}

/* ---------- Main ---------- */

async function main() {
  await Promise.all([mkdir(PALS_DIR, { recursive: true }), mkdir(BRAND_DIR, { recursive: true }), mkdir(LOC_DIR, { recursive: true })]);

  const list = JSON.parse(await readFile(path.join(ROOT, "src", "content", "pal-list.json"), "utf8"));
  const log = existsSync(LOG_PATH) ? JSON.parse(await readFile(LOG_PATH, "utf8")) : {};

  console.log("Indexing community GitHub repos...");
  const ghIndex = await buildGithubIndex();

  const missing = [];
  let downloaded = 0;
  let skipped = 0;

  // --- Pals ---
  await pool(list.pals, async (pal) => {
    const slug = slugify(pal.name);
    if (existingFile(PALS_DIR, slug)) {
      skipped++;
      return;
    }
    const candidates = [pal.name, ...(pal.search || [])];

    // 1. GitHub index
    for (const cand of candidates) {
      const url = ghIndex.get(slugify(cand)) || ghIndex.get(slugify(cand) + "-icon");
      if (url) {
        try {
          const got = await download(url, PALS_DIR, slug);
          if (got) {
            log[`pals/${got.file}`] = got.url;
            downloaded++;
            console.log(`[pal] ${pal.name} <- github`);
            return;
          }
        } catch {}
      }
    }

    // 2. Wikis (full art is always "<Name>.png" on wiki.gg, keep requests minimal)
    const titles = candidates.map((c) => `${c}.png`);
    const gotWiki = await tryWiki(titles, PALS_DIR, slug);
    if (gotWiki) {
      log[`pals/${gotWiki.file}`] = gotWiki.url;
      downloaded++;
      console.log(`[pal] ${pal.name} <- wiki`);
      return;
    }

    // 3. paldb.cc
    for (const cand of candidates) {
      const gotDb = await tryPaldb(cand, PALS_DIR, slug);
      if (gotDb) {
        log[`pals/${gotDb.file}`] = gotDb.url;
        downloaded++;
        console.log(`[pal] ${pal.name} <- paldb.cc`);
        return;
      }
    }

    missing.push(`pals/${slug}.png (${pal.name})`);
    console.log(`[pal] ${pal.name} : NOT FOUND`);
  });

  // --- Brand ---
  for (const item of list.brand) {
    if (existingFile(BRAND_DIR, item.slug)) {
      skipped++;
      continue;
    }
    const got =
      (await tryWiki(item.titles, BRAND_DIR, item.slug)) ||
      (await (async () => {
        try {
          return await download(
            "https://en.wikipedia.org/wiki/Special:FilePath/Palworld%20logo.png",
            BRAND_DIR,
            item.slug
          );
        } catch {
          return null;
        }
      })());
    if (got) {
      log[`brand/${got.file}`] = got.url;
      downloaded++;
      console.log(`[brand] ${item.slug} : ok`);
    } else {
      missing.push(`brand/${item.slug}.png`);
      console.log(`[brand] ${item.slug} : NOT FOUND`);
    }
  }

  // --- Locations (best effort) ---
  await pool(list.locations, async (loc) => {
    if (existingFile(LOC_DIR, loc.slug)) {
      skipped++;
      return;
    }
    const got = await tryWiki(loc.titles, LOC_DIR, loc.slug);
    if (got) {
      log[`locations/${got.file}`] = got.url;
      downloaded++;
      console.log(`[loc] ${loc.slug} : ok`);
    } else {
      missing.push(`locations/${loc.slug}.png`);
      console.log(`[loc] ${loc.slug} : NOT FOUND`);
    }
  });

  /* ---------- Rebuild manifest from disk ---------- */
  const manifest = { pals: {}, brand: {}, locations: {} };
  for (const [dir, key] of [
    [PALS_DIR, "pals"],
    [BRAND_DIR, "brand"],
    [LOC_DIR, "locations"],
  ]) {
    for (const f of await readdir(dir)) {
      const s = await stat(path.join(dir, f));
      if (!s.isFile() || !/\.(png|webp|jpe?g)$/i.test(f)) continue;
      manifest[key][normalizeKey(f)] = f;
    }
  }
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  await writeFile(LOG_PATH, JSON.stringify(log, null, 2) + "\n");

  /* ---------- SOURCES.md ---------- */
  const lines = [
    "# Sources des images",
    "",
    "Images de jeu telechargees en local pour un guide prive, usage personnel uniquement.",
    "Aucun hotlink : tout est servi depuis public/images/.",
    "",
    "Sources utilisees par le script scripts/fetch-images.mjs :",
    "",
    "- Depots communautaires GitHub (raw.githubusercontent.com) : " + GITHUB_REPOS.map((r) => r.repo).join(", "),
    "- palworld.wiki.gg et palworld.fandom.com (MediaWiki, Special:FilePath)",
    "- paldb.cc (icones de Pals)",
    "- en.wikipedia.org (logo)",
    "",
    "## Provenance fichier par fichier",
    "",
    ...Object.entries(log)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([file, url]) => `- ${file} : ${url}`),
    "",
    "Les fichiers presents sur disque mais absents de cette liste ont ete deposes manuellement.",
    "",
  ];
  await writeFile(SOURCES_PATH, lines.join("\n"));

  console.log("");
  console.log(`Done. downloaded=${downloaded} kept=${skipped} missing=${missing.length}`);
  if (missing.length) {
    console.log("Missing files (drop them manually in public/images/ then rerun this script):");
    for (const m of missing) console.log("  - " + m);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
