import { Lightbulb, TriangleAlert, Sparkles, Archive, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { renderRich } from "@/lib/rich";
import type { CalloutTone, Rich } from "@/content/types";

const TONES: Record<CalloutTone, { box: string; label: string; icon: LucideIcon }> = {
  tip: { box: "bg-amber-soft/60 border-amber-line", label: "text-amber", icon: Lightbulb },
  warn: { box: "bg-coral-soft/60 border-coral-line", label: "text-coral", icon: TriangleAlert },
  combo: { box: "bg-violet-soft/60 border-violet-line", label: "text-violet", icon: Sparkles },
  stale: { box: "bg-[#171717] border-[#333333]", label: "text-faint", icon: Archive },
};

export function Callout({ tone, label, text }: { tone: CalloutTone; label: string; text: Rich }) {
  const t = TONES[tone];
  const Icon = t.icon;

  return (
    <div className={cn("my-4 rounded-xl border px-4 py-3.5", t.box)}>
      <span className={cn("mb-1.5 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[1.5px]", t.label)}>
        <Icon size={13} strokeWidth={2.5} aria-hidden />
        {label}
      </span>
      <p
        className={cn(
          "text-[14px] leading-relaxed",
          tone === "stale" ? "text-muted [&_strong]:text-ink/80" : "text-ink/90 [&_strong]:text-ink [&_strong]:font-semibold"
        )}
      >
        {renderRich(text)}
      </p>
    </div>
  );
}
