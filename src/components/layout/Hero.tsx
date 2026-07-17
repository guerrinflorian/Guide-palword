import Image from "next/image";
import manifest from "@/content/image-manifest.json";
import { HERO } from "@/content/hero";
import { renderRich } from "@/lib/rich";
import { StatChip } from "@/components/ui/StatChip";
import { TechCorners } from "@/components/ui/TechCorners";
import { Reveal } from "@/components/ui/Reveal";

const brand: Record<string, string> = manifest.brand;

export function Hero() {
  const logo = brand["palworld-logo"];

  return (
    <div className="relative pb-2 pt-8">
      <Reveal>
        {logo ? (
          <Image
            src={`/images/brand/${logo}`}
            alt="Logo Palworld"
            width={280}
            height={100}
            className="pointer-events-none absolute right-0 top-6 hidden w-[240px] object-contain opacity-90 drop-shadow-[0_4px_24px_rgba(63,214,196,0.25)] xl:block"
            priority
          />
        ) : null}

        <p className="font-mono text-[12px] uppercase tracking-[2.5px] text-teal">{HERO.eyebrow}</p>

        <h1 className="mb-3 mt-4 max-w-[16ch] font-display text-[clamp(34px,6vw,58px)] font-bold leading-[1.04] tracking-tight text-ink">
          {HERO.titleBefore}
          <em className="not-italic text-amber">{HERO.titleEm}</em>
          {HERO.titleAfter}
        </h1>

        <p className="mb-6 max-w-[64ch] text-[17px] leading-relaxed text-muted">{HERO.lead}</p>

        <div className="mb-7 flex flex-wrap gap-2">
          {HERO.chips.map((chip, i) => (
            <StatChip key={i} text={chip} />
          ))}
        </div>

        <div className="relative grid grid-cols-1 items-start gap-4 rounded-2xl border border-amber-line bg-gradient-to-b from-amber/12 to-amber/[0.03] p-5 text-amber sm:grid-cols-[auto_1fr] sm:gap-5 sm:px-6">
          <TechCorners />
          <span aria-hidden className="font-display text-[38px] font-bold leading-none sm:text-[46px]">
            !
          </span>
          <div>
            <h3 className="mb-1.5 font-display text-[19px] font-bold text-ink">{HERO.priorityTitle}</h3>
            <p className="text-[14.5px] leading-relaxed text-muted [&_strong]:font-semibold [&_strong]:text-ink">
              {renderRich(HERO.priorityText)}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
