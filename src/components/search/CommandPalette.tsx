"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search, CornerDownLeft, MapPinned } from "lucide-react";
import { cn, normalizeForSearch } from "@/lib/utils";
import type { SearchEntry } from "@/lib/searchIndex";

export const OPEN_PALETTE_EVENT = "open-command-palette";

function snippet(text: string, query: string): string {
  const idx = normalizeForSearch(text).indexOf(query);
  if (idx < 0) return text.slice(0, 90);
  const start = Math.max(0, idx - 30);
  return (start > 0 ? "..." : "") + text.slice(start, idx + query.length + 60).trim() + "...";
}

export function CommandPalette({ entries }: { entries: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = normalizeForSearch(query.trim());
    if (!q) return entries.filter((e) => e.anchor === e.sectionId);
    return entries
      .map((e) => {
        const inTitle = normalizeForSearch(e.title).includes(q);
        const inText = normalizeForSearch(e.text).includes(q);
        return { entry: e, score: inTitle ? 2 : inText ? 1 : 0 };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((r) => r.entry);
  }, [entries, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const jump = useCallback(
    (anchor: string) => {
      close();
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${anchor}`);
      }
    },
    [close]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-bg/70 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recherche dans le guide"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-2.5 border-b border-line px-4">
          <Search size={16} className="shrink-0 text-teal" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && results[active]) {
                jump(results[active].anchor);
              }
            }}
            placeholder="Chercher un Pal, une coordonnée, une astuce..."
            aria-label="Rechercher dans le guide"
            className="w-full bg-transparent py-3.5 font-body text-[15px] text-ink placeholder:text-faint focus:outline-none"
          />
          <kbd className="kbd shrink-0">esc</kbd>
        </div>

        <ul ref={listRef} role="listbox" aria-label="Résultats" className="thin-scroll max-h-[46vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-center text-[14px] text-muted">Aucun résultat pour « {query} »</li>
          ) : (
            results.map((r, i) => (
              <li key={r.anchor} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  onClick={() => jump(r.anchor)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                    i === active ? "bg-surface2" : "hover:bg-surface2/60"
                  )}
                >
                  <MapPinned size={15} className={cn("mt-1 shrink-0", i === active ? "text-teal" : "text-faint")} aria-hidden />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-semibold text-ink">
                      {r.title}
                      {r.title !== r.sectionTitle ? (
                        <span className="ml-2 font-mono text-[10.5px] font-normal uppercase tracking-wide text-faint">
                          {r.sectionNum} · {r.sectionTitle}
                        </span>
                      ) : (
                        <span className="ml-2 font-mono text-[10.5px] font-normal uppercase tracking-wide text-faint">
                          section {r.sectionNum}
                        </span>
                      )}
                    </span>
                    {query.trim() ? (
                      <span className="mt-0.5 block truncate text-[12.5px] text-muted">{snippet(r.text, normalizeForSearch(query.trim()))}</span>
                    ) : null}
                  </span>
                  {i === active ? <CornerDownLeft size={14} className="mt-1 shrink-0 text-faint" aria-hidden /> : null}
                </button>
              </li>
            ))
          )}
        </ul>

        <div className="flex items-center gap-3 border-t border-line bg-bg2 px-4 py-2 font-mono text-[10.5px] text-faint">
          <span className="flex items-center gap-1">
            <kbd className="kbd">↑↓</kbd> naviguer
          </span>
          <span className="flex items-center gap-1">
            <kbd className="kbd">entrée</kbd> aller à la section
          </span>
        </div>
      </div>
    </div>
  );
}
