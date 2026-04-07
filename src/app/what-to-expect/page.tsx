import Link from "next/link";
import {WaitlistForm} from "@/components/waitlist-form";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "What to Expect | Bulgaria Resorts",
  description:
    "See what Bulgaria Resorts will help you do: match the right destination, compare trade-offs, and plan with confidence.",
};

const features = [
  {
    title: "Trip-fit matching",
    body: "Share your style and constraints—we surface resorts that fit your season, pace, and group.",
  },
  {
    title: "Decision-first comparisons",
    body: "Side-by-side trade-offs so you know where to spend your attention before booking.",
  },
  {
    title: "Practical guidance",
    body: "Straightforward notes on budget bands, transfer effort, and who each option suits best.",
  },
];

const journey = [
  "Tell us how you travel—dates, guests, and what “good” looks like.",
  "Review ranked matches with clear reasons, not endless tabs.",
  "Move to booking partners with a shortlist you already trust.",
];

export default function WhatToExpectPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container-shell pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="mx-auto max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Product direction
            </p>
            <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
              What you will be able to do
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-neutral-500">
              Bulgaria Resorts is built to remove uncertainty from resort choice. Instead of
              browsing undifferentiated lists, you get structured matches based on what matters for
              your trip.
            </p>
            <p className="mt-8">
              <Link
                href="/"
                className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-[6px] transition hover:decoration-neutral-900"
              >
                ← Back to waitlist
              </Link>
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl border-t border-neutral-200/80 pt-16">
            <ul className="grid gap-12 md:grid-cols-3 md:gap-10">
              {features.map((feature) => (
                <li key={feature.title}>
                  <h2 className="font-display text-xl font-medium tracking-tight text-neutral-900">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">{feature.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  How it will work
                </p>
                <ol className="mt-8 space-y-8">
                  {journey.map((step, index) => (
                    <li key={step} className="flex gap-5">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-xs font-semibold text-neutral-700"
                        aria-hidden
                      >
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-[15px] leading-relaxed text-neutral-600">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <WaitlistForm source="what-to-expect-page" variant="compact" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
