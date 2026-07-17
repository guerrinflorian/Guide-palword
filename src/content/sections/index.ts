import type { Section } from "../types";
import { START } from "./01-start";
import { XP } from "./02-xp";
import { CAPTURE } from "./03-capture";
import { PECHE } from "./04-peche";
import { ELEVAGE } from "./05-elevage";
import { BASES } from "./06-bases";
import { COMBAT } from "./07-combat";
import { FARM } from "./08-farm";
import { UTILE } from "./09-utile";
import { MONTURES } from "./10-montures";
import { SECRETS } from "./11-secrets";
import { FARMING } from "./12-farming";
import { SITES } from "./13-sites";

export const SECTIONS: Section[] = [
  START,
  XP,
  CAPTURE,
  PECHE,
  ELEVAGE,
  BASES,
  COMBAT,
  FARM,
  UTILE,
  MONTURES,
  SECRETS,
  FARMING,
  SITES,
];

export const sectionNumber = (index: number) => String(index + 1).padStart(2, "0");
