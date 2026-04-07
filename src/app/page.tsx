import Link from "next/link";
import {WaitlistForm} from "@/components/waitlist-form";
import {env} from "@/lib/env";

export default function Home() {
  return (
    <main className="pb-20 pt-12 md:pt-16">
      <section className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-[#e2d6c5] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              Bulgaria Resorts - Coming Soon
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#0f2742] md:text-6xl">
              Find your ideal Bulgaria resort
              <span className="block text-[#b18845]">without the guesswork.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              We are building a smarter trip-planning platform that matches your travel style to
              the right ski, beach, spa, and family destinations in Bulgaria.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Decision-first resort matching",
                "Practical budget and season guidance",
                "Direct help for your trip goals",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-[#e1d4c1] bg-white/80 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Need help now? Email us at{" "}
              <a
                href={`mailto:${env.contactEmail}`}
                className="font-semibold text-[#113a63] underline decoration-[#c8a15b]/80 underline-offset-4"
              >
                {env.contactEmail}
              </a>{" "}
              and we will help you shortlist the best options.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/what-to-expect"
                className="inline-flex items-center rounded-full border border-[#113a63]/20 bg-white px-4 py-2 font-semibold text-[#113a63] transition hover:border-[#113a63]/40"
              >
                See what the platform will do
              </Link>
              <span className="text-slate-500">Early access emails go out first to waitlist members.</span>
            </div>
          </div>

          <div>
            <WaitlistForm source="coming-soon-landing" />
          </div>
        </div>
      </section>

      <section className="container-shell mt-14">
        <div className="grid gap-4 rounded-[1.6rem] border border-[#e3d5bf] bg-white/85 p-6 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">For travelers</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Compare resort personalities quickly and avoid mismatched bookings.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">For families & groups</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Get clarity on transfer effort, pace, and suitability before paying.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">For early members</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Receive launch updates, private previews, and direct support by email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
