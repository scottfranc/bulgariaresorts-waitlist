import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SeaDirectoryBrowser} from "@/components/sea-directory-browser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {StickyBookingCta} from "@/components/sticky-booking-cta";
import {env} from "@/lib/env";
import {wellnessHotels} from "@/lib/wellness-directory";

export const metadata: Metadata = {
  title: "Wellness Hotels | Bulgaria Resorts",
  description: "Search Bulgaria wellness hotels with photos, fit metrics, and destination-aware filtering.",
};

type PageProps = {searchParams: Promise<{destination?: string}>};

export default async function WellnessHotelsPage({searchParams}: PageProps) {
  const {destination} = await searchParams;
  const activeDestination = destination?.trim() ?? "";
  const destinationHotels = activeDestination
    ? wellnessHotels.filter((hotel) => hotel.destination?.toLowerCase() === activeDestination.toLowerCase())
    : wellnessHotels;

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell pb-28 pt-14 sm:pb-32 sm:pt-20">
          <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Wellness", href: "/trip-style/wellness"}, {label: "Hotels"}]} />
          {activeDestination ? (
            <p className="mt-3 text-sm text-neutral-600">
              Showing hotels for <span className="font-medium text-neutral-900">{activeDestination}</span>.{" "}
              <Link href="/trip-style/wellness/hotels" className="link-muted">Clear filter</Link>.
            </p>
          ) : null}
          <SeaDirectoryBrowser
            title="Wellness hotels directory"
            description="A practical wellness-hotel list for Bulgaria with search, filters, and detail modals."
            items={destinationHotels}
            mode="hotels"
            hotelTaxonomy="mountains"
          />
          <p className="mt-8 text-sm text-neutral-500">Want destination context first? <Link href="/trip-style/wellness/cities" className="link-muted">Explore wellness destinations</Link>.</p>
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/75 p-4 sm:p-5">
            <p className="text-sm leading-relaxed text-neutral-600">Hotel details and pricing are refreshed regularly, but availability and policies can change quickly. Contact us before confirming your stay.</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">For bookings and reservations, reach us at <a href={`mailto:${env.contactEmail}`} className="link-muted font-medium text-neutral-700">{env.contactEmail}</a>.</p>
          </div>
        </section>
        <StickyBookingCta label="Need help booking a wellness stay?" />
      </main>
      <SiteFooter />
    </div>
  );
}
