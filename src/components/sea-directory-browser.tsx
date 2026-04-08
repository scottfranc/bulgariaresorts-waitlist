"use client";

import Image from "next/image";
import Link from "next/link";
import {useMemo, useState} from "react";
import type {SeaDirectoryItem} from "@/lib/sea-directory";

type Props = {
  title: string;
  description: string;
  items: SeaDirectoryItem[];
  destinationHotelsBasePath?: string;
  mode?: "destinations" | "hotels";
  hotelTaxonomy?: "sea" | "mountains";
};

const PAGE_SIZE = 6;
type SortKey =
  | "default"
  | "name-asc"
  | "access-desc"
  | "affordability-desc"
  | "crowd-asc"
  | "nightlife-desc"
  | "walkability-desc"
  | "price-desc"
  | "family-desc"
  | "wellness-desc"
  | "beach-desc"
  | "quiet-desc"
  | "nightlife-access-desc";

export function SeaDirectoryBrowser({
  title,
  description,
  items,
  destinationHotelsBasePath,
  mode = "destinations",
  hotelTaxonomy = "sea",
}: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState<SeaDirectoryItem | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    const base = !value
      ? items
      : items.filter((item) =>
      [item.name, item.location, item.summary, item.facts.join(" ")].join(" ").toLowerCase().includes(value),
    );

    const sorted = [...base];
    if (sortKey === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (mode === "destinations") {
      if (sortKey === "access-desc")
        sorted.sort((a, b) => (b.ratings?.access ?? 0) - (a.ratings?.access ?? 0));
      if (sortKey === "affordability-desc")
        sorted.sort((a, b) => (b.ratings?.affordability ?? 0) - (a.ratings?.affordability ?? 0));
      if (sortKey === "crowd-asc")
        sorted.sort((a, b) => (a.ratings?.crowdLevel ?? 99) - (b.ratings?.crowdLevel ?? 99));
      if (sortKey === "nightlife-desc")
        sorted.sort((a, b) => (b.ratings?.nightlife ?? 0) - (a.ratings?.nightlife ?? 0));
      if (sortKey === "walkability-desc")
        sorted.sort((a, b) => (b.ratings?.walkability ?? 0) - (a.ratings?.walkability ?? 0));
    } else {
      if (sortKey === "price-desc")
        sorted.sort((a, b) => (b.hotelRatings?.priceLevel ?? 0) - (a.hotelRatings?.priceLevel ?? 0));
      if (sortKey === "family-desc")
        sorted.sort((a, b) => (b.hotelRatings?.familyFit ?? 0) - (a.hotelRatings?.familyFit ?? 0));
      if (sortKey === "wellness-desc")
        sorted.sort((a, b) => (b.hotelRatings?.wellness ?? 0) - (a.hotelRatings?.wellness ?? 0));
      if (sortKey === "beach-desc")
        sorted.sort((a, b) => (b.hotelRatings?.beachProximity ?? 0) - (a.hotelRatings?.beachProximity ?? 0));
      if (sortKey === "quiet-desc")
        sorted.sort((a, b) => (b.hotelRatings?.quietness ?? 0) - (a.hotelRatings?.quietness ?? 0));
      if (sortKey === "nightlife-access-desc")
        sorted.sort((a, b) => (b.hotelRatings?.nightlifeAccess ?? 0) - (a.hotelRatings?.nightlifeAccess ?? 0));
    }
    return sorted;
  }, [items, query, sortKey, mode]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const current = filtered.slice(start, start + PAGE_SIZE);

  return (
    <section className="mt-8">
      <h1 className="font-display text-4xl tracking-tight text-neutral-900 sm:text-5xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-neutral-600">{description}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full flex-col gap-2 sm:max-w-2xl sm:flex-row">
          <label className="w-full sm:max-w-md">
            <span className="sr-only">Search</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search by name, location, or keyword"
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-700 outline-none transition focus:border-[var(--accent)]"
            />
          </label>
          <label className="w-full sm:w-56">
            <span className="sr-only">Sort</span>
            <div className="relative">
              <select
                value={sortKey}
                onChange={(event) => {
                  setSortKey(event.target.value as SortKey);
                  setPage(1);
                }}
                className="w-full appearance-none rounded-xl border border-neutral-200 bg-white px-3 py-2.5 pr-9 text-sm text-neutral-700 outline-none transition focus:border-[var(--accent)]"
              >
                <option value="default">Sort: Recommended</option>
                <option value="name-asc">Name (A-Z)</option>
                {mode === "destinations" ? (
                  <>
                    <option value="access-desc">Easiest access</option>
                    <option value="affordability-desc">Most affordable</option>
                    <option value="crowd-asc">Least crowded</option>
                    <option value="nightlife-desc">Best nightlife</option>
                    <option value="walkability-desc">Best walkability</option>
                  </>
                ) : (
                  <>
                    <option value="price-desc">Budget-friendly</option>
                    <option value="family-desc">Best for families</option>
                    <option value="wellness-desc">Best wellness</option>
                    <option value="beach-desc">
                      {hotelTaxonomy === "sea" ? "Closest to beach" : "Best base location"}
                    </option>
                    <option value="quiet-desc">Quiet stays</option>
                    <option value="nightlife-access-desc">Nightlife access</option>
                  </>
                )}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-neutral-500">
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                  <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </label>
        </div>
        <p className="text-sm text-neutral-500">
          {filtered.length} result{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {current.map((item) => (
          <article key={item.name} className="surface overflow-hidden">
            <div className="relative h-40 w-full">
              <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-4">
              <p className="text-lg font-medium text-neutral-900">{item.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">{item.location}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.summary}</p>
              {mode === "destinations" && item.ratings ? (
                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-neutral-600">
                  <p>Access: <span className="font-medium text-neutral-800">{item.ratings.access}/10</span></p>
                  <p>Affordability: <span className="font-medium text-neutral-800">{item.ratings.affordability}/10</span></p>
                  <p>Crowd level: <span className="font-medium text-neutral-800">{item.ratings.crowdLevel}/10</span></p>
                  <p>Walkability: <span className="font-medium text-neutral-800">{item.ratings.walkability}/10</span></p>
                </div>
              ) : null}
              {mode === "hotels" && item.hotelRatings ? (
                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-neutral-600">
                  <p>Price fit: <span className="font-medium text-neutral-800">{item.hotelRatings.priceLevel}/10</span></p>
                  <p>Family fit: <span className="font-medium text-neutral-800">{item.hotelRatings.familyFit}/10</span></p>
                  <p>
                    {hotelTaxonomy === "sea" ? "Beach proximity" : "Base location"}:{" "}
                    <span className="font-medium text-neutral-800">{item.hotelRatings.beachProximity}/10</span>
                  </p>
                  <p>Quietness: <span className="font-medium text-neutral-800">{item.hotelRatings.quietness}/10</span></p>
                </div>
              ) : null}
              <button
                type="button"
                onClick={() => setActive(item)}
                className="mt-3 inline-flex items-center rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View details
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={safePage <= 1}
          className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 disabled:opacity-40"
        >
          Prev
        </button>
        <p className="text-xs text-neutral-500">
          Page {safePage} / {totalPages}
        </p>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={safePage >= totalPages}
          className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-3 sm:items-center sm:p-6"
          role="presentation"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} details`}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200 bg-[var(--bg)] shadow-[0_30px_70px_rgba(0,0,0,0.22)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-52 w-full">
              <Image src={active.image} alt={active.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 760px" />
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white"
                aria-label="Close details"
              >
                ×
              </button>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">{active.location}</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">{active.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{active.summary}</p>
              {mode === "destinations" && active.ratings ? (
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Ratings (out of 10)</p>
                  {[
                    {label: "Access", value: active.ratings.access},
                    {label: "Affordability", value: active.ratings.affordability},
                    {label: "Crowd level", value: active.ratings.crowdLevel},
                    {label: "Family fit", value: active.ratings.familyFit},
                    {label: "Nightlife", value: active.ratings.nightlife},
                    {label: "Walkability", value: active.ratings.walkability},
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="mb-1 flex items-center justify-between text-xs text-neutral-600">
                        <span>{metric.label}</span>
                        <span className="font-medium text-neutral-800">{metric.value}/10</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-neutral-200">
                        <div className="h-1.5 rounded-full bg-neutral-800" style={{width: `${metric.value * 10}%`}} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              {mode === "hotels" && active.hotelRatings ? (
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Hotel fit (out of 10)</p>
                  {[
                    {label: "Budget-friendly", value: active.hotelRatings.priceLevel},
                    {label: "Family fit", value: active.hotelRatings.familyFit},
                    {label: "Wellness", value: active.hotelRatings.wellness},
                    {label: hotelTaxonomy === "sea" ? "Beach proximity" : "Base location", value: active.hotelRatings.beachProximity},
                    {label: "Quietness", value: active.hotelRatings.quietness},
                    {label: "Nightlife access", value: active.hotelRatings.nightlifeAccess},
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="mb-1 flex items-center justify-between text-xs text-neutral-600">
                        <span>{metric.label}</span>
                        <span className="font-medium text-neutral-800">{metric.value}/10</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-neutral-200">
                        <div className="h-1.5 rounded-full bg-neutral-800" style={{width: `${metric.value * 10}%`}} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              <ul className="mt-4 space-y-2">
                {active.facts.map((fact) => (
                  <li key={fact} className="text-sm text-neutral-700">
                    - {fact}
                  </li>
                ))}
              </ul>
              {destinationHotelsBasePath ? (
                <p className="mt-4">
                  <Link
                    href={`${destinationHotelsBasePath}?destination=${encodeURIComponent(active.name)}`}
                    className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    See hotels in {active.name} →
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
