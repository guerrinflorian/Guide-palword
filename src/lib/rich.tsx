import React from "react";
import { Waypoint } from "@/components/ui/Waypoint";
import { PalName } from "@/components/ui/PalName";

/*
  Renders the content mini-markup:
    **texte**      -> <strong>
    {{Nom}}        -> Pal name with local icon when available
    ((x, y))       -> copyable waypoint chip
    [label](url)   -> external link
    `niveau 19`    -> mono teal data span (levels, stats, GPS readings)
*/

import { RICH_TOKEN as TOKEN } from "@/lib/utils";

export function renderRich(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  // Fresh instance per call: renderRich recurses for nested bold content,
  // sharing a global regex would corrupt lastIndex and loop forever.
  const re = new RegExp(TOKEN.source, "g");

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink [table_&]:text-amber">
          {renderRich(m[1])}
        </strong>
      );
    } else if (m[2] !== undefined) {
      nodes.push(<PalName key={key++} name={m[2]} />);
    } else if (m[3] !== undefined) {
      nodes.push(<Waypoint key={key++} coords={m[3]} />);
    } else if (m[4] !== undefined && m[5] !== undefined) {
      nodes.push(
        <a
          key={key++}
          href={m[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal underline decoration-teal/40 underline-offset-2 hover:decoration-teal"
        >
          {m[4]}
        </a>
      );
    } else if (m[6] !== undefined) {
      nodes.push(
        <span key={key++} className="font-mono text-[0.86em] text-teal">
          {m[6]}
        </span>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export { richToPlain } from "@/lib/utils";
