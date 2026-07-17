export type Accent = "teal" | "amber" | "violet" | "coral";

export type BadgeTone = "combat" | "base" | "breed" | "mount";

export type CalloutTone = "tip" | "warn" | "combo" | "stale";

/*
  Rich text mini-markup used in every string below:
    **texte**      bold emphasis
    {{Nom}}        Pal name (rendered with its local icon when available)
    ((x, y))       map coordinates, rendered as a copyable waypoint chip
    [label](url)   external link
*/
export type Rich = string;

export interface BadgeData {
  label: string;
  tone: BadgeTone;
}

export interface CardData {
  title: Rich;
  accent?: Accent;
  badge?: BadgeData;
  body?: Rich;
  list?: Rich[];
  kv?: Rich[];
  glow?: boolean;
  pal?: string;
}

export type Block =
  | { kind: "p"; text: Rich; muted?: boolean }
  | { kind: "sub"; title: string }
  | { kind: "h4"; title: Rich }
  | { kind: "list"; items: Rich[] }
  | { kind: "steps"; items: Rich[] }
  | { kind: "cards"; cols: 2 | 3; items: CardData[] }
  | { kind: "table"; head: string[]; rows: Rich[][] }
  | { kind: "callout"; tone: CalloutTone; label: string; text: Rich }
  | { kind: "locations"; slugs: string[] };

export interface Section {
  id: string;
  title: string;
  subtitle: Rich;
  group: string;
  icon: string;
  accent: Accent;
  blocks: Block[];
}

export interface HeroData {
  eyebrow: string;
  titleBefore: string;
  titleEm: string;
  titleAfter: string;
  lead: Rich;
  chips: Rich[];
  priorityTitle: string;
  priorityText: Rich;
}
