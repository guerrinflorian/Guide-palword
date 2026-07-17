"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Pos {
  x: number;
  y: number;
  below: boolean;
}

/*
  Hover preview: shows a large floating version of any small image.
  Rendered in a portal with position fixed so scrollable tables
  and cards never clip it. With href, the trigger becomes a link
  (paldb.cc Pal page) opened in a new tab.
*/
export function PalHover({
  src,
  label,
  href,
  width = 176,
  height = 176,
  className,
  children,
}: {
  src: string;
  label: string;
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState<Pos | null>(null);

  const show = () => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const margin = 14;
    const below = r.top < height + 96;
    const half = width / 2 + margin;
    setPos({
      x: Math.min(Math.max(r.left + r.width / 2, half), window.innerWidth - half),
      y: below ? r.bottom + 10 : r.top - 10,
      below,
    });
  };

  const tooltip = pos
    ? createPortal(
        <span
          aria-hidden
          className="pointer-events-none fixed z-[80] block"
          style={{
            left: pos.x,
            top: pos.y,
            transform: pos.below ? "translateX(-50%)" : "translate(-50%, -100%)",
          }}
        >
          <span className="glow-teal block rounded-2xl border border-line bg-surface2 p-2 shadow-2xl shadow-black/60">
            <Image
              src={src}
              alt=""
              width={width}
              height={height}
              className="block rounded-xl bg-bg2 object-contain"
              style={{ width, height }}
            />
            <span className="mt-1.5 block max-w-full truncate text-center font-mono text-[11px] text-muted">
              {label}
            </span>
            {href ? (
              <span className="mt-0.5 flex items-center justify-center gap-1 font-mono text-[10px] text-teal">
                <ExternalLink size={10} aria-hidden /> clic : fiche paldb.cc
              </span>
            ) : null}
          </span>
        </span>,
        document.body
      )
    : null;

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}, ouvrir la fiche paldb.cc`}
        onMouseEnter={show}
        onMouseLeave={() => setPos(null)}
        onClick={() => setPos(null)}
        className={cn("cursor-pointer no-underline", className)}
      >
        {children}
        {tooltip}
      </a>
    );
  }

  return (
    <span
      ref={ref as React.Ref<HTMLSpanElement>}
      onMouseEnter={show}
      onMouseLeave={() => setPos(null)}
      className={cn("cursor-zoom-in", className)}
    >
      {children}
      {tooltip}
    </span>
  );
}
