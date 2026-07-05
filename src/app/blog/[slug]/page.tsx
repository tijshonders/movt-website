import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://movt.nl/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://movt.nl${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "MOVT Projects",
      url: "https://movt.nl",
    },
    publisher: {
      "@type": "Organization",
      name: "MOVT Projects",
      url: "https://movt.nl",
    },
    mainEntityOfPage: `https://movt.nl/blog/${post.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end bg-charcoal-dark pt-32 pb-14">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-charcoal-dark/30" />
        </div>
        <div className="relative mx-auto w-full max-w-3xl px-6">
          <nav aria-label="Breadcrumb" className="font-body mb-6 text-sm text-cream/60">
            <Link href="/" className="hover:text-gold transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gold transition">Blog</Link>
          </nav>
          <p className="font-body mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {post.city} · {new Date(post.date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <h1 className="font-heading text-3xl font-semibold leading-tight text-cream md:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              {section.heading && (
                <h2 className="font-heading mb-4 text-2xl font-semibold text-charcoal normal-case tracking-normal md:text-3xl">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="font-body mb-4 leading-relaxed text-charcoal/80">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mb-4 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                      <span className="font-body text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* FAQ */}
          <section className="mt-14 border-t border-charcoal/10 pt-10">
            <h2 className="font-heading mb-6 text-2xl font-semibold text-charcoal normal-case tracking-normal">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {post.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-charcoal/5 bg-white p-5"
                >
                  <summary className="font-heading cursor-pointer list-none text-base font-semibold text-charcoal">
                    {item.question}
                  </summary>
                  <p className="font-body mt-3 leading-relaxed text-charcoal/70">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-14 rounded-xl bg-charcoal p-8 text-center md:p-10">
            <h2 className="font-heading mb-3 text-2xl font-semibold text-cream normal-case tracking-normal">
              Gratis adviesgesprek in {post.city}?
            </h2>
            <p className="font-body mb-6 text-cream/70">
              Wij komen vrijblijvend langs voor inmeting en advies. Binnen 48 uur een offerte op maat.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded bg-gold px-8 py-4 font-semibold text-charcoal-dark transition hover:bg-gold-light"
              >
                Offerte Aanvragen
              </Link>
              <a
                href="https://wa.me/31628471152"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-cream/20 px-8 py-4 text-cream transition hover:border-gold hover:text-gold"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-cream-dark py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="font-heading mb-8 text-2xl font-semibold text-charcoal">
            Lees ook
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="img-zoom group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-body mb-2 text-xs uppercase tracking-[0.2em] text-gold-dark">
                    {relatedPost.city}
                  </p>
                  <h3 className="font-heading text-base font-semibold leading-snug text-charcoal group-hover:text-gold-dark transition">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
