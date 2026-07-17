import { SECTIONS, sectionNumber } from "@/content/sections";
import list from "@/content/pal-list.json";
import manifest from "@/content/image-manifest.json";
import { slugify } from "@/lib/utils";
import { getPaldbUrl } from "@/lib/paldb";
import type { Block, CardData } from "@/content/types";

export interface PaldexSectionRef {
  id: string;
  num: string;
  title: string;
}

export interface PaldexEntry {
  name: string;
  slug: string;
  file?: string;
  paldbUrl?: string;
  sections: PaldexSectionRef[];
}

const MENTION = /\{\{([^}]+)\}\}/g;

function cardStrings(card: CardData): string[] {
  const out = [card.title, card.body ?? "", ...(card.list ?? []), ...(card.kv ?? [])];
  if (card.pal) out.push(`{{${card.pal}}}`);
  return out;
}

function blockStrings(block: Block): string[] {
  switch (block.kind) {
    case "p":
      return [block.text];
    case "h4":
      return [block.title];
    case "list":
    case "steps":
      return block.items;
    case "cards":
      return block.items.flatMap(cardStrings);
    case "table":
      return block.rows.flat();
    case "callout":
      return [block.text];
    default:
      return [];
  }
}

/*
  Builds the Paldex: every Pal of the guide with its local icon,
  its paldb.cc link and the sections where it is mentioned.
*/
export function buildPaldex(): PaldexEntry[] {
  const mentions = new Map<string, Set<string>>();

  SECTIONS.forEach((section) => {
    const texts = [section.subtitle, ...section.blocks.flatMap(blockStrings)];
    for (const text of texts) {
      for (const m of text.matchAll(MENTION)) {
        const slug = slugify(m[1]);
        if (!mentions.has(slug)) mentions.set(slug, new Set());
        mentions.get(slug)!.add(section.id);
      }
    }
  });

  const sectionRef = new Map(
    SECTIONS.map((s, i) => [s.id, { id: s.id, num: sectionNumber(i), title: s.title }])
  );
  const files: Record<string, string> = manifest.pals;

  return (list.pals as { name: string }[])
    .map((pal) => {
      const slug = slugify(pal.name);
      const ids = [...(mentions.get(slug) ?? [])];
      return {
        name: pal.name,
        slug,
        file: files[slug],
        paldbUrl: getPaldbUrl(pal.name),
        sections: ids
          .map((id) => sectionRef.get(id)!)
          .sort((a, b) => a.num.localeCompare(b.num)),
      };
    })
    .filter((e) => e.file || e.sections.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));
}
