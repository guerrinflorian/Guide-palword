"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut de page"
      className="fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-xl border border-line bg-surface2 text-ink shadow-lg shadow-black/40 transition-colors hover:border-teal-line hover:text-teal"
    >
      <ArrowUp size={18} aria-hidden />
    </button>
  );
}
