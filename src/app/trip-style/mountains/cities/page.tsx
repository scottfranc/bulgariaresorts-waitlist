import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SeaDirectoryBrowser} from "@/components/sea-directory-browser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {mountainDestinations} from "@/lib/mountain-directory";

export const metadata: Metadata = {
  title: "Mountain Destinations | Bulgaria Resorts",
  description: "Search and compare Bulgaria mountain destinations with practical fit scores, photos, and planning details.",
};

export default function MountainCitiesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <Breadcrumbs
            items={[
              {label: "Home", href: "/"},
              {label: "Mountains", href: "/trip-style/mountains"},
              {label: "Mountain destinations"},
            ]}
          />
          <SeaDirectoryBrowser
            title="Mountain destinations directory"
            description="A focused mountain-destination list for Bulgaria with search, sorting, fit scores, and detail modals."
            items={mountainDestinations}
            destinationHotelsBasePath="/trip-style/mountains/hotels"
          />
          <p className="mt-8 text-sm text-neutral-500">
            Looking for stays too?{" "}
            <Link href="/trip-style/mountains/hotels" className="link-muted">
              Explore mountain hotels
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
