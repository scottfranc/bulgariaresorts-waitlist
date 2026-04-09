import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {bestForPages, bestTimePages, comparePages} from "@/lib/seo-pages";
import {env} from "@/lib/env";

type PageProps = {
  params: Promise<{slug: string}>;
};

export async function generateStaticParams() {
  return bestForPages.map((page) => ({slug: page.slug}));
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug} = await params;
  const page = bestForPages.find((entry) => entry.slug === slug);
  if (!page) return {};

  return {
    title: `${page.title} | Bulgaria Resorts`,
    description: page.description,
  };
}

export default async function BestForPage({params}: PageProps) {
  const {slug} = await params;
  const page = bestForPages.find((entry) => entry.slug === slug);
  if (!page) notFound();
  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("en-GB", {year: "numeric", month: "short", day: "numeric"});

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Guides",
        item: `${env.siteUrl}/guides`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Best For",
        item: `${env.siteUrl}/best-for/${page.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Which resorts are best for ${page.title.toLowerCase().replace("best ", "")}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: page.resorts.map((resort) => `${resort.name}: ${resort.why}`).join(" "),
        },
      },
      {
        "@type": "Question",
        name: "What should I prioritize when choosing a Bulgaria resort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: page.highlights.join(" "),
        },
      },
      {
        "@type": "Question",
        name: "Where can I compare more Bulgaria resort options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Browse additional planning pages at ${env.siteUrl}/guides for comparisons and best-time advice.`,
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    datePublished: page.publishedAt,
    dateModified: page.updatedAt,
    author: {
      "@type": "Organization",
      name: "Bulgaria Resorts Editorial Team",
    },
    mainEntityOfPage: `${env.siteUrl}/best-for/${page.slug}`,
  };
  const relatedBestFor = bestForPages.filter((entry) => entry.slug !== page.slug).slice(0, 2);
  const relatedCompare = comparePages.slice(0, 1);
  const relatedTiming = bestTimePages.slice(0, 1);

  return (
    <div className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}}
      />
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Best for</p>
              <p className="mt-2 text-xs text-neutral-500">
                By Bulgaria Resorts Editorial Team • Updated {formatDate(page.updatedAt)}
              </p>
            </div>
            <Breadcrumbs
              className="sm:pt-0.5"
              items={[
                {label: "Home", href: "/"},
                {label: "Guides", href: "/guides"},
                {label: "Best For", href: "/guides"},
                {label: page.title},
              ]}
            />
          </div>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-neutral-500">{page.intro}</p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <h2 className="font-display text-2xl text-neutral-900">Recommended options</h2>
              <ul className="mt-5 space-y-5">
                {page.resorts.map((resort) => (
                  <li key={resort.name} className="surface p-5">
                    <p className="text-base font-semibold text-neutral-900">{resort.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{resort.why}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <h2 className="font-display text-2xl text-neutral-900">Planning notes</h2>
              <ul className="mt-5 space-y-3">
                {page.highlights.map((note) => (
                  <li key={note} className="text-sm leading-relaxed text-neutral-600">
                    - {note}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <p className="mt-10 text-sm text-neutral-500">
            Looking for more breakdowns?{" "}
            <Link href="/guides" className="link-muted">
              Browse all planning guides
            </Link>
            .
          </p>

          <div className="mt-12 border-t border-neutral-200/80 pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Next best reads</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {relatedBestFor.map((entry) => (
                <li key={entry.slug} className="surface p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Best for</p>
                  <Link className="mt-2 block text-sm font-medium text-neutral-900 transition hover:text-[var(--accent)]" href={`/best-for/${entry.slug}`}>
                    {entry.title}
                  </Link>
                </li>
              ))}
              {relatedCompare.map((entry) => (
                <li key={entry.slug} className="surface p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Compare</p>
                  <Link className="mt-2 block text-sm font-medium text-neutral-900 transition hover:text-[var(--accent)]" href={`/compare/${entry.slug}`}>
                    {entry.title}
                  </Link>
                </li>
              ))}
              {relatedTiming.map((entry) => (
                <li key={entry.resort} className="surface p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Best time</p>
                  <Link className="mt-2 block text-sm font-medium text-neutral-900 transition hover:text-[var(--accent)]" href={`/best-time-to-visit/${entry.resort}`}>
                    {entry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
