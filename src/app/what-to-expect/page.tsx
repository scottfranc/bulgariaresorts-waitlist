import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {WaitlistForm} from "@/components/waitlist-form";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {WhatToExpectSidebar} from "@/components/what-to-expect-sidebar";

export const metadata: Metadata = {
  title: "What to Expect | Bulgaria Resorts",
  description:
    "See how Bulgaria Resorts helps you compare destinations, choose hotels, shape itineraries, and plan a Bulgaria trip with more clarity.",
};

const sidebarSections = [
  {id: "overview", label: "Overview"},
  {id: "who-its-for", label: "Who We Help Best"},
  {id: "how-we-help", label: "What We Help You Do"},
  {id: "how-it-works", label: "How It Works"},
  {id: "what-we-compare", label: "What We Compare"},
  {id: "planning-support", label: "Support We Offer"},
  {id: "what-you-get", label: "What You Leave With"},
  {id: "what-we-wont-do", label: "What We Won't Be"},
];

const audienceGroups = [
  {
    title: "Travelers deciding where to stay",
    body: "If you already know Bulgaria is on the shortlist but still need help choosing the right base, area, or resort style, this is designed for you.",
  },
  {
    title: "People comparing destinations and hotels",
    body: "If you are torn between destinations, hotels, or trip styles, we help turn scattered research into clearer comparisons and better decisions.",
  },
  {
    title: "Trips that need more than just a booking site",
    body: "If your trip has real constraints around dates, transfers, group needs, budget, or pace, we help connect those details to a more complete plan, not just a list of stays.",
  },
];

const helpAreas = [
  {
    title: "Choosing the right destination",
    points: [
      "See which resort areas fit your pace, season, and group type.",
      "Understand the difference between lively, practical, quiet, scenic, or wellness-led destinations.",
      "Avoid choosing a place that sounds appealing at a glance but does not fit how you actually want the trip to feel.",
    ],
  },
  {
    title: "Choosing the right hotel",
    points: [
      "Compare hotels by fit, not just popularity or star rating.",
      "Review trade-offs around price level, quietness, nightlife access, family fit, and wellness appeal.",
      "Shortlist stays that make sense for your trip instead of scrolling through endless undifferentiated inventory.",
    ],
  },
  {
    title: "Shaping the trip around you",
    points: [
      "Build around your dates, group size, and what a good trip means to you.",
      "Think through itinerary rhythm, not just accommodation.",
      "Plan with more structure before you commit time, money, and attention to bookings.",
    ],
  },
];

const workflowSteps = [
  {
    title: "Start with your trip shape",
    body: "You begin with the fundamentals: what kind of break you want, who is traveling, when you are going, and what matters most. That might be easy transfers, family convenience, nightlife, quietness, beach access, spa quality, or a balanced mix.",
  },
  {
    title: "Narrow the best-fit areas",
    body: "Instead of throwing every possible option at you, we narrow the decision set. The aim is to make it obvious which resort areas deserve attention and which ones are probably the wrong fit.",
  },
  {
    title: "Compare hotels and practical trade-offs",
    body: "Once the destination becomes clearer, we help you compare hotel options in a more decision-friendly way. That includes what each stay is strongest for, where compromises appear, and who each option suits best.",
  },
  {
    title: "Move into trip planning with more confidence",
    body: "By the time you reach booking links or support conversations, you should already have a sharper shortlist and a much clearer idea of the trip you are trying to build.",
  },
];

const comparisonRows = [
  {
    label: "Trip style fit",
    detail: "Whether the area or hotel suits sea, ski, mountain, wellness, family, couples, or mixed-group travel.",
  },
  {
    label: "Budget and value",
    detail: "How destinations and hotels compare on price level, value perception, and where premium spend is or is not worth it.",
  },
  {
    label: "Energy and atmosphere",
    detail: "Quiet, lively, scenic, practical, restorative, nightlife-led, or family-oriented, so the vibe matches the trip.",
  },
  {
    label: "Transfer and movement effort",
    detail: "How easy the trip feels in practice, especially if you care about airport access, walkability, or minimizing friction.",
  },
  {
    label: "Suitability for your group",
    detail: "Whether the option works better for couples, families, first-timers, groups, slower trips, or shorter breaks.",
  },
  {
    label: "Planning complexity",
    detail: "Where you can keep things simple and where you may need more thought around timing, logistics, or hotel selection.",
  },
];

const supportPoints = [
  "Hotel shortlisting with clearer reasons behind each option.",
  "Destination fit guidance when you are torn between areas.",
  "Trip rhythm thinking so the itinerary makes sense for your dates and group.",
  "Reservation and booking support when you want help moving from shortlist to action.",
  "A more human layer of guidance when generic search results stop being useful.",
];

const deliverables = [
  "A clearer understanding of which parts of Bulgaria fit your trip.",
  "A tighter shortlist of destinations or hotels worth considering.",
  "More confidence about trade-offs before booking.",
  "A trip plan that reflects your pace, group, and priorities.",
  "Less time wasted on scattered research and second-guessing.",
];

const guardrails = [
  "We are not trying to be a generic booking portal with endless inventory and no point of view.",
  "We do not believe the best trip starts with sorting by popularity alone.",
  "We do not want you to piece together the whole trip from disconnected hotel pages and random articles.",
  "We will not pretend every destination is equally right for every traveler.",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-neutral-900 sm:text-[2.15rem]">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-neutral-600">{description}</p> : null}
    </div>
  );
}

export default function WhatToExpectPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container-shell pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="mx-auto max-w-3xl">
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              What to expect
            </p>
            <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <h1 className="font-display max-w-2xl text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
                How we help you plan the trip, not just pick a hotel
              </h1>
              <Breadcrumbs
                items={[{label: "Home", href: "/"}, {label: "What to expect"}]}
                className="shrink-0 pt-1 lg:text-right"
              />
            </div>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-neutral-600 sm:text-lg">
              Bulgaria Resorts is built to make resort planning feel more structured, more
              selective, and far less fragmented. The goal is to help you understand where to stay,
              why it fits, which trade-offs matter, and how to shape the wider trip with more
              confidence from the start.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition hover:-translate-y-0.5 hover:border-neutral-500"
              >
                Back to home
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-700"
              >
                Explore the full page
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.35rem] border border-neutral-200 bg-white/85 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Promise 01</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  We help you narrow the right part of Bulgaria before you lose time in the wrong one.
                </p>
              </article>
              <article className="rounded-[1.35rem] border border-neutral-200 bg-white/85 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Promise 02</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  We compare hotels and destinations by fit, not by whoever happens to rank highest first.
                </p>
              </article>
              <article className="rounded-[1.35rem] border border-neutral-200 bg-white/85 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Promise 03</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  We aim to leave you with a clearer trip shape, not just a longer shortlist.
                </p>
              </article>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
            <aside className="hidden lg:block">
              <WhatToExpectSidebar sections={sidebarSections} />
            </aside>

            <div className="space-y-16 sm:space-y-20">
              <section id="overview" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="Overview"
                  title="What this page is really about"
                  description="This is not just a product teaser. It is a fuller statement of what Bulgaria Resorts is trying to make easier, what kind of planning support it is designed to offer, and what you should reasonably expect from us."
                />
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <article className="surface p-5">
                    <h3 className="font-display text-xl tracking-tight text-neutral-900">Choose the right destination</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      Understand which parts of Bulgaria suit your dates, pace, budget, and group.
                    </p>
                  </article>
                  <article className="surface p-5">
                    <h3 className="font-display text-xl tracking-tight text-neutral-900">Choose the right stay</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      Compare hotels with more context around fit, trade-offs, and who each option works best for.
                    </p>
                  </article>
                  <article className="surface p-5">
                    <h3 className="font-display text-xl tracking-tight text-neutral-900">Shape the wider trip</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      Plan with more structure so the itinerary, logistics, and hotel choice work together.
                    </p>
                  </article>
                </div>
              </section>

              <section id="who-its-for" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="Who It Is For"
                  title="Who this is designed to help most"
                  description="Bulgaria Resorts is strongest when the trip needs judgment, comparison, and prioritization, not just more options."
                />
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {audienceGroups.map((group) => (
                    <article key={group.title} className="surface p-5">
                      <h3 className="font-display text-xl tracking-tight text-neutral-900">{group.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{group.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="how-we-help" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="How We Help"
                  title="What we help you do, in practical terms"
                  description="The job is not simply to surface options. The job is to help you move through the important planning decisions in a clearer order and with less wasted effort."
                />
                <div className="mt-8 space-y-6">
                  {helpAreas.map((area) => (
                    <article key={area.title} className="surface p-6">
                      <h3 className="font-display text-2xl tracking-tight text-neutral-900">{area.title}</h3>
                      <ul className="mt-4 space-y-3">
                        {area.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                            <span className="mt-[0.35rem] h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section id="how-it-works" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="How It Works"
                  title="The planning flow we are building toward"
                  description="The experience should feel less like wandering through tabs and more like progressively narrowing the trip into something coherent, bookable, and well matched to you."
                />
                <ol className="mt-8 space-y-6">
                  {workflowSteps.map((step, index) => (
                    <li key={step.title} className="surface flex gap-5 p-6">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-700">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl tracking-tight text-neutral-900">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="what-we-compare" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="What We Compare"
                  title="The kinds of trade-offs we want to make easier to understand"
                  description="Good planning is rarely about finding one universally best option. It is about understanding the right trade-offs early enough to make confident choices."
                />
                <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-neutral-200 bg-neutral-50">
                      <tr>
                        <th className="px-5 py-4 font-medium text-neutral-800">What we compare</th>
                        <th className="px-5 py-4 font-medium text-neutral-800">Why it matters</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.label} className="border-b border-neutral-100 align-top last:border-b-0">
                          <td className="px-5 py-4 font-medium text-neutral-900">{row.label}</td>
                          <td className="px-5 py-4 text-neutral-600">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="planning-support" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="Planning Support"
                  title="How we can help beyond just showing options"
                  description="The value is not only in discovery. It is also in helping you turn that discovery into a better-shaped trip."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {supportPoints.map((point) => (
                    <article key={point} className="surface p-5">
                      <p className="text-sm leading-relaxed text-neutral-700">{point}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="what-you-get" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="What You Get"
                  title="What the experience should leave you with"
                  description="A useful planning experience should not just show information. It should leave you clearer, calmer, and closer to action than when you started."
                />
                <div className="mt-8 rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:p-7">
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                        <span className="mt-[0.35rem] h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="what-we-wont-do" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="What We Won't Do"
                  title="The kind of experience we are not trying to build"
                  description="Part of setting expectations well is being honest about what Bulgaria Resorts is not meant to be."
                />
                <div className="mt-8 space-y-4">
                  {guardrails.map((item) => (
                    <article key={item} className="surface p-5">
                      <p className="text-sm leading-relaxed text-neutral-700">{item}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="scroll-mt-24">
                <div className="space-y-6">
                  <div className="surface p-6 sm:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Next step</p>
                    <h2 className="font-display mt-3 text-3xl tracking-tight text-neutral-900">If this sounds like the kind of planning help you want</h2>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                      Join the list and we will keep you updated as the experience develops. You can
                      also reach out directly if you already want help thinking through a Bulgaria
                      resort trip, hotel shortlist, or wider itinerary with more structure.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-700"
                      >
                        Back to home
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition hover:-translate-y-0.5 hover:border-neutral-500"
                      >
                        Contact us
                      </Link>
                    </div>
                  </div>
                  <div className="surface p-6 sm:p-7">
                    <div className="mx-auto max-w-xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Subscribe</p>
                      <h2 className="font-display mt-3 text-3xl tracking-tight text-neutral-900">Stay close to the launch</h2>
                      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                        Get launch updates, new planning tools, and practical guidance as Bulgaria
                        Resorts continues to develop.
                      </p>
                      <div className="mt-6">
                        <WaitlistForm source="what-to-expect-page" variant="compact" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
