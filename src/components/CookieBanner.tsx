"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const preference = localStorage.getItem("movt-cookies");
    if (!preference) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(value: "all" | "necessary") {
    localStorage.setItem("movt-cookies", value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up"
      style={{
        animation: "slideUp 0.4s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div className="bg-charcoal border-t border-charcoal-light px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-cream text-sm flex-1">
            Wij gebruiken cookies om je ervaring te verbeteren en onze website te
            optimaliseren.{" "}
            <Link
              href="/cookie-beleid"
              className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
            >
              Lees meer
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => accept("necessary")}
              className="px-4 py-2 text-sm border border-cream/30 text-cream rounded hover:border-cream/60 transition-colors cursor-pointer"
            >
              Alleen noodzakelijk
            </button>
            <button
              onClick={() => accept("all")}
              className="px-4 py-2 text-sm bg-gold text-charcoal font-medium rounded hover:bg-gold-light transition-colors cursor-pointer"
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
