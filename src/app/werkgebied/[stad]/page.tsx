import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return locations.map((location) => ({ stad: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>;
}): Promise<Metadata> {
  const { stad } = await params;
  const location = getLocationBySlug(stad);
  if (!location) return {};
  return {
    title: { absolute: location.metaTitle },
    description: location.metaDescription,
    alternates: { canonical: `https://movt.nl/werkgebied/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      images: [location.image],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ stad: string }>;
}) {
  const { stad } = await params;
  const location = getLocationBySlug(stad);
  if (!location) notFound();

  const localPosts = blogPosts.filter((post) => post.city === location.blogCity).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MOVT Projects",
    description: location.metaDescription,
    url: `https://movt.nl/werkgebied/${location.slug}`,
    telephone: "+31628471152",
    email: "info@movt.nl",
    image: `https://movt.nl${location.image}`,
    areaServed: [
      { "@type": "City", name: location.city.replace("de ", "") },
      ...location.areas.map((area) => ({ "@type": "Place", name: area })),
    ],
    priceRange: "$$",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://movt.nl" },
      {
        "@type": "ListItem",
        position: 2,
        name: `Werkgebied ${location.city}`,
        item: `https://movt.nl/werkgebied/${location.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end bg-charcoal-dark pt-32 pb-14">
        <div className="absolute inset-0">
          <Image
            src={location.image}
            alt={`Vloeren leggen in ${location.city} — MOVT Projects`}
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-charcoal-dark/30" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          <nav aria-label="Breadcrumb" className="font-body mb-6 text-sm text-cream/60">
            <Link href="/" className="hover:text-gold transition">Home</Link>
            <span className="mx-2">/</span>
            <span>Werkgebied</span>
          </nav>
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {location.region}
            </p>
          </div>
          <h1 className="font-heading max-w-3xl text-3xl font-semibold leading-tight text-cream md:text-5xl">
            Vloerenspecialist in {location.city}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {location.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="font-body mb-4 text-lg leading-relaxed text-charcoal/80">
                {paragraph}
              </p>
            ))}
            <h2 className="font-heading mt-10 mb-4 text-2xl font-semibold text-charcoal normal-case tracking-normal">
              Lokale kennis maakt het verschil
            </h2>
            <p className="font-body leading-relaxed text-charcoal/80">{location.localContext}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded bg-gold px-8 py-4 text-center font-semibold text-charcoal-dark transition hover:bg-gold-light"
              >
                Gratis Offerte in {location.city.replace("de ", "de ")}
              </Link>
              <a
                href="https://wa.me/31628471152"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-charcoal/20 px-8 py-4 text-center text-charcoal transition hover:border-gold hover:text-gold-dark"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Areas sidebar */}
          <aside className="rounded-xl bg-white p-8 shadow-sm self-start">
            <h2 className="font-heading mb-4 text-lg font-semibold text-charcoal normal-case tracking-normal">
              Ons werkgebied rond {location.city.replace("de ", "")}
            </h2>
            <ul className="space-y-3">
              {location.areas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                  <span className="font-body text-charcoal/80">{area}</span>
                </li>
              ))}
            </ul>
            <p className="font-body mt-6 border-t border-charcoal/10 pt-5 text-sm text-grey">
              Geen voorrijkosten binnen ons kerngebied.
            </p>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="font-heading mb-10 text-3xl font-semibold text-charcoal">
            Onze diensten in {location.city}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <svg
                  className="mb-4 h-8 w-8 text-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={service.icon} />
                </svg>
                <h3 className="font-heading mb-2 text-base font-semibold text-charcoal group-hover:text-gold-dark transition">
                  {service.shortTitle}
                </h3>
                <span className="link-gold font-body text-sm font-medium text-gold-dark">
                  Meer info →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local blog posts */}
      {localPosts.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-heading mb-10 text-3xl font-semibold text-charcoal">
              Lezen over vloeren in {location.city}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {localPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="img-zoom group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-sm font-semibold leading-snug text-charcoal group-hover:text-gold-dark transition">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold text-cream md:text-4xl">
            Nieuwe vloer in {location.city}?
          </h2>
          <p className="font-body mb-8 text-cream/70">
            Gratis inmeting en advies aan huis. Binnen 48 uur een offerte op maat.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded bg-gold px-10 py-4 font-semibold text-charcoal-dark transition hover:bg-gold-light"
          >
            Plan Gratis Adviesgesprek
          </Link>
        </div>
      </section>
    </>
  );
}
