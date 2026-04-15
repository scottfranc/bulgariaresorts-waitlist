import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SeaDirectoryBrowser} from "@/components/sea-directory-browser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {StickyBookingCta} from "@/components/sticky-booking-cta";
import {env} from "@/lib/env";
import {skiHotels} from "@/lib/ski-directory";

export const metadata: Metadata = {
  title: "Ski Hotels | Bulgaria Resorts",
  description: "Search Bulgaria ski hotels with photos, fit metrics, and destination-aware filtering.",
};

type PageProps = {searchParams: Promise<{destination?: string}>};

export default async function SkiHotelsPage({searchParams}: PageProps) {
  const {destination} = await searchParams;
  const activeDestination = destination?.trim() ?? "";
  const destinationHotels = activeDestination
    ? skiHotels.filter((hotel) => hotel.destination?.toLowerCase() === activeDestination.toLowerCase())
    : skiHotels;

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell pb-28 pt-14 sm:pb-32 sm:pt-20">
          <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Ski", href: "/trip-style/ski"}, {label: "Hotels"}]} />
          {activeDestination ? (
            <p className="mt-3 text-sm text-neutral-600">
              Showing hotels for <span className="font-medium text-neutral-900">{activeDestination}</span>.{" "}
              <Link href="/trip-style/ski/hotels" className="link-muted">Clear filter</Link>.
            </p>
          ) : null}
          <SeaDirectoryBrowser
            title="Ski hotels directory"
            description="A practical ski-hotel list for Bulgaria with search, filters, and detail modals."
            items={destinationHotels}
            mode="hotels"
            hotelTaxonomy="mountains"
            tripStyleLabel="Ski"
          />
          <p className="mt-8 text-sm text-neutral-500">Want destination context first? <Link href="/trip-style/ski/cities" className="link-muted">Explore ski destinations</Link>.</p>
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/75 p-4 sm:p-5">
            <p className="text-sm leading-relaxed text-neutral-600">Hotel details and pricing are refreshed regularly, but inventory can change quickly in peak winter. Contact us before confirming your stay.</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">For bookings and reservations, reach us at <a href={`mailto:${env.contactEmail}`} className="link-muted font-medium text-neutral-700">{env.contactEmail}</a>.</p>
          </div>
        </section>
        <StickyBookingCta label="Need help with ski hotel bookings or planning?" />
      </main>
      <SiteFooter />
    </div>
  );
}
