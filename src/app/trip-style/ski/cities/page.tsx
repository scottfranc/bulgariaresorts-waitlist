import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SeaDirectoryBrowser} from "@/components/sea-directory-browser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {skiDestinations} from "@/lib/ski-directory";

export const metadata: Metadata = {
  title: "Ski Destinations | Bulgaria Resorts",
  description: "Search and compare Bulgaria ski destinations with fit scores, practical details, and photos.",
};

export default function SkiCitiesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Ski", href: "/trip-style/ski"}, {label: "Ski destinations"}]} />
          <SeaDirectoryBrowser
            title="Ski destinations directory"
            description="A practical ski-destination list for Bulgaria with search, sorting, and detail modals."
            items={skiDestinations}
            destinationHotelsBasePath="/trip-style/ski/hotels"
          />
          <p className="mt-8 text-sm text-neutral-500">
            Looking for stays too?{" "}
            <Link href="/trip-style/ski/hotels" className="link-muted">
              Explore ski hotels
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
