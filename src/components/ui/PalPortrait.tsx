import Image from "next/image";
import manifest from "@/content/image-manifest.json";
import { slugify, cn } from "@/lib/utils";
import type { Accent } from "@/content/types";

const pals: Record<string, string> = manifest.pals;

const ACCENT_HEX: Record<Accent, string> = {
  teal: "#3fd6c4",
  amber: "#f5b942",
  violet: "#bb8cf2",
  coral: "#ff7b5c",
};

/*
  Elegant SVG stand-in when a Pal image is not downloaded yet:
  abstract creature silhouette on a soft role-colored gradient.
*/
function FallbackCreature({ accent, size }: { accent: Accent; size: number }) {
  const c = ACCENT_HEX[accent];
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden className="shrink-0">
      <defs>
        <radialGradient id={`palfall-${accent}`} cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor={c} stopOpacity="0.32" />
          <stop offset="100%" stopColor={c} stopOpacity="0.06" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#palfall-${accent})`} />
      <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="11.25" fill="none" stroke={c} strokeOpacity="0.35" strokeWidth="1.5" />
      <path
        d="M24 10c-2.5 4.5-7.5 6.5-7.5 12.5 0 4.6 3.4 8 7.5 8s7.5-3.4 7.5-8C31.5 16.5 26.5 14.5 24 10z"
        fill={c}
        fillOpacity="0.75"
      />
      <circle cx="24" cy="23.5" r="2.2" fill="#0b1410" />
      <path d="M13 38c7-2.4 15-2.4 22 0" fill="none" stroke={c} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/*
  Pal portrait with a guaranteed graceful fallback: local image when
  downloaded (or dropped manually in public/images/pals/), styled SVG otherwise.
*/
export function PalPortrait({
  name,
  accent = "teal",
  size = 48,
  className,
}: {
  name: string;
  accent?: Accent;
  size?: number;
  className?: string;
}) {
  const file = pals[slugify(name)];

  if (!file) {
    return (
      <span className={cn("inline-block shrink-0", className)} title={name}>
        <FallbackCreature accent={accent} size={size} />
      </span>
    );
  }

  return (
    <Image
      src={`/images/pals/${file}`}
      alt={name}
      width={size}
      height={size}
      className={cn("shrink-0 rounded-xl border border-line bg-surface2 object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
