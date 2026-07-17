"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PawPrint, Search, X } from "lucide-react";
import { cn, normalizeForSearch } from "@/lib/utils";
import { PalPortrait } from "@/components/ui/PalPortrait";
import type { PaldexEntry } from "@/lib/paldex";

export const OPEN_PALDEX_EVENT = "open-paldex";

const THEMES: { id: string; label: string }[] = [
  { id: "combat", label: "Combat" },
  { id: "farm", label: "Base et ranch" },
  { id: "utile", label: "Utilitaires" },
  { id: "montures", label: "Montures" },
  { id: "elevage", label: "Reproduction" },
  { id: "peche", label: "Pêche" },
  { id: "farming", label: "Farming" },
];

export function PaldexModal({ entries }: { entries: PaldexEntry[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener(OPEN_PALDEX_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_PALDEX_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filtered = useMemo(() => {
    const q = normalizeForSearch(query.trim());
    return entries.filter((e) => {
      if (q && !normalizeForSearch(e.name).includes(q)) return false;
      if (theme && !e.sections.some((s) => s.id === theme)) return false;
      return true;
    });
  }, [entries, query, theme]);

  const jump = (anchor: string) => {
    setOpen(false);
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${anchor}`);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-bg/75 px-3 pt-[7vh] backdrop-blur-sm sm:px-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Paldex, tous les Pals du guide"
        className="flex max-h-[84vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <PawPrint size={16} className="shrink-0 text-teal" aria-hidden />
          <span className="font-pixel text-[10px] tracking-[2px] text-ink">PALDEX</span>
          <span className="font-mono text-[11px] text-faint">
            {filtered.length}/{entries.length}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le Paldex"
              className="flex size-8 items-center justify-center rounded-lg border border-line bg-surface2 text-muted hover:text-ink"
            >
              <X size={15} aria-hidden />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-line px-4 py-3">
          <div className="flex min-w-[180px] flex-1 items-center gap-2 rounded-xl border border-line bg-bg2 px-3">
            <Search size={13} className="shrink-0 text-faint" aria-hidden />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filtrer par nom..."
              aria-label="Filtrer les Pals par nom"
              className="w-full bg-transparent py-2 text-[13.5px] text-ink placeholder:text-faint focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setTheme(null)}
              className={cn(
                "rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide transition-colors",
                theme === null ? "border-teal-line bg-teal-soft text-teal" : "border-line text-muted hover:text-ink"
              )}
            >
              Tous
            </button>
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTheme(theme === t.id ? null : t.id)}
                className={cn(
                  "rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide transition-colors",
                  theme === t.id ? "border-teal-line bg-teal-soft text-teal" : "border-line text-muted hover:text-ink"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="thin-scroll grid flex-1 grid-cols-2 content-start gap-2.5 overflow-y-auto p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.length === 0 ? (
            <p className="col-span-full py-10 text-center text-[14px] text-muted">Aucun Pal ne correspond.</p>
          ) : (
            filtered.map((e) => (
              <div
                key={e.slug}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-bg2/60 px-2 py-3 text-center transition-colors hover:border-teal-line"
              >
                <PalPortrait name={e.name} size={52} />
                <span className="w-full truncate text-[12.5px] font-semibold text-ink">{e.name}</span>
                {e.sections.length > 0 ? (
                  <span className="flex flex-wrap justify-center gap-1">
                    {e.sections.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => jump(s.id)}
                        title={`Section ${s.num} : ${s.title}`}
                        className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-teal hover:bg-teal-soft"
                      >
                        {s.num}
                      </button>
                    ))}
                  </span>
                ) : (
                  <span className="font-mono text-[10px] text-faint">non cité</span>
                )}
              </div>
            ))
          )}
        </div>

        <div className="border-t border-line bg-bg2 px-4 py-2 font-mono text-[10.5px] text-faint">
          Survol : aperçu grand format · Clic sur l&apos;image : fiche paldb.cc · Numéro : aller à la section
        </div>
      </div>
    </div>
  );
}
