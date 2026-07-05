import type { Metadata, Viewport } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingCTA from "@/components/FloatingCTA";
import ExitPopup from "@/components/ExitPopup";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C3436",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://movt.nl"),
  title: {
    default: "MOVT Projects — Vloerenspecialist Rhenen, Lienden & de Betuwe",
    template: "%s | MOVT Projects",
  },
  description:
    "MOVT Projects is dé vloerenspecialist van Rhenen, Lienden, Veenendaal, Tiel en de Betuwe. PVC visgraat, gietvloeren, laminaat en meer. Gratis offerte binnen 48 uur.",
  keywords: [
    "PVC visgraat",
    "vloeren leggen",
    "gietvloer",
    "tapijttegels",
    "laminaat",
    "trap renovatie",
    "vloerenspecialist Rhenen",
    "vloerenspecialist Lienden",
    "vloeren Betuwe",
    "MOVT Projects",
  ],
  alternates: { canonical: "https://movt.nl" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "MOVT Projects",
    title: "MOVT Projects — Specialist in PVC Visgraat & Vloeren",
    description:
      "Vakmanschap in elke vloer. PVC visgraat, gietvloeren, tapijttegels en meer door heel Nederland.",
    images: ["/projects/commercial/kantoor-visgraat-lounge.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://movt.nl/#business",
    name: "MOVT Projects",
    description:
      "Vloerenspecialist in Rhenen, Lienden, Veenendaal, Tiel en de Betuwe. PVC visgraat, gietvloeren, tapijttegels, laminaat, trap renovatie en behang.",
    url: "https://movt.nl",
    telephone: "+31628471152",
    email: "info@movt.nl",
    logo: "https://movt.nl/brand/logo-full.png",
    image: "https://movt.nl/brand/logo-full.png",
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Rhenen" },
      { "@type": "City", name: "Lienden" },
      { "@type": "City", name: "Veenendaal" },
      { "@type": "City", name: "Tiel" },
      { "@type": "Place", name: "Betuwe" },
    ],
  };

  return (
    <html lang="nl" className={`${outfit.variable} ${workSans.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal-dark"
        >
          Naar hoofdinhoud
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieBanner />
        <ExitPopup />
      </body>
    </html>
  );
}
