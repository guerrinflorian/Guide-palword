import { FOOTER_TEXT } from "@/content/hero";
import { renderRich } from "@/lib/rich";
import { Monogram } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line pt-8 text-[12.5px] leading-relaxed text-faint">
      <div className="mb-4 flex items-center gap-3">
        <Monogram size={26} />
        <span className="font-pixel text-[8px] tracking-[2px] text-muted">FIN DU CARNET</span>
      </div>
      <p className="max-w-[90ch] [&_strong]:text-muted">{renderRich(FOOTER_TEXT)}</p>
      <p className="mt-3">
        Guide de fan privé, usage personnel. Palworld est une marque de Pocketpair, Inc. Ce site n&apos;est ni affilié
        ni approuvé par Pocketpair.
      </p>
    </footer>
  );
}
