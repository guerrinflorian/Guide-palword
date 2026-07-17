/*
  Four small corner accents that give important panels a "HUD frame" look.
  Color follows currentColor: set a text-* class on the parent.
*/
export function TechCorners() {
  const base = "pointer-events-none absolute size-3 border-current opacity-70";
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span className={`${base} left-1.5 top-1.5 border-l-2 border-t-2 rounded-tl`} />
      <span className={`${base} right-1.5 top-1.5 border-r-2 border-t-2 rounded-tr`} />
      <span className={`${base} bottom-1.5 left-1.5 border-b-2 border-l-2 rounded-bl`} />
      <span className={`${base} bottom-1.5 right-1.5 border-b-2 border-r-2 rounded-br`} />
    </span>
  );
}
