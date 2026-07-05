import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingCTA from "@/components/FloatingCTA";
import ExitPopup from "@/components/ExitPopup";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

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
    <html lang="nl" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieBanner />
        <ExitPopup />
      </body>
    </html>
  );
}
