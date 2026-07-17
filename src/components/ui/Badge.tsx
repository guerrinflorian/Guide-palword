import { cn } from "@/lib/utils";
import type { BadgeTone } from "@/content/types";

const TONES: Record<BadgeTone, string> = {
  combat: "bg-coral-soft text-coral border-coral-line",
  base: "bg-amber-soft text-amber border-amber-line",
  breed: "bg-violet-soft text-violet border-violet-line",
  mount: "bg-teal-soft text-teal border-teal-line",
};

export function Badge({ label, tone }: { label: string; tone: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider",
        TONES[tone]
      )}
    >
      {label}
    </span>
  );
}
