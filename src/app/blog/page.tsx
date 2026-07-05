import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Blog & Inspiratie",
    description:
      "Tips, inspiratie en advies over vloeren. Van PVC visgraat tot onderhoudstips — lees het op de MOVT Projects blog.",
    openGraph: {
      title: "Blog & Inspiratie | MOVT Projects",
      description:
        "Ontdek onze artikelen over vloeren, interieur en onderhoud.",
    },
  };
}

const blogPosts = [
  {
    title: "Welke vloer past bij jouw interieur?",
    excerpt:
      "Elke woning is anders. Ontdek welke vloersoort het beste bij jouw stijl en leefomgeving past.",
    slug: "#",
  },
  {
    title: "PVC visgraat vs laminaat: de vergelijking",
    excerpt:
      "Twee populaire keuzes, maar welke is beter voor jouw situatie? Wij zetten de voor- en nadelen op een rij.",
    slug: "#",
  },
  {
    title: "5 tips voor het onderhouden van je PVC vloer",
    excerpt:
      "Met het juiste onderhoud gaat je PVC vloer jaren mee. Lees onze praktische tips voor een vloer die blijft stralen.",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-cream md:text-5xl">
            Blog & Inspiratie
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-grey-light">
            Tips, advies en inspiratie voor je volgende vloerproject.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Placeholder image area */}
                <div className="flex h-48 items-center justify-center bg-cream-dark">
                  <span className="font-body text-sm text-grey">
                    Binnenkort beschikbaar
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="font-heading text-xl font-semibold text-charcoal">
                    {post.title}
                  </h2>
                  <p className="mt-2 font-body text-sm leading-relaxed text-grey">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.slug}
                    className="mt-4 inline-block font-body text-sm font-medium text-gold hover:text-gold-dark transition"
                  >
                    Lees meer &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <p className="font-body text-lg text-grey">
              Meer artikelen volgen binnenkort. Houd onze blog in de gaten!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
