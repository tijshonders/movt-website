"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0) {
      const alreadyShown = sessionStorage.getItem("movt-exit-shown");
      if (!alreadyShown) {
        sessionStorage.setItem("movt-exit-shown", "true");
        setVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    // Only on desktop (pointer: fine or width > 768)
    const isDesktop =
      window.matchMedia("(pointer: fine)").matches || window.innerWidth > 768;
    if (!isDesktop) return;

    // Don't show if already shown this session
    if (sessionStorage.getItem("movt-exit-shown")) return;

    // Wait 5 seconds before enabling
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  function close() {
    setVisible(false);
    document.removeEventListener("mouseleave", handleMouseLeave);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={close}
      style={{
        animation: "fadeIn 0.3s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Modal */}
      <div
        className="relative bg-charcoal rounded-xl p-8 max-w-md w-full shadow-2xl border border-charcoal-light"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "scaleIn 0.3s ease-out forwards",
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-grey hover:text-cream transition-colors cursor-pointer"
          aria-label="Sluiten"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gold"
            >
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
            </svg>
          </div>
          <h2 className="text-cream text-xl font-semibold mb-2">
            Wacht! Vergeet uw gratis adviesgesprek niet
          </h2>
          <p className="text-grey text-sm mb-6">
            Ontvang vrijblijvend advies over de perfecte vloer voor uw ruimte.
          </p>
          <Link
            href="/contact"
            onClick={close}
            className="inline-block w-full px-6 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-gold-light transition-colors text-center"
          >
            Ja, ik wil gratis advies
          </Link>
        </div>
      </div>
    </div>
  );
}
