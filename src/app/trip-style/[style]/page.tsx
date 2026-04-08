import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {MountainFitChooser} from "@/components/mountain-fit-chooser";
import {SeaFitChooser} from "@/components/sea-fit-chooser";
import {SkiFitChooser} from "@/components/ski-fit-chooser";
import {SiteFooter, SiteHeader} from "@/components/site-shell";
import {WellnessFitChooser} from "@/components/wellness-fit-chooser";
import {env} from "@/lib/env";
import {tripStylePages} from "@/lib/trip-styles";

type PageProps = {
  params: Promise<{style: string}>;
};

export async function generateStaticParams() {
  return tripStylePages.map((page) => ({style: page.key}));
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {style} = await params;
  const page = tripStylePages.find((entry) => entry.key === style);
  if (!page) return {};
  return {
    title: `${page.title} trip style | Bulgaria Resorts`,
    description: page.description,
  };
}

export default async function TripStylePage({params}: PageProps) {
  const {style} = await params;
  const page = tripStylePages.find((entry) => entry.key === style);
  if (!page) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {["@type"]: "ListItem", position: 1, name: "Home", item: `${env.siteUrl}/`},
      {["@type"]: "ListItem", position: 2, name: "Trip styles", item: `${env.siteUrl}/`},
      {["@type"]: "ListItem", position: 3, name: page.title, item: `${env.siteUrl}/trip-style/${page.key}`},
    ],
  };

  const seaSnapshot = [
    {place: "Sunny Beach", vibe: "High-energy", budget: "Value to mid", crowds: "High in Jul-Aug", walkability: "High on main strip"},
    {place: "Nessebar", vibe: "Historic + calm", budget: "Mid", crowds: "Medium-high in peak", walkability: "Very high in old town"},
    {place: "Sozopol", vibe: "Boutique + relaxed", budget: "Mid to upscale", crowds: "Medium", walkability: "High"},
  ];

  const seaTiming = [
    {months: "May-Jun", weather: "Warm-up", crowd: "Low-Medium", value: "Strong"},
    {months: "Jul-Aug", weather: "Peak summer", crowd: "High", value: "Lower"},
    {months: "Sep", weather: "Warm, calmer", crowd: "Medium", value: "Strong"},
  ];
  const mountainSnapshot = [
    {place: "Bansko", vibe: "Full-service + lively", budget: "Mid", crowds: "Medium-high in peak", walkability: "High in resort core"},
    {place: "Borovets", vibe: "Compact + practical", budget: "Mid-upscale", crowds: "Medium", walkability: "High"},
    {place: "Pamporovo", vibe: "Calm + family-first", budget: "Value to mid", crowds: "Lower-medium", walkability: "Medium"},
  ];

  const mountainTiming = [
    {months: "Dec-Jan", weather: "Early core winter", crowd: "Medium-high", value: "Medium"},
    {months: "Feb", weather: "Peak winter conditions", crowd: "High", value: "Lower"},
    {months: "Mar", weather: "Late-season value", crowd: "Medium", value: "Strong"},
  ];
  const skiSnapshot = [
    {place: "Bansko", vibe: "High-energy + full-service", budget: "Mid", crowds: "High in peak weeks", walkability: "High"},
    {place: "Borovets", vibe: "Compact + practical", budget: "Mid-upscale", crowds: "Medium", walkability: "High"},
    {place: "Pamporovo", vibe: "Calmer + family-first", budget: "Value to mid", crowds: "Lower-medium", walkability: "Medium"},
  ];
  const skiTiming = [
    {months: "Dec-Jan", weather: "Early core winter", crowd: "Medium-high", value: "Medium"},
    {months: "Feb", weather: "Peak ski period", crowd: "High", value: "Lower"},
    {months: "Mar", weather: "Late-season", crowd: "Medium", value: "Strong"},
  ];
  const wellnessSnapshot = [
    {place: "Velingrad", vibe: "Premium wellness", budget: "Mid-upscale", crowds: "Medium", walkability: "High"},
    {place: "Sandanski", vibe: "Mild-climate calm", budget: "Mid", crowds: "Low-medium", walkability: "High"},
    {place: "Hisarya", vibe: "Historic thermal town", budget: "Mid", crowds: "Low-medium", walkability: "High"},
  ];
  const wellnessTiming = [
    {months: "Mar-May", weather: "Mild spring", crowd: "Low-medium", value: "Strong"},
    {months: "Jun-Aug", weather: "Warm summer", crowd: "Medium", value: "Medium"},
    {months: "Sep-Nov", weather: "Cooler recovery season", crowd: "Low-medium", value: "Strong"},
  ];

  return (
    <div className="flex min-h-full flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <Breadcrumbs
            items={[{label: "Home", href: "/"}, {label: "Trip style", href: "/"}, {label: page.title}]}
          />

          <div className="mt-6 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <div className="relative h-52 w-full sm:h-72">
              <Image src={page.image.src} alt={page.image.alt} fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Trip style</p>
                <h1 className="font-display mt-2 text-4xl tracking-tight text-white sm:text-5xl">{page.title}</h1>
                <p className="mt-2 text-sm text-white/90">{page.strapline}</p>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-neutral-600">{page.intro}</p>

          {page.key === "sea" || page.key === "mountains" || page.key === "ski" || page.key === "wellness" ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href={
                  page.key === "sea"
                    ? "/trip-style/sea/cities"
                    : page.key === "mountains"
                      ? "/trip-style/mountains/cities"
                      : page.key === "ski"
                        ? "/trip-style/ski/cities"
                        : "/trip-style/wellness/cities"
                }
                className="surface flex items-center justify-between border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_38%,white)] px-4 py-3 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[var(--accent)] ring-1 ring-[var(--accent-soft)]">
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                      <path d="M3 17h14M5 17V8h4v9M11 17V4h4v13M7 11h1M7 13h1M13 7h1M13 9h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Shortcut</span>
                    <span className="mt-1 block text-base font-medium text-neutral-900">
                      {page.key === "sea"
                        ? "Coastal destinations"
                        : page.key === "mountains"
                          ? "Mountain destinations"
                          : page.key === "ski"
                            ? "Ski destinations"
                            : "Wellness destinations"}
                    </span>
                  </span>
                </span>
                <span className="text-[var(--accent)]">→</span>
              </Link>
              <Link
                href={
                  page.key === "sea"
                    ? "/trip-style/sea/hotels"
                    : page.key === "mountains"
                      ? "/trip-style/mountains/hotels"
                      : page.key === "ski"
                        ? "/trip-style/ski/hotels"
                        : "/trip-style/wellness/hotels"
                }
                className="surface flex items-center justify-between border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_38%,white)] px-4 py-3 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[var(--accent)] ring-1 ring-[var(--accent-soft)]">
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                      <path d="M3 16V8m0 8h14M3 12h14M7 12V9m6 3V9m-8 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Shortcut</span>
                    <span className="mt-1 block text-base font-medium text-neutral-900">
                      {page.key === "sea"
                        ? "Sea hotels"
                        : page.key === "mountains"
                          ? "Mountain hotels"
                          : page.key === "ski"
                            ? "Ski hotels"
                            : "Wellness hotels"}
                    </span>
                  </span>
                </span>
                <span className="text-[var(--accent)]">→</span>
              </Link>
            </div>
          ) : null}

          {page.key !== "sea" && page.key !== "mountains" && page.key !== "ski" && page.key !== "wellness" ? (
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {page.sections.map((section) => (
                <section key={section.title} className="surface p-5">
                  <h2 className="font-display text-2xl tracking-tight text-neutral-900">{section.title}</h2>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-xl border border-neutral-200 bg-white px-3 py-3 transition hover:border-[var(--accent)]"
                        >
                          <p className="text-sm font-medium text-neutral-900">{item.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.note}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : null}

          {page.key === "sea" ? (
            <>
              <SeaFitChooser />

              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Quick compare</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Coastal snapshot</h2>
                <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--accent-soft)] bg-white">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_28%,white)]">
                      <tr>
                        <th className="px-4 py-3 text-neutral-700">Base</th>
                        <th className="px-4 py-3 text-neutral-700">Vibe</th>
                        <th className="px-4 py-3 text-neutral-700">Budget</th>
                        <th className="px-4 py-3 text-neutral-700">Crowds</th>
                        <th className="px-4 py-3 text-neutral-700">Walkability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seaSnapshot.map((row) => (
                        <tr key={row.place} className="border-b border-neutral-100 align-top last:border-b-0">
                          <td className="px-4 py-4 font-medium text-neutral-900">{row.place}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.vibe}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.budget}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.crowds}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.walkability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">When to go</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Sea season at a glance</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {seaTiming.map((row) => (
                    <article key={row.months} className="surface border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_26%,white)] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{row.months}</p>
                      <dl className="mt-3 space-y-1 text-sm text-neutral-600">
                        <div className="flex justify-between gap-3">
                          <dt>Weather</dt>
                          <dd className="font-medium text-neutral-800">{row.weather}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt>Crowds</dt>
                          <dd className="font-medium text-neutral-800">{row.crowd}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt>Value</dt>
                          <dd className="font-medium text-neutral-800">{row.value}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {page.sections.map((section) => (
                  <section key={section.title} className="surface p-5">
                    <h2 className="font-display text-2xl tracking-tight text-neutral-900">{section.title}</h2>
                    <ul className="mt-4 space-y-3">
                      {section.links.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-xl border border-neutral-200 bg-white px-3 py-3 transition hover:border-[var(--accent)]"
                          >
                            <p className="text-sm font-medium text-neutral-900">{item.label}</p>
                            <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.note}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </>
          ) : null}

          {page.key === "mountains" ? (
            <>
              <MountainFitChooser />

              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Quick compare</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Mountain snapshot</h2>
                <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--accent-soft)] bg-white">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_28%,white)]">
                      <tr>
                        <th className="px-4 py-3 text-neutral-700">Base</th>
                        <th className="px-4 py-3 text-neutral-700">Vibe</th>
                        <th className="px-4 py-3 text-neutral-700">Budget</th>
                        <th className="px-4 py-3 text-neutral-700">Crowds</th>
                        <th className="px-4 py-3 text-neutral-700">Walkability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mountainSnapshot.map((row) => (
                        <tr key={row.place} className="border-b border-neutral-100 align-top last:border-b-0">
                          <td className="px-4 py-4 font-medium text-neutral-900">{row.place}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.vibe}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.budget}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.crowds}</td>
                          <td className="px-4 py-4 text-neutral-600">{row.walkability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">When to go</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Mountain season at a glance</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {mountainTiming.map((row) => (
                    <article key={row.months} className="surface border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_26%,white)] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{row.months}</p>
                      <dl className="mt-3 space-y-1 text-sm text-neutral-600">
                        <div className="flex justify-between gap-3">
                          <dt>Weather</dt>
                          <dd className="font-medium text-neutral-800">{row.weather}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt>Crowds</dt>
                          <dd className="font-medium text-neutral-800">{row.crowd}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt>Value</dt>
                          <dd className="font-medium text-neutral-800">{row.value}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {page.sections.map((section) => (
                  <section key={section.title} className="surface p-5">
                    <h2 className="font-display text-2xl tracking-tight text-neutral-900">{section.title}</h2>
                    <ul className="mt-4 space-y-3">
                      {section.links.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-xl border border-neutral-200 bg-white px-3 py-3 transition hover:border-[var(--accent)]"
                          >
                            <p className="text-sm font-medium text-neutral-900">{item.label}</p>
                            <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.note}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </>
          ) : null}

          {page.key === "ski" ? (
            <>
              <SkiFitChooser />
              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Quick compare</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Ski snapshot</h2>
                <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--accent-soft)] bg-white">
                  <table className="w-full text-left text-sm"><thead className="border-b border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_28%,white)]"><tr><th className="px-4 py-3 text-neutral-700">Base</th><th className="px-4 py-3 text-neutral-700">Vibe</th><th className="px-4 py-3 text-neutral-700">Budget</th><th className="px-4 py-3 text-neutral-700">Crowds</th><th className="px-4 py-3 text-neutral-700">Walkability</th></tr></thead><tbody>{skiSnapshot.map((row) => (<tr key={row.place} className="border-b border-neutral-100 align-top last:border-b-0"><td className="px-4 py-4 font-medium text-neutral-900">{row.place}</td><td className="px-4 py-4 text-neutral-600">{row.vibe}</td><td className="px-4 py-4 text-neutral-600">{row.budget}</td><td className="px-4 py-4 text-neutral-600">{row.crowds}</td><td className="px-4 py-4 text-neutral-600">{row.walkability}</td></tr>))}</tbody></table>
                </div>
              </section>
              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">When to go</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Ski season at a glance</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-3">{skiTiming.map((row) => (<article key={row.months} className="surface border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_26%,white)] p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{row.months}</p><dl className="mt-3 space-y-1 text-sm text-neutral-600"><div className="flex justify-between gap-3"><dt>Weather</dt><dd className="font-medium text-neutral-800">{row.weather}</dd></div><div className="flex justify-between gap-3"><dt>Crowds</dt><dd className="font-medium text-neutral-800">{row.crowd}</dd></div><div className="flex justify-between gap-3"><dt>Value</dt><dd className="font-medium text-neutral-800">{row.value}</dd></div></dl></article>))}</div>
              </section>
              <div className="mt-12 grid gap-6 md:grid-cols-3">{page.sections.map((section) => (<section key={section.title} className="surface p-5"><h2 className="font-display text-2xl tracking-tight text-neutral-900">{section.title}</h2><ul className="mt-4 space-y-3">{section.links.map((item) => (<li key={item.href}><Link href={item.href} className="block rounded-xl border border-neutral-200 bg-white px-3 py-3 transition hover:border-[var(--accent)]"><p className="text-sm font-medium text-neutral-900">{item.label}</p><p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.note}</p></Link></li>))}</ul></section>))}</div>
            </>
          ) : null}

          {page.key === "wellness" ? (
            <>
              <WellnessFitChooser />
              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Quick compare</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Wellness snapshot</h2>
                <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--accent-soft)] bg-white">
                  <table className="w-full text-left text-sm"><thead className="border-b border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_28%,white)]"><tr><th className="px-4 py-3 text-neutral-700">Base</th><th className="px-4 py-3 text-neutral-700">Vibe</th><th className="px-4 py-3 text-neutral-700">Budget</th><th className="px-4 py-3 text-neutral-700">Crowds</th><th className="px-4 py-3 text-neutral-700">Walkability</th></tr></thead><tbody>{wellnessSnapshot.map((row) => (<tr key={row.place} className="border-b border-neutral-100 align-top last:border-b-0"><td className="px-4 py-4 font-medium text-neutral-900">{row.place}</td><td className="px-4 py-4 text-neutral-600">{row.vibe}</td><td className="px-4 py-4 text-neutral-600">{row.budget}</td><td className="px-4 py-4 text-neutral-600">{row.crowds}</td><td className="px-4 py-4 text-neutral-600">{row.walkability}</td></tr>))}</tbody></table>
                </div>
              </section>
              <section className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">When to go</p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Wellness season at a glance</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-3">{wellnessTiming.map((row) => (<article key={row.months} className="surface border-[var(--accent-soft)] bg-[color-mix(in_oklab,var(--accent-soft)_26%,white)] p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{row.months}</p><dl className="mt-3 space-y-1 text-sm text-neutral-600"><div className="flex justify-between gap-3"><dt>Weather</dt><dd className="font-medium text-neutral-800">{row.weather}</dd></div><div className="flex justify-between gap-3"><dt>Crowds</dt><dd className="font-medium text-neutral-800">{row.crowd}</dd></div><div className="flex justify-between gap-3"><dt>Value</dt><dd className="font-medium text-neutral-800">{row.value}</dd></div></dl></article>))}</div>
              </section>
              <div className="mt-12 grid gap-6 md:grid-cols-3">{page.sections.map((section) => (<section key={section.title} className="surface p-5"><h2 className="font-display text-2xl tracking-tight text-neutral-900">{section.title}</h2><ul className="mt-4 space-y-3">{section.links.map((item) => (<li key={item.href}><Link href={item.href} className="block rounded-xl border border-neutral-200 bg-white px-3 py-3 transition hover:border-[var(--accent)]"><p className="text-sm font-medium text-neutral-900">{item.label}</p><p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.note}</p></Link></li>))}</ul></section>))}</div>
            </>
          ) : null}

          <p className="mt-10 text-sm text-neutral-500">
            Need a wider view?{" "}
            <Link href="/guides" className="link-muted">
              Browse all guides
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
