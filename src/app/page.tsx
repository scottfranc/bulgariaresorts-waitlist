import Link from "next/link";
import {BanskoResortImage} from "@/components/bansko-resort-image";
import {WaitlistForm} from "@/components/waitlist-form";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {env} from "@/lib/env";

const pillars = [
  {
    title: "Fit-first matching",
    text: "Resorts ranked to your season, pace, and group—not generic popularity lists.",
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
              Coming soon
            </p>
            <h1 className="font-display mt-5 text-[2.35rem] font-medium leading-[1.12] tracking-tight text-neutral-900 sm:text-5xl sm:leading-[1.08] md:text-[3.25rem]">
              Plan a Bulgaria resort trip with confidence, not guesswork.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-neutral-500 sm:text-lg">
              We are building a focused trip-planning experience for ski, beach, spa, and family
              stays—so you pick the right place before you book.
            </p>
          </div>

          <BanskoResortImage />

          <div className="mx-auto mt-14 max-w-md">
            <WaitlistForm source="coming-soon-landing" />
          </div>

          <div className="mx-auto mt-20 max-w-2xl border-t border-neutral-200/80 pt-16">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Why join
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

          <div className="mx-auto mt-16 max-w-lg text-center">
            <p className="text-sm text-neutral-500">
              Questions before launch?{" "}
              <a href={`mailto:${env.contactEmail}`} className="link-muted font-medium text-neutral-700">
                {env.contactEmail}
              </a>
            </p>
            <p className="mt-6">
              <Link
                href="/what-to-expect"
                className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-[6px] transition hover:decoration-neutral-900"
              >
                Read what the platform will do →
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
