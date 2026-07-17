"use client";

import { useMemo } from "react";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";
import type { NavItem } from "./nav-items";

/*
  Sticky desktop table of contents with scroll-spy highlight.
  On mobile the same list lives in the Header drawer.
*/
export function Sidebar({ items }: { items: NavItem[] }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const active = useActiveSection(ids);

  return (
    <aside className="hidden lg:block">
      <nav
        aria-label="Sommaire"
        className="thin-scroll sticky top-[76px] max-h-[calc(100vh-92px)] overflow-y-auto pb-10 pr-2"
      >
        {items.map((item, i) => {
          const newGroup = i === 0 || items[i - 1].group !== item.group;
          return (
            <div key={item.id}>
              {newGroup ? (
                <p className={cn("mb-2 ml-2.5 font-pixel text-[8px] uppercase tracking-[2px] text-faint", i === 0 ? "mt-1" : "mt-5")}>
                  {item.group}
                </p>
              ) : null}
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg border-l-2 px-2.5 py-[7px] text-[13.5px] font-medium transition-colors",
                  active === item.id
                    ? "border-amber bg-surface2 text-ink"
                    : "border-transparent text-muted hover:bg-surface hover:text-ink"
                )}
              >
                <span className={cn("w-4 shrink-0 text-right font-mono text-[11px]", active === item.id ? "text-amber" : "text-faint")}>
                  {item.num}
                </span>
                <span className="truncate">{item.title}</span>
              </a>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
