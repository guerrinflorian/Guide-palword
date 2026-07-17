import { renderRich } from "@/lib/rich";
import { anchorId, cn } from "@/lib/utils";
import { SubHeading } from "@/components/ui/Section";
import { CardGrid } from "@/components/ui/Card";
import { Callout } from "@/components/ui/Callout";
import { DataTable } from "@/components/ui/DataTable";
import { Steps } from "@/components/ui/Steps";
import { LocationStrip } from "@/components/ui/LocationStrip";
import { Reveal } from "@/components/ui/Reveal";
import type { Block, Accent } from "@/content/types";

export function BlockRenderer({
  blocks,
  sectionId,
  accent,
}: {
  blocks: Block[];
  sectionId: string;
  accent: Accent;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return (
              <p
                key={i}
                className={cn(
                  "mb-3.5 max-w-[80ch] text-[15px] leading-relaxed",
                  block.muted ? "text-muted [&_strong]:text-ink" : "text-ink/90 [&_strong]:font-semibold [&_strong]:text-ink"
                )}
              >
                {renderRich(block.text)}
              </p>
            );
          case "sub":
            return <SubHeading key={i} id={anchorId(sectionId, block.title)} title={block.title} accent={accent} />;
          case "h4":
            return (
              <h4 key={i} className="mb-2 mt-5 font-display text-[15.5px] font-bold text-ink">
                {renderRich(block.title)}
              </h4>
            );
          case "list":
            return (
              <ul key={i} className="mb-4 max-w-[80ch] space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="relative pl-6 text-[14.5px] leading-relaxed text-muted [&_strong]:text-ink">
                    <span aria-hidden className="absolute left-0.5 top-[9px] block size-[7px] rotate-45 rounded-[2px] bg-teal" />
                    {renderRich(item)}
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return <Steps key={i} items={block.items} />;
          case "cards":
            return (
              <Reveal key={i}>
                <CardGrid cols={block.cols} items={block.items} />
              </Reveal>
            );
          case "table":
            return (
              <Reveal key={i}>
                <DataTable head={block.head} rows={block.rows} />
              </Reveal>
            );
          case "callout":
            return <Callout key={i} tone={block.tone} label={block.label} text={block.text} />;
          case "locations":
            return <LocationStrip key={i} slugs={block.slugs} />;
        }
      })}
    </>
  );
}
