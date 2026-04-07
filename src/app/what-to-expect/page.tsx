import Link from "next/link";
import {WaitlistForm} from "@/components/waitlist-form";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "What to Expect | Bulgaria Resorts",
  description:
    "See what Bulgaria Resorts will help you do: match the right destination, compare trade-offs, and plan with confidence.",
};

const features = [
  {
    title: "Trip-fit matching",
    body: "Tell us your destination style and we will prioritize resorts that fit your season, pace, and group profile.",
  },
  {
    title: "Decision-first comparisons",
    body: "Compare resort options side by side with practical trade-offs before you spend time on booking sites.",
  },
  {
    title: "Actionable planning guidance",
    body: "See straightforward advice on budget level, transfer effort, and who each resort is best for.",
  },
];

const journey = [
  "Start with your style, dates, and guests.",
  "Review ranked matches with reasons.",
  "Open partner booking options with more confidence.",
];

export default function WhatToExpectPage() {
  return (
    <main className="pb-20 pt-12 md:pt-16">
      <section className="container-shell">
        <div className="glass-card p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Platform Vision
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0f2742] md:text-5xl">
            What you will be able to do
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Bulgaria Resorts is being built to remove uncertainty from resort selection. Instead of
            browsing generic lists, you will get structured, practical matches based on what
            actually matters for your trip.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full border border-[#113a63]/20 bg-white px-4 py-2 text-sm font-semibold text-[#113a63] transition hover:border-[#113a63]/40"
          >
            Back to waitlist
          </Link>
        </div>
      </section>

      <section className="container-shell mt-10">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.4rem] border border-[#e1d4c1] bg-white p-5 shadow-[0_12px_36px_rgba(15,39,66,0.07)]"
            >
              <h2 className="text-xl font-semibold tracking-tight text-[#0f2742]">{feature.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell mt-10">
        <div className="grid gap-6 rounded-[1.5rem] border border-[#e2d6c4] bg-white/85 p-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              How it will work
            </p>
            <ol className="mt-4 space-y-3">
              {journey.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f4ece0] text-xs font-semibold text-[#113a63]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <WaitlistForm source="what-to-expect-page" />
        </div>
      </section>
    </main>
  );
}
