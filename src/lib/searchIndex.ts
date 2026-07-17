import { SECTIONS, sectionNumber } from "@/content/sections";
import { richToPlain, anchorId } from "@/lib/utils";
import type { Block, CardData } from "@/content/types";

export interface SearchEntry {
  anchor: string;
  sectionId: string;
  sectionTitle: string;
  sectionNum: string;
  title: string;
  text: string;
}

function cardText(card: CardData): string {
  return [card.title, card.body, ...(card.list ?? []), ...(card.kv ?? [])].filter(Boolean).map((t) => richToPlain(t as string)).join(" ");
}

function blockText(block: Block): string {
  switch (block.kind) {
    case "p":
      return richToPlain(block.text);
    case "h4":
      return richToPlain(block.title);
    case "list":
    case "steps":
      return block.items.map(richToPlain).join(" ");
    case "cards":
      return block.items.map(cardText).join(" ");
    case "table":
      return [block.head.join(" "), ...block.rows.map((r) => r.map(richToPlain).join(" "))].join(" ");
    case "callout":
      return `${block.label} ${richToPlain(block.text)}`;
    default:
      return "";
  }
}

/*
  One entry per section plus one per sub-heading, each carrying the plain
  text of every block underneath it. Built statically from the content module.
*/
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  SECTIONS.forEach((section, si) => {
    const num = sectionNumber(si);
    let current: SearchEntry = {
      anchor: section.id,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionNum: num,
      title: section.title,
      text: richToPlain(section.subtitle),
    };
    entries.push(current);

    for (const block of section.blocks) {
      if (block.kind === "sub") {
        current = {
          anchor: anchorId(section.id, block.title),
          sectionId: section.id,
          sectionTitle: section.title,
          sectionNum: num,
          title: block.title,
          text: "",
        };
        entries.push(current);
      } else {
        current.text += " " + blockText(block);
      }
    }
  });

  return entries;
}
