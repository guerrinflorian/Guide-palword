import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function anchorId(sectionId: string, subTitle: string): string {
  return `${sectionId}--${slugify(subTitle)}`;
}

/* Shared with the rich renderer: keep both in sync. */
export const RICH_TOKEN =
  /\*\*(.+?)\*\*|\{\{(.+?)\}\}|\(\((.+?)\)\)|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`/g;

export function richToPlain(text: string): string {
  return text.replace(RICH_TOKEN, (_all, bold, pal, wp, label, _url, code) => bold ?? pal ?? wp ?? label ?? code ?? "");
}

export function normalizeForSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}
