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
  return comparePages.map((page) => ({slug: page.slug}));
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug} = await params;
  const page = comparePages.find((entry) => entry.slug === slug);
  if (!page) return {};

  return {
    title: `${page.title} | Bulgaria Resorts`,
    description: page.description,
  };
}

export default async function ComparePage({params}: PageProps) {
  const {slug} = await params;
  const page = comparePages.find((entry) => entry.slug === slug);
  if (!page) notFound();
  const leftColumn = page.leftLabel;
  const rightColumn = page.rightLabel;
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
        name: "Comparisons",
        item: `${env.siteUrl}/compare/${page.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${leftColumn} or ${rightColumn}: which is easier for airport transfers?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            page.comparison.find((row) => row.label.toLowerCase().includes("transfer"))?.left ??
            page.overview,
        },
      },
      {
        "@type": "Question",
        name: `What is the main difference between ${leftColumn} and ${rightColumn}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: page.overview,
        },
      },
      {
        "@type": "Question",
        name: "Where can I find more resort comparisons and timing guides?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Visit ${env.siteUrl}/guides for additional Bulgaria resort pages.`,
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
    mainEntityOfPage: `${env.siteUrl}/compare/${page.slug}`,
  };
  const relatedCompare = comparePages.filter((entry) => entry.slug !== page.slug).slice(0, 2);
  const relatedBestFor = bestForPages.slice(0, 1);
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Comparison</p>
              <p className="mt-2 text-xs text-neutral-500">
                By Bulgaria Resorts Editorial Team • Updated {formatDate(page.updatedAt)}
              </p>
            </div>
            <Breadcrumbs
              className="sm:pt-0.5"
              items={[
                {label: "Home", href: "/"},
                {label: "Guides", href: "/guides"},
                {label: "Comparisons", href: "/guides"},
                {label: page.title},
              ]}
            />
          </div>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-neutral-500">{page.overview}</p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-neutral-200 bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-neutral-600">Factor</th>
                  <th className="px-4 py-3 text-neutral-600">{leftColumn}</th>
                  <th className="px-4 py-3 text-neutral-600">{rightColumn}</th>
                </tr>
              </thead>
              <tbody>
                {page.comparison.map((row) => (
                  <tr key={row.label} className="border-b border-neutral-100 align-top last:border-b-0">
                    <td className="px-4 py-4 font-medium text-neutral-900">{row.label}</td>
                    <td className="px-4 py-4 text-neutral-600">{row.left}</td>
                    <td className="px-4 py-4 text-neutral-600">{row.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 text-sm text-neutral-500">
            Explore more routes and timing guides in{" "}
            <Link href="/guides" className="link-muted">
              the guides hub
            </Link>
            .
          </p>

          <div className="mt-12 border-t border-neutral-200/80 pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Next best reads</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {relatedCompare.map((entry) => (
                <li key={entry.slug} className="surface p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Compare</p>
                  <Link className="mt-2 block text-sm font-medium text-neutral-900 transition hover:text-[var(--accent)]" href={`/compare/${entry.slug}`}>
                    {entry.title}
                  </Link>
                </li>
              ))}
              {relatedBestFor.map((entry) => (
                <li key={entry.slug} className="surface p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Best for</p>
                  <Link className="mt-2 block text-sm font-medium text-neutral-900 transition hover:text-[var(--accent)]" href={`/best-for/${entry.slug}`}>
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
