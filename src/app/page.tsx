import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSlideshow from "@/components/HeroSlideshow";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";

const featuredGrid = [
  {
    src: "/projects/commercial/kantoor-visgraat-groot.jpg",
    title: "Kantoorpand Visgraat",
    type: "Commercieel",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/projects/residential/woonkamer-visgraat-licht.jpg",
    title: "Woonkamer Licht Eiken",
    type: "Particulier",
    span: "",
  },
  {
    src: "/projects/epoxy/gietvloer-wit-kantoor.jpg",
    title: "Witte Gietvloer",
    type: "Gietvloer",
    span: "",
  },
  {
    src: "/projects/commercial/restaurant-visgraat.jpg",
    title: "Restaurant Visgraat",
    type: "Horeca",
    span: "",
  },
  {
    src: "/projects/residential/slaapkamer-visgraat-donker.jpg",
    title: "Slaapkamer Donker",
    type: "Particulier",
    span: "",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Gratis Adviesgesprek",
    description:
      "We komen langs, meten alles in en denken mee over materiaal, kleur en legpatroon. Vrijblijvend.",
  },
  {
    number: "02",
    title: "Offerte Op Maat",
    description:
      "Binnen 48 uur een heldere offerte. Geen kleine lettertjes, geen verrassingen achteraf.",
  },
  {
    number: "03",
    title: "Vakkundige Uitvoering",
    description:
      "Egaliseren, leggen, afwerken. Strak volgens planning, met oog voor elk detail.",
  },
  {
    number: "04",
    title: "Oplevering & Garantie",
    description:
      "Samen lopen we het resultaat na. Garantie op materiaal én legwerk, zwart op wit.",
  },
];

const testimonials = [
  {
    quote:
      "Ons hele kantoorpand voorzien van visgraat PVC. Strak gelegd, netjes opgeleverd en binnen planning. Echte vakmensen.",
    name: "Facilitair Manager",
    context: "Kantoorproject, 800 m²",
  },
  {
    quote:
      "Van advies tot oplevering top geregeld. Ze dachten mee over de kleur en het patroon. De vloer is nu het pronkstuk van ons huis.",
    name: "Familie uit Brabant",
    context: "Woonkamer, visgraat",
  },
  {
    quote:
      "Snelle communicatie, eerlijke prijs en een resultaat waar je u tegen zegt. Aanrader voor elk bedrijf.",
    name: "Restauranteigenaar",
    context: "Horecavloer",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="grain relative flex h-dvh min-h-[560px] items-end overflow-hidden bg-charcoal-dark">
        <HeroSlideshow />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

        <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 pb-28 md:px-12 md:pb-36">
          <div className="animate-hero-reveal animation-delay-100 mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold md:text-sm">
              MOVT Projects — Vloerspecialist
            </p>
          </div>

          <h1 className="font-heading text-[10.5vw] leading-[1.05] font-semibold text-cream sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="animate-hero-reveal animation-delay-200 block">
              Vakmanschap
            </span>
            <span className="animate-hero-reveal animation-delay-400 block">
              in <span className="text-gold-gradient">elke</span> vloer
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="animate-hero-reveal animation-delay-600 font-body max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
              Specialist in PVC visgraat, gietvloeren en meer. Door heel
              Nederland, voor bedrijven en particulieren.
            </p>

            <div className="animate-hero-reveal animation-delay-700 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="animate-pulse-gold group relative overflow-hidden rounded bg-gold px-8 py-4 text-center font-semibold text-charcoal-dark transition-all duration-300 hover:bg-gold-light"
              >
                Gratis Offerte
              </Link>
              <Link
                href="/projecten"
                className="rounded border border-cream/30 px-8 py-4 text-center text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Bekijk Projecten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee />

      {/* ============ STATS ============ */}
      <section className="relative bg-charcoal-dark py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {[
              { end: 500, suffix: "+", label: "Vloeren Gelegd" },
              { end: 10, suffix: "+", label: "Jaar Ervaring" },
              { end: 100, suffix: "%", label: "Klanttevredenheid" },
              { end: 12, suffix: "", label: "Provincies Actief" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <p className="font-heading text-5xl font-bold text-gold-gradient md:text-6xl">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="font-body mt-3 text-xs uppercase tracking-[0.25em] text-cream/50 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="herringbone-bg relative bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />
                  <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold-dark">
                    Onze Diensten
                  </p>
                </div>
                <h2 className="font-heading text-4xl font-semibold text-charcoal md:text-6xl">
                  Wat wij <span className="text-gold-dark">doen</span>
                </h2>
              </div>
              <p className="font-body max-w-sm text-grey">
                Van visgraat tot gietvloer — elk specialisme in eigen huis,
                uitgevoerd door vakmensen.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 80}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="group relative block h-full overflow-hidden rounded-xl border border-charcoal/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_20px_60px_-15px_rgba(196,162,101,0.3)]"
                >
                  <span className="font-heading absolute -top-3 right-4 text-7xl font-bold text-charcoal/[0.04] transition-colors duration-500 group-hover:text-gold/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <svg
                    className="mb-6 h-10 w-10 text-gold transition-transform duration-500 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={service.icon} />
                  </svg>
                  <h3 className="font-heading mb-3 text-xl font-semibold text-charcoal">
                    {service.shortTitle}
                  </h3>
                  <p className="font-body mb-6 text-sm leading-relaxed text-grey">
                    {service.description.split(".")[0]}.
                  </p>
                  <span className="link-gold font-body inline-flex items-center gap-2 text-sm font-medium text-gold-dark">
                    Meer info
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS — editorial grid ============ */}
      <section className="grain relative overflow-hidden bg-charcoal-dark py-24 md:py-36">
        <span
          aria-hidden
          className="text-outline font-heading pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap text-[18vw] font-bold leading-none"
        >
          PROJECTEN
        </span>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />
                  <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold">
                    Ons Werk
                  </p>
                </div>
                <h2 className="font-heading text-4xl font-semibold text-cream md:text-6xl">
                  Uitgelichte <span className="text-gold-gradient">projecten</span>
                </h2>
              </div>
              <Link
                href="/projecten"
                className="link-gold font-body self-start text-sm font-medium text-gold md:self-end"
              >
                Bekijk alle projecten →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[260px]">
            {featuredGrid.map((project, index) => (
              <ScrollReveal key={project.src} delay={index * 80} className={project.span}>
                <Link
                  href="/projecten"
                  className="img-zoom group relative block h-full w-full overflow-hidden rounded-xl"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <svg className="h-4 w-4 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-body mb-1 text-[11px] uppercase tracking-[0.25em] text-gold">
                      {project.type}
                    </p>
                    <h3 className="font-heading text-lg font-semibold text-cream md:text-xl">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center md:mb-24">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold-dark">
                  Zo Werken Wij
                </p>
                <span className="h-px w-12 bg-gold" />
              </div>
              <h2 className="font-heading text-4xl font-semibold text-charcoal md:text-6xl">
                Van eerste gesprek tot{" "}
                <span className="text-gold-dark">perfecte vloer</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 120}>
                <div className="group relative">
                  <p className="font-heading text-gold-gradient text-6xl font-bold md:text-7xl">
                    {step.number}
                  </p>
                  <div className="mt-4 h-px w-full bg-charcoal/10">
                    <div className="h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                  </div>
                  <h3 className="font-heading mt-5 text-lg font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="font-body mt-3 text-sm leading-relaxed text-grey">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="grain relative overflow-hidden bg-charcoal py-24 md:py-36">
        <div className="herringbone-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <ScrollReveal>
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />
                  <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold">
                    Over MOVT
                  </p>
                </div>
                <h2 className="font-heading mb-8 text-4xl font-semibold text-cream md:text-5xl">
                  Vakmanschap met{" "}
                  <span className="text-gold-gradient">passie</span>
                </h2>
                <p className="font-body mb-6 leading-relaxed text-cream/70">
                  MOVT Projects is opgericht door Mitch, gedreven door een
                  passie voor perfecte vloeren. Met jarenlange ervaring in de
                  vloerenbranche combineren wij ambachtelijk vakmanschap met
                  moderne technieken.
                </p>
                <p className="font-body mb-10 leading-relaxed text-cream/70">
                  Elk project — van een gezellige woonkamer tot een groot
                  kantoorpand — behandelen wij met dezelfde toewijding en oog
                  voor detail.
                </p>
                <ul className="mb-10 space-y-4">
                  {[
                    "Persoonlijk advies en gratis inmeting",
                    "Uitsluitend A-merken materialen",
                    "Garantie op materiaal én legwerk",
                  ].map((usp) => (
                    <li key={usp} className="flex items-start gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                      <span className="font-body text-cream/90">{usp}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/over-ons"
                  className="link-gold font-body inline-flex items-center gap-2 text-sm font-medium text-gold"
                >
                  Lees meer over ons →
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-[4/4.5]">
                  <Image
                    src="/projects/commercial/kantoor-visgraat-lounge.jpg"
                    alt="MOVT Projects - Kantoorpand met PVC Visgraat vloer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-gold/20 bg-charcoal-dark px-8 py-6 shadow-2xl md:block">
                  <p className="font-heading text-4xl font-bold text-gold-gradient">
                    <Counter end={10} suffix="+" />
                  </p>
                  <p className="font-body mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">
                    Jaar ervaring
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center md:mb-20">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold-dark">
                  Wat Klanten Zeggen
                </p>
                <span className="h-px w-12 bg-gold" />
              </div>
              <h2 className="font-heading text-4xl font-semibold text-charcoal md:text-6xl">
                Trots op elk <span className="text-gold-dark">resultaat</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <ScrollReveal key={t.name} delay={index * 100}>
                <figure className="flex h-full flex-col rounded-xl border border-charcoal/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(30,36,40,0.15)]">
                  <div className="mb-5 flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.98 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="font-body flex-1 leading-relaxed text-charcoal/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-charcoal/5 pt-5">
                    <p className="font-heading text-sm font-semibold text-charcoal">
                      {t.name}
                    </p>
                    <p className="font-body mt-0.5 text-xs text-grey">
                      {t.context}
                    </p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="grain relative overflow-hidden bg-charcoal-dark py-28 md:py-40">
        <div className="herringbone-bg absolute inset-0 opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
          <ScrollReveal>
            <p className="font-body mb-6 text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Klaar Voor De Volgende Stap?
            </p>
            <h2 className="font-heading mb-6 text-5xl font-semibold leading-tight text-cream md:text-7xl">
              Nieuwe vloer{" "}
              <span className="text-gold-gradient">nodig?</span>
            </h2>
            <p className="font-body mx-auto mb-12 max-w-xl text-lg text-cream/60">
              Vraag vandaag nog een gratis en vrijblijvende offerte aan. Binnen
              24 uur reactie, binnen 48 uur een offerte op maat.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="animate-pulse-gold inline-block rounded bg-gold px-10 py-5 font-semibold text-charcoal-dark transition-all duration-300 hover:bg-gold-light"
              >
                Gratis Adviesgesprek
              </Link>
              <a
                href="https://wa.me/31628471152"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded border border-cream/20 px-10 py-5 text-cream transition-all duration-300 hover:border-gold hover:text-gold"
              >
                WhatsApp Direct
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
