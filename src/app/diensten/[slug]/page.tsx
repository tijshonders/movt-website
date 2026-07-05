import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import FAQ from "@/components/FAQ";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} — Rhenen, Lienden & de Betuwe`,
    description: service.description,
    alternates: { canonical: `https://movt.nl/diensten/${service.slug}` },
    openGraph: {
      title: `${service.title} | MOVT Projects`,
      description: service.description,
      images: [service.heroImage],
    },
  };
}

// Map service slugs to project type keywords for filtering
function getRelatedProjects(slug: string) {
  const typeMap: Record<string, string[]> = {
    "pvc-visgraat": ["PVC Visgraat"],
    gietvloeren: ["Gietvloer"],
    tapijttegels: ["Tapijttegels"],
    laminaat: ["Laminaat"],
    "trap-renovatie": ["Trap Renovatie"],
    "commerciele-projecten": ["PVC Visgraat", "Tapijttegels", "Gietvloer", "Designvloer"],
    behang: ["PVC Visgraat", "Designvloer"],
    "volledig-interieur": ["PVC Visgraat", "Trap Renovatie", "Designvloer"],
  };

  const types = typeMap[slug] || [];
  return projects.filter((p) => types.some((t) => p.type.includes(t)));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const relatedProjects = getRelatedProjects(slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://movt.nl/diensten/${service.slug}`,
    provider: { "@id": "https://movt.nl/#business" },
    areaServed: [
      { "@type": "City", name: "Rhenen" },
      { "@type": "City", name: "Lienden" },
      { "@type": "City", name: "Veenendaal" },
      { "@type": "City", name: "Tiel" },
      { "@type": "Place", name: "Betuwe" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <nav className="mb-4 text-sm text-cream/70">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:text-gold transition-colors">
              Diensten
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream">{service.title}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-charcoal leading-relaxed mb-8">
                {service.description}
              </p>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">
                Voordelen
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-charcoal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              {relatedProjects[0] && (
                <Image
                  src={relatedProjects[0].images[0]}
                  alt={relatedProjects[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream text-center mb-12">
            Waarom kiezen voor {service.shortTitle}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-charcoal-light rounded-lg p-6 border border-cream/10"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-cream font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
              Gerealiseerde projecten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 6).map((project) => (
                <Link
                  key={project.slug}
                  href={`/projecten/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-grey">{project.type}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            Veelgestelde vragen
          </h2>
          <FAQ items={service.faq} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-6">
            Interesse in {service.title.toLowerCase()}?
          </h2>
          <p className="text-cream/70 mb-8 text-lg">
            Neem vrijblijvend contact op voor een gratis offerte op maat.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-charcoal-dark font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
