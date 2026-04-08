import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {ContactForm} from "@/components/contact-form";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {env} from "@/lib/env";

export const metadata: Metadata = {
  title: "Contact | Bulgaria Resorts",
  description: "Contact Bulgaria Resorts for inquiries, reservations, and tailored itinerary support.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Contact"}]} />

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Client support</p>
              <h1 className="font-display mt-3 text-4xl tracking-tight text-neutral-900 sm:text-5xl">Let us help plan your stay</h1>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-neutral-600">
                Reach out through the form or email us directly. We support inquiries, reservations, and itinerary planning across
                ski, sea, mountain, and wellness trips.
              </p>

              <div className="mt-8 rounded-2xl border border-neutral-200 bg-white/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Direct email</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Prefer email? Write to{" "}
                  <a href={`mailto:${env.contactEmail}`} className="link-muted font-medium text-neutral-800">
                    {env.contactEmail}
                  </a>
                  .
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  Typical use cases: trip fit questions, hotel/reservation help, and tailored Bulgaria itinerary suggestions.
                </p>
              </div>

              <p className="mt-6 text-sm text-neutral-500">
                Looking to browse first?{" "}
                <Link href="/guides" className="link-muted">
                  Explore guides
                </Link>
                .
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
