"use client";

import { useMemo, useState } from "react";
import { ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react";
import { cn, richToPlain } from "@/lib/utils";
import { renderRich } from "@/lib/rich";
import type { Rich } from "@/content/types";

interface Sort {
  col: number;
  dir: 1 | -1;
}

function compareCells(a: string, b: string): number {
  const na = parseFloat(a.replace(",", "."));
  const nb = parseFloat(b.replace(",", "."));
  const aNum = !Number.isNaN(na);
  const bNum = !Number.isNaN(nb);
  if (aNum && bNum) return na - nb;
  if (aNum) return -1;
  if (bNum) return 1;
  return a.localeCompare(b, "fr", { sensitivity: "base" });
}

/*
  Styled responsive table: horizontal scroll on mobile, sticky header,
  first column emphasized. Click a header to sort (asc, desc, off).
*/
export function DataTable({ head, rows }: { head: string[]; rows: Rich[][] }) {
  const [sort, setSort] = useState<Sort | null>(null);

  const plain = useMemo(() => rows.map((r) => r.map((c) => richToPlain(c).trim())), [rows]);

  const order = useMemo(() => {
    const idx = rows.map((_, i) => i);
    if (!sort) return idx;
    return idx.sort((a, b) => compareCells(plain[a][sort.col] ?? "", plain[b][sort.col] ?? "") * sort.dir);
  }, [rows, plain, sort]);

  const cycle = (col: number) => {
    setSort((s) => {
      if (!s || s.col !== col) return { col, dir: 1 };
      if (s.dir === 1) return { col, dir: -1 };
      return null;
    });
  };

  return (
    <div className="thin-scroll my-4 max-h-[560px] overflow-auto rounded-2xl border border-line">
      <table className="w-full min-w-[560px] border-collapse text-[13.5px]">
        <thead>
          <tr>
            {head.map((h, i) => {
              const active = sort?.col === i;
              const Icon = !active ? ChevronsUpDown : sort!.dir === 1 ? ChevronUp : ChevronDown;
              return (
                <th
                  key={i}
                  scope="col"
                  aria-sort={active ? (sort!.dir === 1 ? "ascending" : "descending") : "none"}
                  className="sticky top-0 z-10 border-b border-line bg-bg2 p-0"
                >
                  <button
                    type="button"
                    onClick={() => cycle(i)}
                    title="Trier cette colonne"
                    className={cn(
                      "flex w-full items-center gap-1.5 px-3.5 py-2.5 text-left font-mono text-[11px] font-medium uppercase tracking-wider transition-colors hover:text-ink",
                      active ? "text-amber" : "text-muted"
                    )}
                  >
                    {h}
                    <Icon size={12} className="shrink-0 opacity-70" aria-hidden />
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {order.map((ri) => (
            <tr key={ri} className="border-b border-line/70 last:border-b-0 hover:bg-surface/60">
              {rows[ri].map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-3.5 py-2.5 align-top leading-relaxed text-muted",
                    ci === 0 && "font-semibold text-ink"
                  )}
                >
                  {renderRich(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
