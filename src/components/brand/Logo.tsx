/*
  Original brand: monogram + wordmark. No official Palworld logo here,
  this is the site identity (the official logo only appears in the hero,
  served locally, if the download script found it).
*/
export function Monogram({ size = 34 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden className="shrink-0">
      <rect width="64" height="64" rx="14" fill="var(--bg-2)" />
      <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="var(--line)" strokeWidth="3" />
      <path d="M10 44c8-3 12-10 14-18" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <path d="M8 52c12-4 18-14 20-26" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M32 14c-3 6-9 8-9 15 0 5 4 9 9 9s9-4 9-9c0-7-6-9-9-15z" fill="var(--amber)" />
      <circle cx="32" cy="30" r="3" fill="var(--bg)" />
      <path d="M44 50l5-8 5 8" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="52.5" r="2" fill="var(--teal)" />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Guide de terrain Palworld 1.0, retour en haut">
      <Monogram size={34} />
      <span className="leading-none">
        <span className="block font-display text-[15px] font-bold tracking-[0.08em] text-ink">
          GUIDE DE TERRAIN
        </span>
        <span className="mt-1.5 block font-pixel text-[7px] tracking-[2px] text-muted">PALWORLD 1.0</span>
      </span>
    </a>
  );
}
