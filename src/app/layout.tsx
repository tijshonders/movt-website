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
    default: "MOVT Projects — Specialist in PVC Visgraat & Vloeren",
    template: "%s | MOVT Projects",
  },
  description:
    "MOVT Projects is dé specialist in PVC visgraat, gietvloeren, tapijttegels en meer. Vakmanschap door heel Nederland. Vraag een gratis offerte aan.",
  keywords: [
    "PVC visgraat",
    "vloeren leggen",
    "gietvloer",
    "tapijttegels",
    "laminaat",
    "trap renovatie",
    "vloerlegger",
    "MOVT Projects",
  ],
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
  return (
    <html lang="nl" className={`${outfit.variable} ${workSans.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
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
