import { renderRich } from "@/lib/rich";
import type { Rich } from "@/content/types";

/* Numbered step list with mono amber counters, HUD style. */
export function Steps({ items }: { items: Rich[] }) {
  return (
    <ol className="mb-4 space-y-3.5">
      {items.map((item, i) => (
        <li key={i} className="relative pl-11 text-[14.5px] text-muted [&_strong]:text-ink">
          <span
            aria-hidden
            className="absolute left-0 top-0 flex size-[30px] items-center justify-center rounded-lg border border-line bg-surface2 font-mono text-[13px] font-bold text-amber"
          >
            {i + 1}
          </span>
          {renderRich(item)}
        </li>
      ))}
    </ol>
  );
}
