import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectFilter } from "@/components/ProjectFilter";

export const metadata: Metadata = {
  title: "Onze Projecten",
  description:
    "Bekijk het werk van MOVT Projects. Van particuliere woningen tot grote commerciële projecten — PVC visgraat, gietvloeren, designvloeren en meer.",
  openGraph: {
    title: "Onze Projecten | MOVT Projects",
    description:
      "Van particuliere woningen tot grote commerciële projecten — bekijk ons werk.",
  },
};

export default function ProjectenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-grey-light">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li className="text-gold">Projecten</li>
            </ol>
          </nav>

          <h1 className="font-heading text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
            Onze Projecten
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-grey-light md:text-xl">
            Van particuliere woningen tot grote commerciële projecten — bekijk
            ons werk.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProjectFilter projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-cream md:text-4xl">
            Uw Project Hier?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-grey-light">
            Wij denken graag met u mee over de perfecte vloeroplossing. Neem
            vrijblijvend contact op voor een gratis adviesgesprek.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-charcoal transition-all hover:bg-gold-light hover:scale-105"
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </>
  );
}
