import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {GuidesResortImage} from "@/components/guides-resort-image";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {bestForPages, bestTimePages, comparePages} from "@/lib/seo-pages";
import {env} from "@/lib/env";

export const metadata: Metadata = {
  title: "Bulgaria Resort Guides | Bulgaria Resorts",
  description:
    "Explore practical Bulgaria resort guides: best-for pages, comparisons, and best-time-to-visit breakdowns.",
};

export default function GuidesPage() {
  const updatedAt = "2026-04-08";
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
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What guides are available on Bulgaria Resorts?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We publish best-for resort pages, side-by-side resort comparisons, and best-time-to-visit guides for key Bulgaria destinations.",
        },
      },
      {
        "@type": "Question",
        name: "How should I start planning a Bulgaria resort trip?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Start with a best-for page based on your travel style, then review a comparison page, and finalize timing with a best-time-to-visit guide.",
        },
      },
      {
        "@type": "Question",
        name: "Are these guides suitable for families and couples?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Guides are segmented for different trip types, including family ski planning and beach resort options for couples.",
        },
      },
    ],
  };
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bulgaria Resort Guides",
    description:
      "Browse best-for pages, side-by-side resort comparisons, and best-time-to-visit guides for Bulgaria.",
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: "Bulgaria Resorts Editorial Team",
    },
    mainEntityOfPage: `${env.siteUrl}/guides`,
  };

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
        dangerouslySetInnerHTML={{__html: JSON.stringify(collectionSchema)}}
      />
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Guides</p>
              <p className="mt-2 text-xs text-neutral-500">
                By Bulgaria Resorts Editorial Team • Updated {formatDate(updatedAt)}
              </p>
            </div>
            <Breadcrumbs
              className="sm:pt-0.5"
              items={[{label: "Home", href: "/"}, {label: "Guides"}]}
            />
          </div>
          <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Bulgaria resort planning guides
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-500">
            Browse high-intent pages that help you choose the right resort by trip style, timing, and
            trade-offs.
          </p>

          <GuidesResortImage />

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h2 className="font-display text-xl text-neutral-900">Best for</h2>
              <ul className="mt-4 space-y-3">
                {bestForPages.map((page) => (
                  <li key={page.slug}>
                    <Link className="link-muted" href={`/best-for/${page.slug}`}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-neutral-900">Comparisons</h2>
              <ul className="mt-4 space-y-3">
                {comparePages.map((page) => (
                  <li key={page.slug}>
                    <Link className="link-muted" href={`/compare/${page.slug}`}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-neutral-900">Best time to visit</h2>
              <ul className="mt-4 space-y-3">
                {bestTimePages.map((page) => (
                  <li key={page.resort}>
                    <Link className="link-muted" href={`/best-time-to-visit/${page.resort}`}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
