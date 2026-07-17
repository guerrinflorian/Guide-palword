"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Menu, X, Users, PawPrint } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { OPEN_PALETTE_EVENT } from "@/components/search/CommandPalette";
import { OPEN_PALDEX_EVENT } from "@/components/paldex/PaldexModal";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";
import type { NavItem } from "./nav-items";

export function Header({ items, coopTag }: { items: NavItem[]; coopTag: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const active = useActiveSection(ids);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg2/85 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[1220px] items-center justify-between gap-3 px-5">
        <Logo />

        <div className="flex items-center gap-2.5">
          <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11.5px] text-muted md:flex">
            <Users size={12} className="text-teal" aria-hidden />
            {coopTag}
          </span>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent(OPEN_PALDEX_EVENT))}
            aria-label="Ouvrir le Paldex"
            className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-[13px] text-muted transition-colors hover:border-teal-line hover:text-ink"
          >
            <PawPrint size={14} aria-hidden />
            <span className="hidden md:inline">Paldex</span>
          </button>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent(OPEN_PALETTE_EVENT))}
            aria-label="Ouvrir la recherche (Ctrl+K)"
            className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-[13px] text-muted transition-colors hover:border-teal-line hover:text-ink"
          >
            <Search size={14} aria-hidden />
            <span className="hidden sm:inline">Rechercher</span>
            <kbd className="kbd hidden sm:inline">⌘K</kbd>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fermer le sommaire" : "Ouvrir le sommaire"}
            className="flex size-9 items-center justify-center rounded-xl border border-line bg-surface text-ink lg:hidden"
          >
            {menuOpen ? <X size={17} aria-hidden /> : <Menu size={17} aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Sommaire"
          className="thin-scroll max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-line bg-bg2 px-5 pb-8 pt-3 lg:hidden"
        >
          {items.map((item, i) => {
            const newGroup = i === 0 || items[i - 1].group !== item.group;
            return (
              <div key={item.id}>
                {newGroup ? (
                  <p className="mb-1.5 mt-4 font-pixel text-[8px] uppercase tracking-[2px] text-faint">{item.group}</p>
                ) : null}
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border-l-2 px-2.5 py-2 text-[14px]",
                    active === item.id
                      ? "border-amber bg-surface2 text-ink"
                      : "border-transparent text-muted hover:bg-surface hover:text-ink"
                  )}
                >
                  <span className={cn("w-5 text-right font-mono text-[11px]", active === item.id ? "text-amber" : "text-faint")}>
                    {item.num}
                  </span>
                  {item.title}
                </a>
              </div>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
