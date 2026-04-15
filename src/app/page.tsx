import Link from "next/link";
import {TripStyleCards} from "@/components/trip-style-cards";
import {WaitlistForm} from "@/components/waitlist-form";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {env} from "@/lib/env";

const pillars = [
  {
    title: "Fit-first matching",
    text: "Resorts ranked to your season, pace, and group, not generic popularity lists.",
  },
  {
    title: "Clear trade-offs",
    text: "Budget, transfers, and vibe before you sink time into booking flows.",
  },
  {
    title: "Human support",
    text: "Launch updates and direct help when you need a second opinion.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container-shell pt-16 pb-20 sm:pt-20 sm:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Built for smarter stays
            </p>
            <h1 className="font-display mt-5 text-[2.35rem] font-medium leading-[1.12] tracking-tight text-neutral-900 sm:text-5xl sm:leading-[1.08] md:text-[3.25rem]">
              Plan a Bulgaria resort trip with confidence and ease.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-neutral-500 sm:text-lg">
              We build a focused trip-planning experience for Bulgaria, helping you choose the
              right place, shape your itinerary, and plan with more clarity.
            </p>
          </div>

          <TripStyleCards />

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
            <WaitlistForm source="coming-soon-landing" />
            <aside className="surface flex flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Concierge support</p>
                <h2 className="font-display mt-3 text-3xl tracking-tight text-neutral-900 sm:text-[2.05rem]">
                  Planning, reservations, and tailored trip support
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                  Reach our team for booking inquiries, reservation support, and itinerary planning across sea, mountain, ski,
                  and wellness trips in Bulgaria.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                  <li>- Booking and reservation inquiries</li>
                  <li>- Destination fit and hotel shortlist support</li>
                  <li>- Practical itinerary planning for your dates and group</li>
                </ul>
              </div>

              <div className="mt-8 border-t border-neutral-200 pt-5">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Contact us directly at{" "}
                  <a href={`mailto:${env.contactEmail}`} className="link-muted font-medium text-neutral-800">
                    {env.contactEmail}
                  </a>{" "}
                  or use our dedicated{" "}
                  <Link href="/contact" className="link-muted font-medium text-neutral-800">
                    contact form
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-20 max-w-2xl border-t border-neutral-200/80 pt-16">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Why subscribe
            </p>
            <ul className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {pillars.map((item) => (
                <li key={item.title} className="text-center sm:text-left">
                  <p className="text-[15px] font-medium text-neutral-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/what-to-expect"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:-translate-y-0.5 hover:border-neutral-500 hover:text-neutral-900"
              >
                What to expect from us
                <span className="ml-2" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-700"
              >
                Explore Bulgaria resort guides
                <span className="ml-2" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
