import { renderRich } from "@/lib/rich";

/* Small HUD chip used under the hero title (level cap, XP bonus...). */
export function StatChip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11.5px] text-ink [&_strong]:mx-1 [&_strong]:text-amber">
      {renderRich(text)}
    </span>
  );
}
