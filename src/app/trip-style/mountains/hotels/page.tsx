import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SeaDirectoryBrowser} from "@/components/sea-directory-browser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {env} from "@/lib/env";
import {mountainHotels} from "@/lib/mountain-directory";

export const metadata: Metadata = {
  title: "Mountain Hotels | Bulgaria Resorts",
  description: "Search Bulgaria mountain hotels with photos, practical fit metrics, and destination-aware filtering.",
};

type PageProps = {
  searchParams: Promise<{destination?: string}>;
};

export default async function MountainHotelsPage({searchParams}: PageProps) {
  const {destination} = await searchParams;
  const activeDestination = destination?.trim() ?? "";
  const destinationHotels = activeDestination
    ? mountainHotels.filter((hotel) => hotel.destination?.toLowerCase() === activeDestination.toLowerCase())
    : mountainHotels;

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <Breadcrumbs
            items={[
              {label: "Home", href: "/"},
              {label: "Mountains", href: "/trip-style/mountains"},
              {label: "Hotels"},
            ]}
          />
          {activeDestination ? (
            <p className="mt-3 text-sm text-neutral-600">
              Showing hotels for <span className="font-medium text-neutral-900">{activeDestination}</span>.{" "}
              <Link href="/trip-style/mountains/hotels" className="link-muted">
                Clear filter
              </Link>
              .
            </p>
          ) : null}
          <SeaDirectoryBrowser
            title="Mountain hotels directory"
            description="A practical mountain-hotel list for Bulgaria planning with search, filters, and detail modals."
            items={destinationHotels}
            mode="hotels"
            hotelTaxonomy="mountains"
          />
          <p className="mt-8 text-sm text-neutral-500">
            Want destination context first?{" "}
            <Link href="/trip-style/mountains/cities" className="link-muted">
              Explore mountain destinations
            </Link>
            .
          </p>
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/75 p-4 sm:p-5">
            <p className="text-sm leading-relaxed text-neutral-600">
              Hotel details and pricing are refreshed regularly, but inventory and operating details can change quickly in high
              season. For the most current information, contact us before confirming your stay.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              For bookings and reservations, reach us at{" "}
              <a href={`mailto:${env.contactEmail}`} className="link-muted font-medium text-neutral-700">
                {env.contactEmail}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
