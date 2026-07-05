"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 md:bottom-6 md:left-auto md:right-6 z-[9990] transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Mobile: full-width bar */}
      <div className="md:hidden flex bg-charcoal border-t border-charcoal-light">
        <a
          href="tel:+31628471152"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-cream text-sm font-medium hover:bg-charcoal-light transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-gold"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          Bel Direct
        </a>
        <div className="w-px bg-charcoal-light" />
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold text-charcoal text-sm font-medium hover:bg-gold-light transition-colors"
        >
          Offerte
        </Link>
      </div>

      {/* Desktop: floating button group */}
      <div className="hidden md:flex flex-col gap-2">
        <a
          href="tel:+31628471152"
          className="flex items-center gap-2 px-4 py-3 bg-charcoal text-cream rounded-lg shadow-lg hover:bg-charcoal-light transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-gold"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">Bel Direct</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center px-4 py-3 bg-gold text-charcoal rounded-lg shadow-lg font-medium text-sm hover:bg-gold-light transition-colors"
        >
          Offerte
        </Link>
      </div>
    </div>
  );
}
