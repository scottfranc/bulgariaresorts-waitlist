import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SeaDirectoryBrowser} from "@/components/sea-directory-browser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {wellnessDestinations} from "@/lib/wellness-directory";

export const metadata: Metadata = {
  title: "Wellness Destinations | Bulgaria Resorts",
  description: "Search and compare Bulgaria wellness destinations with photos, fit scores, and practical planning details.",
};

export default function WellnessCitiesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Wellness", href: "/trip-style/wellness"}, {label: "Wellness destinations"}]} />
          <SeaDirectoryBrowser
            title="Wellness destinations directory"
            description="A wellness-focused destination list for Bulgaria with search, sorting, and detail modals."
            items={wellnessDestinations}
            destinationHotelsBasePath="/trip-style/wellness/hotels"
          />
          <p className="mt-8 text-sm text-neutral-500">
            Looking for stays too?{" "}
            <Link href="/trip-style/wellness/hotels" className="link-muted">
              Explore wellness hotels
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
