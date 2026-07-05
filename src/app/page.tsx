import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <Image
          src="/projects/commercial/restaurant-visgraat.jpg"
          alt="MOVT Projects - PVC Visgraat vloer in horecagelegenheid"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-body">
            MOVT PROJECTS
          </p>
          <h1 className="text-5xl md:text-7xl font-heading text-cream font-semibold leading-tight whitespace-pre-line">
            {"Vakmanschap\nin Elke Vloer"}
          </h1>
          <p className="mt-6 text-cream/80 text-lg md:text-xl max-w-lg whitespace-pre-line font-body">
            {"Specialist in PVC visgraat, gietvloeren en meer.\nDoor heel Nederland."}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold text-charcoal-dark font-semibold px-8 py-4 rounded text-center hover:bg-gold-light transition"
            >
              Gratis Offerte
            </Link>
            <Link
              href="/projecten"
              className="border border-cream/30 text-cream px-8 py-4 rounded text-center hover:bg-cream/10 transition"
            >
              Bekijk Projecten
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <svg
            className="w-6 h-6 text-cream/60 animate-bounce-subtle"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-cream herringbone-bg py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3 font-body">
              ONZE DIENSTEN
            </p>
            <h2 className="text-charcoal text-4xl font-heading font-semibold mb-16">
              Wat Wij Doen
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 100}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <svg
                    className="w-10 h-10 text-gold mb-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={service.icon} />
                  </svg>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-grey text-sm leading-relaxed mb-4">
                    {service.description.split(".")[0]}.
                  </p>
                  <span className="text-gold text-sm font-medium">
                    Meer info &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-charcoal-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3 font-body">
              ONS WERK
            </p>
            <h2 className="text-cream text-4xl font-heading font-semibold mb-16">
              Uitgelichte Projecten
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <Link
                  href="/projecten"
                  className="group block relative overflow-hidden rounded-xl aspect-[4/3]"
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-gold text-xs uppercase tracking-wider mb-1">
                      {project.type}
                    </p>
                    <h3 className="text-cream font-heading font-semibold text-lg">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <Link
                href="/projecten"
                className="text-gold font-medium hover:text-gold-light transition inline-flex items-center gap-2"
              >
                Bekijk Alle Projecten &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-gold py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Vloeren Gelegd" },
              { number: "10+", label: "Jaar Ervaring" },
              { number: "100%", label: "Klanttevredenheid" },
              { number: "NL", label: "Landelijke Dekking" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div>
                  <p className="text-4xl font-heading font-bold text-charcoal-dark">
                    {stat.number}
                  </p>
                  <p className="text-charcoal-dark/70 mt-1 text-sm">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why MOVT */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3 font-body">
                  OVER MOVT
                </p>
                <h2 className="text-charcoal text-4xl font-heading font-semibold mb-6">
                  Vakmanschap Met Passie
                </h2>
                <p className="text-grey leading-relaxed mb-6">
                  MOVT Projects is opgericht door Mitch, gedreven door een passie
                  voor perfecte vloeren. Met jarenlange ervaring in de vloerenbranche
                  combineren wij ambachtelijk vakmanschap met moderne technieken.
                  Elk project — van een gezellige woonkamer tot een groot
                  kantoorpand — behandelen wij met dezelfde toewijding en oog voor
                  detail.
                </p>
                <p className="text-grey leading-relaxed mb-8">
                  Wij geloven dat een mooie vloer de basis is van elk interieur. Daarom
                  nemen wij de tijd voor persoonlijk advies, werken wij uitsluitend met
                  A-merken en staan wij achter elk project dat wij opleveren.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Persoonlijk advies en gratis inmeting",
                    "Uitsluitend A-merken materialen",
                    "Garantie op materiaal én legwerk",
                  ].map((usp) => (
                    <li key={usp} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gold mt-0.5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-charcoal">{usp}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/over-ons"
                  className="text-gold font-medium hover:text-gold-light transition inline-flex items-center gap-2"
                >
                  Lees Meer Over Ons &rarr;
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/projects/commercial/kantoor-visgraat-lounge.jpg"
                  alt="MOVT Projects - Kantoorpand met PVC Visgraat vloer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="absolute inset-0 herringbone-bg opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-cream text-4xl md:text-5xl font-heading font-semibold mb-4">
              Nieuwe Vloer Nodig?
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Vraag vandaag nog een gratis en vrijblijvende offerte aan.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-charcoal-dark font-semibold px-8 py-4 rounded hover:bg-gold-light transition"
            >
              Gratis Adviesgesprek
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
