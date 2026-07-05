import Link from "next/link";
import LogoMark from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Herringbone pattern overlay */}
      <div className="herringbone-bg absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark className="h-12 w-12 text-cream" />
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  MOVT <span className="text-gold">Projects</span>
                </h3>
              </div>
              <p className="text-cream-dark mt-3 text-sm">
                Vakmanschap in elke vloer
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/70 hover:text-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/70 hover:text-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-cream/70 hover:text-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Diensten */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Diensten
            </h4>
            <ul className="space-y-2">
              {[
                { label: "PVC Visgraat", href: "#" },
                { label: "Gietvloeren", href: "#" },
                { label: "Tapijttegels", href: "#" },
                { label: "Laminaat", href: "#" },
                { label: "Trap Renovatie", href: "#" },
                { label: "Commercieel", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigatie */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Navigatie
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Projecten", href: "/projecten" },
                { label: "Over Ons", href: "/over-ons" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-cream/70">Email:</span>
                <a
                  href="mailto:info@movt.nl"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  info@movt.nl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cream/70">Telefoon:</span>
                <a
                  href="tel:+31628471152"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  06 28 47 11 52
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cream/70">Werkgebied:</span>
                <span className="text-cream/70">Heel Nederland</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-xs">
            &copy; 2025 MOVT Projects. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-cream/50 hover:text-gold transition-colors text-xs"
            >
              Privacy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-cream/50 hover:text-gold transition-colors text-xs"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
