import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export function generateMetadata(): Metadata {
  return {
    title: "Contact & Offerte Aanvragen",
    description:
      "Neem contact op met MOVT Projects voor een vrijblijvende offerte. Bel, mail of WhatsApp ons direct. Wij zijn door heel Nederland actief.",
    openGraph: {
      title: "Contact & Offerte Aanvragen | MOVT Projects",
      description:
        "Vraag een vrijblijvende offerte aan voor uw vloerproject. MOVT Projects is bereikbaar via telefoon, email en WhatsApp.",
    },
  };
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MOVT Projects",
    description:
      "Specialist in PVC visgraat, gietvloeren, tapijttegels en meer door heel Nederland.",
    telephone: "+31628471152",
    email: "info@movt.nl",
    url: "https://movt.nl",
    areaServed: [
      { "@type": "City", name: "Rhenen" },
      { "@type": "City", name: "Lienden" },
      { "@type": "City", name: "Veenendaal" },
      { "@type": "City", name: "Tiel" },
      { "@type": "Country", name: "Netherlands" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-cream md:text-5xl">
            Neem Contact Op
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-grey-light">
            Vraag een vrijblijvende offerte aan of bel ons direct.
          </p>
        </div>
      </section>

      {/* Two Columns */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Left: Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">Telefoon</h3>
              </div>
              <a
                href="tel:+31628471152"
                className="font-body text-lg text-gold hover:text-gold-dark transition"
              >
                06 28 47 11 52
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">Email</h3>
              </div>
              <a
                href="mailto:info@movt.nl"
                className="font-body text-lg text-gold hover:text-gold-dark transition"
              >
                info@movt.nl
              </a>
            </div>

            {/* WhatsApp */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">WhatsApp</h3>
              </div>
              <a
                href="https://wa.me/31628471152"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-heading text-sm font-semibold text-white transition hover:bg-green-700"
              >
                WhatsApp Ons
              </a>
            </div>

            {/* Werkgebied */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">Werkgebied</h3>
              </div>
              <p className="font-body text-grey">Heel Nederland</p>
            </div>

            {/* Openingstijden */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">Openingstijden</h3>
              </div>
              <div className="space-y-1 font-body text-grey">
                <p>Ma - Vr: 08:00 - 18:00</p>
                <p>Za: op afspraak</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
