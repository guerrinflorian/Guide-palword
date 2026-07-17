import list from "@/content/pal-list.json";
import { slugify } from "@/lib/utils";

interface PalEntry {
  name: string;
  search?: string[];
  paldb?: string;
}

/*
  Builds the paldb.cc page url for a Pal. The guide uses community
  spellings; the official page name is the last search alias
  (added after verification), unless an explicit paldb override exists.
*/
const pages = new Map<string, string>();
for (const pal of list.pals as PalEntry[]) {
  const official = pal.paldb ?? (pal.search?.length ? pal.search[pal.search.length - 1] : pal.name);
  pages.set(slugify(pal.name), official.replace(/ /g, "_"));
}

export function getPaldbUrl(name: string): string | undefined {
  const page = pages.get(slugify(name));
  return page ? `https://paldb.cc/en/${encodeURIComponent(page)}` : undefined;
}
