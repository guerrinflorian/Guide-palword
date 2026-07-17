import { cn } from "@/lib/utils";
import { renderRich } from "@/lib/rich";
import { Badge } from "@/components/ui/Badge";
import { PalPortrait } from "@/components/ui/PalPortrait";
import type { CardData, Accent } from "@/content/types";

const TOP: Record<Accent, string> = {
  teal: "border-t-teal",
  amber: "border-t-amber",
  violet: "border-t-violet",
  coral: "border-t-coral",
};

const GLOW: Record<Accent, string> = {
  teal: "glow-teal",
  amber: "glow-amber",
  violet: "glow-violet",
  coral: "glow-amber",
};

export function Card({ data }: { data: CardData }) {
  const { accent, badge, title, body, list, kv, glow, pal } = data;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-line bg-surface p-[18px] transition-colors hover:border-[#33564c]",
        accent && ["border-t-[3px]", TOP[accent]],
        glow && accent && GLOW[accent]
      )}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <h4 className="font-display text-[15.5px] font-bold leading-snug text-ink">
          {badge ? (
            <span className="mr-2 inline-block translate-y-[-1px]">
              <Badge label={badge.label} tone={badge.tone} />
            </span>
          ) : null}
          {renderRich(title)}
        </h4>
        {pal ? <PalPortrait name={pal} accent={accent ?? "teal"} size={44} className="-mr-1 -mt-1" /> : null}
      </div>

      {body ? <p className="mb-0 text-[14px] leading-relaxed text-muted [&_strong]:text-ink">{renderRich(body)}</p> : null}

      {list ? (
        <ul className="space-y-2">
          {list.map((item, i) => (
            <li key={i} className="relative pl-6 text-[14px] leading-relaxed text-muted [&_strong]:text-ink">
              <span
                aria-hidden
                className="absolute left-0.5 top-[9px] block size-[7px] rotate-45 rounded-[2px] bg-teal"
              />
              {renderRich(item)}
            </li>
          ))}
        </ul>
      ) : null}

      {kv ? (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-line/60 pt-3">
          {kv.map((item, i) => (
            <span key={i} className="text-[12px] text-muted [&_strong]:font-semibold [&_strong]:text-ink">
              {renderRich(item)}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function CardGrid({ cols, items }: { cols: 2 | 3; items: CardData[] }) {
  return (
    <div className={cn("my-4 grid gap-4", cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
      {items.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  );
}
