import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Inspiratie — Vloeren in Rhenen, Lienden, Veenendaal & Tiel",
  description:
    "Tips, prijzen en inspiratie over PVC visgraat, gietvloeren, trap renovatie en interieur. Voor Rhenen, Lienden, Veenendaal, Tiel en omgeving.",
  alternates: { canonical: "https://movt.nl/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <p className="font-body text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Kennis & Inspiratie
            </p>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h1 className="font-heading text-4xl font-semibold text-cream md:text-5xl">
            Blog
          </h1>
          <p className="font-body mx-auto mt-4 max-w-2xl text-lg text-cream/70">
            Alles over vloeren, trappen en interieur — met lokale kennis van
            Rhenen, Lienden, Veenendaal en Tiel.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="img-zoom group grid overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="font-body mb-3 text-xs uppercase tracking-[0.25em] text-gold-dark">
                {featured.city} · Uitgelicht
              </p>
              <h2 className="font-heading mb-4 text-2xl font-semibold leading-tight text-charcoal normal-case tracking-normal group-hover:text-gold-dark transition md:text-3xl">
                {featured.title}
              </h2>
              <p className="font-body mb-6 leading-relaxed text-grey">
                {featured.excerpt}
              </p>
              <span className="link-gold font-body inline-flex items-center gap-2 self-start text-sm font-medium text-gold-dark">
                Lees verder →
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="img-zoom group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-body mb-2 text-xs uppercase tracking-[0.2em] text-gold-dark">
                    {post.city} ·{" "}
                    {new Date(post.date).toLocaleDateString("nl-NL", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-heading mb-3 text-lg font-semibold leading-snug text-charcoal group-hover:text-gold-dark transition">
                    {post.title}
                  </h3>
                  <p className="font-body mb-4 flex-1 text-sm leading-relaxed text-grey">
                    {post.excerpt}
                  </p>
                  <span className="link-gold font-body inline-flex items-center gap-2 self-start text-sm font-medium text-gold-dark">
                    Lees verder →
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
