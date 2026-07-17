"use client";

import { useState } from "react";
import { MapPin, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/*
  Signature element: a mono teal chip for map coordinates.
  Clicking it copies the coordinates to the clipboard.
*/
export function Waypoint({ coords }: { coords: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(coords);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard unavailable: chip stays informative
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copier les coordonnées ${coords}`}
      title="Copier les coordonnées"
      className={cn(
        "inline-flex translate-y-[-1px] cursor-pointer items-center gap-1.5 rounded-md px-2 py-0.5 align-middle",
        "font-mono text-[12px] font-bold leading-[1.5] whitespace-nowrap transition-colors",
        copied ? "bg-ink text-bg" : "bg-teal text-bg hover:bg-[#5ee2d2]"
      )}
    >
      {copied ? <Check size={11} strokeWidth={3} aria-hidden /> : <MapPin size={11} strokeWidth={2.75} aria-hidden />}
      {copied ? "copié !" : coords}
    </button>
  );
}
