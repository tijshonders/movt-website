import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Over Ons",
    description:
      "Leer meer over MOVT Projects en oprichter Mitch Onink. Vakmanschap, passie voor vloeren en persoonlijke service door heel Nederland.",
    openGraph: {
      title: "Over MOVT Projects",
      description:
        "Ontdek het verhaal achter MOVT Projects. Jarenlange ervaring in PVC visgraat, gietvloeren en meer.",
      images: ["/projects/commercial/kantoor-visgraat-lounge.jpg"],
    },
  };
}

const werkwijzeSteps = [
  {
    number: "1",
    title: "Kennismaking & Advies",
    description:
      "We bespreken uw wensen, bekijken de ruimte en adviseren over de beste vloeroplossing voor uw situatie.",
  },
  {
    number: "2",
    title: "Inmeting & Offerte",
    description:
      "We meten de ruimte nauwkeurig op en stellen een transparante offerte op, zonder verborgen kosten.",
  },
  {
    number: "3",
    title: "Vakkundige Installatie",
    description:
      "Ons team legt uw nieuwe vloer met de grootst mogelijke zorg en aandacht voor detail.",
  },
  {
    number: "4",
    title: "Oplevering & Nazorg",
    description:
      "Na oplevering controleren we samen het resultaat. Ook na het project staan we voor u klaar.",
  },
];

const usps = [
  {
    title: "Vakmanschap",
    description:
      "Jarenlange ervaring en oog voor detail zorgen voor een perfect eindresultaat bij elk project.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Landelijke Dekking",
    description:
      "Wij werken door heel Nederland. Van Amsterdam tot Maastricht, wij komen naar u toe.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Persoonlijke Aanpak",
    description:
      "Geen grote organisatie, maar directe lijnen. U spreekt altijd met dezelfde vakman.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Garantie",
    description:
      "Wij staan achter ons werk. Op al onze projecten geven wij garantie voor uw gemoedsrust.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="/projects/commercial/kantoor-visgraat-lounge.jpg"
          alt="MOVT Projects kantoor met visgraatvloer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal-dark/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="font-heading text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
            Over MOVT Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-cream/80">
            Vakmanschap en passie in elke vierkante meter
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/projects/commercial/kantoor-visgraat-lounge.jpg"
              alt="MOVT Projects vakmanschap"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              Het Verhaal van MOVT
            </h2>
            <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-grey">
              <p>
                MOVT Projects is opgericht door Mitch Onink vanuit een diepe passie voor vloeren en
                vakmanschap. Wat begon als een ambacht groeide uit tot een gerespecteerd bedrijf dat
                door heel Nederland actief is.
              </p>
              <p>
                Met jarenlange ervaring in het leggen van PVC visgraat, gietvloeren, tapijttegels en
                meer, weet Mitch precies wat er nodig is om van elke ruimte iets bijzonders te maken.
                Elk project wordt benaderd met dezelfde toewijding en aandacht voor detail.
              </p>
              <p>
                Bij MOVT Projects draait alles om kwaliteit en persoonlijk contact. Geen
                doorgeschakelde telefoontjes of wisselende monteurs. U spreekt direct met de vakman
                die ook daadwerkelijk uw vloer legt. Dat is de MOVT-garantie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-cream md:text-4xl">
              Onze Werkwijze
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-grey-light">
              Van eerste kennismaking tot oplevering: zo werken wij.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {werkwijzeSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold">
                  <span className="font-heading text-2xl font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm text-grey-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              Waarom MOVT Projects?
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp) => (
              <div
                key={usp.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  {usp.icon}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal">
                  {usp.title}
                </h3>
                <p className="mt-2 font-body text-sm text-grey">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal-dark md:text-4xl">
            Klaar voor een nieuwe vloer?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-charcoal-dark/80">
            Neem vandaag nog contact met ons op voor een vrijblijvend adviesgesprek.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-charcoal px-8 py-4 font-heading text-lg font-semibold text-cream transition hover:bg-charcoal-light"
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </>
  );
}
