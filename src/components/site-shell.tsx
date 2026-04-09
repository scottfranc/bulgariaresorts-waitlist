import Link from "next/link";
import {BrandLogo, BrandMonogram} from "@/components/brand-logo";
import {TripStylesMenu} from "@/components/trip-styles-menu";
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
          <TripStylesMenu />
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
