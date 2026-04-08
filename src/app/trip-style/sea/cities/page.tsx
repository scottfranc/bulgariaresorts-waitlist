import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SeaDirectoryBrowser} from "@/components/sea-directory-browser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {seaCities} from "@/lib/sea-directory";

export const metadata: Metadata = {
  title: "Sea Coastal Destinations | Bulgaria Resorts",
  description: "Search and browse Bulgaria sea coastal destinations with facts, location notes, and traveler-focused details.",
};

export default function SeaCitiesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <Breadcrumbs
            items={[
              {label: "Home", href: "/"},
              {label: "Sea", href: "/trip-style/sea"},
              {label: "Coastal destinations"},
            ]}
          />
          <SeaDirectoryBrowser
            title="Sea coastal destinations directory"
            description="An exhaustive coastal-destination list for the Bulgaria sea category with search, pagination, and details for each place."
            items={seaCities}
            destinationHotelsBasePath="/trip-style/sea/hotels"
          />
          <p className="mt-8 text-sm text-neutral-500">
            Looking for stays too?{" "}
            <Link href="/trip-style/sea/hotels" className="link-muted">
              Explore sea hotels
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
