import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Diensten — PVC, Gietvloeren, Laminaat, Behang & Meer",
  description:
    "Alle diensten van MOVT Projects: PVC visgraat, gietvloeren, tapijttegels, laminaat, trap renovatie, behang en volledig interieur. Actief in Rhenen, Lienden, de Betuwe, Veenendaal en Tiel.",
  alternates: { canonical: "https://movt.nl/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Wat Wij Doen
            </p>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h1 className="font-heading text-4xl font-semibold text-cream md:text-5xl">
            Onze Diensten
          </h1>
          <p className="font-body mx-auto mt-4 max-w-2xl text-lg text-cream/70">
            Van vloer tot wand tot trap — elk specialisme in eigen huis,
            uitgevoerd door vakmensen uit de regio.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="img-zoom group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading mb-2 text-xl font-semibold text-charcoal normal-case tracking-normal group-hover:text-gold-dark transition">
                    {service.shortTitle}
                  </h2>
                  <p className="font-body mb-4 flex-1 text-sm leading-relaxed text-grey">
                    {service.description.split(".")[0]}.
                  </p>
                  <span className="link-gold font-body inline-flex items-center gap-2 self-start text-sm font-medium text-gold-dark">
                    Meer info →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
