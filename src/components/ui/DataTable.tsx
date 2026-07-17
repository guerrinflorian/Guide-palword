import { cn } from "@/lib/utils";
import { renderRich } from "@/lib/rich";
import type { Rich } from "@/content/types";

/*
  Styled responsive table: horizontal scroll on mobile, sticky header,
  first column emphasized (Pal names / stations / coordinates).
*/
export function DataTable({ head, rows }: { head: string[]; rows: Rich[][] }) {
  return (
    <div className="thin-scroll my-4 max-h-[560px] overflow-auto rounded-2xl border border-line">
      <table className="w-full min-w-[560px] border-collapse text-[13.5px]">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="sticky top-0 z-10 border-b border-line bg-bg2 px-3.5 py-2.5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-line/70 last:border-b-0 hover:bg-surface/60">
              {row.map((cell, ci) => (
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
