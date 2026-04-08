import Link from "next/link";
import {BrandLogo, BrandMonogram} from "@/components/brand-logo";
import {env} from "@/lib/env";

const brandStyle =
  (process.env.NEXT_PUBLIC_BRAND_STYLE as
    | "default"
    | "luxury"
    | "signature"
    | "heritage"
    | "modern"
    | "monoline"
    | "alpine"
    | "noir"
    | "solaire"
    | "coastal"
    | "apex"
    | "atelier"
    | "grand"
    | "pulse"
    | undefined) ?? "default";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <div className="container-shell flex h-14 items-center justify-between sm:h-16">
        <BrandLogo variant={brandStyle} />
        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-600">
          <details className="group relative">
            <summary className="list-none cursor-pointer select-none transition hover:text-[var(--accent)]">
              <span className="inline-flex items-center gap-1.5">
                Trip styles
                <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-neutral-500 transition group-open:rotate-180" aria-hidden>
                  <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <div className="absolute right-0 z-20 mt-3 min-w-52 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.12)]">
              <div className="p-1.5">
                <Link href="/trip-style/sea" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900">
                  Sea
                </Link>
                <Link href="/trip-style/mountains" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900">
                  Mountains
                </Link>
                <Link href="/trip-style/ski" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900">
                  Ski
                </Link>
                <Link href="/trip-style/wellness" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900">
                  Wellness
                </Link>
              </div>
            </div>
          </details>
          <Link href="/guides" className="transition hover:text-[var(--accent)]">
            Guides
          </Link>
          <Link href="/contact" className="transition hover:text-[var(--accent)]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200/60 py-10">
      <div className="container-shell grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-3">
            <BrandMonogram variant={brandStyle} className="h-7 w-7 text-[10px]" />
            <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Bulgaria Resorts</p>
          </div>
          <p className="max-w-2xl text-xs leading-relaxed text-neutral-500">
            Our destination intelligence is reviewed continuously, but travel details can change quickly. For the latest rates,
            availability, and property updates, contact us for a current check before you book.
          </p>
          <p className="text-xs leading-relaxed text-neutral-500">
            For bookings and reservations, concierge support is available at{" "}
            <a href={`mailto:${env.contactEmail}`} className="link-muted font-medium text-neutral-700">
              {env.contactEmail}
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/what-to-expect" className="text-xs text-neutral-400 transition hover:text-[var(--accent)]">
            What to expect
          </Link>
          <Link href="/photo-credits" className="text-xs text-neutral-400 transition hover:text-[var(--accent)]">
            Photo credits
          </Link>
          <p className="text-xs text-neutral-400">Early access. Subject to change.</p>
        </div>
      </div>
    </footer>
  );
}
