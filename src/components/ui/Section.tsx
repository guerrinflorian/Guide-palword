import { cn } from "@/lib/utils";
import { renderRich } from "@/lib/rich";
import { SECTION_ICONS } from "@/lib/icons";
import { Reveal } from "@/components/ui/Reveal";
import type { Section as SectionData, Accent } from "@/content/types";

const ACCENT_TEXT: Record<Accent, string> = {
  teal: "text-teal",
  amber: "text-amber",
  violet: "text-violet",
  coral: "text-coral",
};

export function Section({
  data,
  num,
  children,
}: {
  data: SectionData;
  num: string;
  children: React.ReactNode;
}) {
  const Icon = SECTION_ICONS[data.icon];

  return (
    <section id={data.id} aria-labelledby={`${data.id}-title`} className="mt-10 border-t border-line pt-11 first-of-type:mt-2 first-of-type:border-t-0">
      <Reveal>
        <p className={cn("mb-3 flex items-center gap-2 font-pixel text-[9px] tracking-[2px]", ACCENT_TEXT[data.accent])}>
          <span aria-hidden>{"//"}</span> SECTION {num}
        </p>
        <div className="mb-2 flex items-center gap-3.5">
          {Icon ? (
            <span
              aria-hidden
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface",
                ACCENT_TEXT[data.accent]
              )}
            >
              <Icon size={19} strokeWidth={2.25} />
            </span>
          ) : null}
          <h2
            id={`${data.id}-title`}
            className="font-display text-[clamp(23px,4vw,32px)] font-bold uppercase leading-tight tracking-wide text-ink"
          >
            {data.title}
          </h2>
        </div>
        <p className="mb-7 max-w-[74ch] text-[15px] text-muted [&_strong]:font-semibold [&_strong]:text-ink">
          {renderRich(data.subtitle)}
        </p>
      </Reveal>
      {children}
    </section>
  );
}

export function SubHeading({ id, title, accent }: { id: string; title: string; accent: Accent }) {
  const BG: Record<Accent, string> = {
    teal: "bg-teal",
    amber: "bg-amber",
    violet: "bg-violet",
    coral: "bg-coral",
  };
  return (
    <h3 id={id} data-anchor className="mb-3 mt-8 flex items-center gap-2.5 font-display text-xl font-bold text-ink">
      <span aria-hidden className={cn("inline-block h-5 w-2 rounded-[3px]", BG[accent])} />
      {title}
    </h3>
  );
}
