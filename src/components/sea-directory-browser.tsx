"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useMemo, useRef, useState} from "react";
import type {SeaDirectoryItem} from "@/lib/sea-directory";

type Props = {
  title: string;
  description: string;
  items: SeaDirectoryItem[];
  destinationHotelsBasePath?: string;
  mode?: "destinations" | "hotels";
  hotelTaxonomy?: "sea" | "mountains";
  tripStyleLabel?: string;
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

type MetricTone = "slate" | "teal" | "amber" | "rose";

export function SeaDirectoryBrowser({
  title,
  description,
  items,
  destinationHotelsBasePath,
  mode = "destinations",
  hotelTaxonomy = "sea",
  tripStyleLabel,
}: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState<SeaDirectoryItem | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [viewMode, setViewMode] = useState<"grid" | "table">(mode === "hotels" ? "table" : "grid");
  const [columnsOpen, setColumnsOpen] = useState(false);
  const columnsMenuRef = useRef<HTMLDivElement | null>(null);
  const supportsTripStyleColumn = mode === "hotels" && !tripStyleLabel;
  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
    hotel: true,
    destination: true,
    tripStyle: supportsTripStyleColumn,
    bestFor: true,
    priceLevel: false,
    familyFit: false,
    wellness: false,
    quietness: false,
    nightlifeAccess: false,
  });

  const toggleColumn = (columnKey: string) => {
    setVisibleColumns((current) => ({
      ...current,
      [columnKey]: !current[columnKey],
    }));
  };

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
  const columnOptions = [
    {key: "hotel", label: "Hotel"},
    {key: "destination", label: "Destination"},
    ...(supportsTripStyleColumn ? [{key: "tripStyle", label: "Trip Style"}] : []),
    {key: "bestFor", label: "Best For"},
    {key: "priceLevel", label: "Price Level"},
    {key: "familyFit", label: "Family Fit"},
    {key: "wellness", label: "Wellness"},
    {key: "quietness", label: "Quietness"},
    {key: "nightlifeAccess", label: "Nightlife Access"},
  ];

  const formatScore = (value?: number) => (typeof value === "number" ? `${value}/10` : "—");
  const formatPriceLevel = (value?: number) => {
    if (typeof value !== "number") return "—";
    if (value >= 9) return "$";
    if (value >= 7) return "$$";
    if (value >= 5) return "$$$";
    return "$$$$";
  };
  const getBestForChips = (item: SeaDirectoryItem) => {
    const chips = item.facts.slice(0, 3);
    if (chips.length > 0) return chips;
    return item.summary
      .split(/[,.]/)
      .map((part) => part.trim())
      .filter(Boolean)
      .slice(0, 2);
  };
  const getBookingUrl = (item: SeaDirectoryItem) => {
    if (item.bookingUrl) return item.bookingUrl;
    const queryParts = [item.name, item.destination ?? item.location, "Bulgaria"].filter(Boolean);
    return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(queryParts.join(" "))}`;
  };

  useEffect(() => {
    if (!columnsOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!columnsMenuRef.current?.contains(target)) {
        setColumnsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setColumnsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [columnsOpen]);

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
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {mode === "hotels" ? (
            <>
              <div className="inline-flex rounded-full border border-neutral-200 bg-white p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    viewMode === "grid" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Grid
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    viewMode === "table" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Table
                </button>
              </div>
              {viewMode === "table" ? (
                <div ref={columnsMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setColumnsOpen((value) => !value)}
                    aria-expanded={columnsOpen}
                    aria-haspopup="menu"
                    className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700"
                  >
                    Columns
                  </button>
                  {columnsOpen ? (
                    <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Show columns</p>
                      <div className="mt-3 space-y-2">
                        {columnOptions.map((column) => (
                          <label key={column.key} className="flex items-center gap-2 text-sm text-neutral-700">
                            <input
                              type="checkbox"
                              checked={Boolean(visibleColumns[column.key])}
                              onChange={() => toggleColumn(column.key)}
                              className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                            />
                            <span>{column.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </>
          ) : null}
          <p className="text-sm text-neutral-500">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      {mode === "hotels" && viewMode === "table" ? (
        <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-neutral-200/90 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-neutral-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(244,246,248,0.92))]">
                <tr>
                  {visibleColumns.hotel ? (
                    <th className="sticky left-0 z-10 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(244,246,248,0.92))] px-5 py-4 font-medium text-neutral-700">
                      Hotel
                    </th>
                  ) : null}
                  {visibleColumns.destination ? <th className="px-4 py-4 font-medium text-neutral-700">Destination</th> : null}
                  {supportsTripStyleColumn && visibleColumns.tripStyle ? <th className="px-4 py-4 font-medium text-neutral-700">Trip Style</th> : null}
                  {visibleColumns.bestFor ? <th className="px-4 py-4 font-medium text-neutral-700">Best For</th> : null}
                  {visibleColumns.priceLevel ? <th className="px-4 py-4 font-medium text-neutral-700">Price</th> : null}
                  {visibleColumns.familyFit ? <th className="px-4 py-4 font-medium text-neutral-700">Family</th> : null}
                  {visibleColumns.wellness ? <th className="px-4 py-4 font-medium text-neutral-700">Wellness</th> : null}
                  {visibleColumns.quietness ? <th className="px-4 py-4 font-medium text-neutral-700">Quietness</th> : null}
                  {visibleColumns.nightlifeAccess ? <th className="px-4 py-4 font-medium text-neutral-700">Nightlife</th> : null}
                  <th className="px-4 py-4 text-right font-medium text-neutral-700">Book</th>
                </tr>
              </thead>
              <tbody>
                {current.map((item) => (
                  <tr key={item.name} className="border-b border-neutral-100 align-top transition hover:bg-neutral-50/65 last:border-b-0">
                    {visibleColumns.hotel ? (
                      <td className="sticky left-0 z-[1] bg-white px-5 py-5 shadow-[8px_0_18px_-18px_rgba(15,23,42,0.2)]">
                        <button
                          type="button"
                          onClick={() => setActive(item)}
                          className="group text-left transition hover:text-[var(--accent)]"
                        >
                          <span className="text-[0.98rem] font-semibold tracking-tight text-neutral-900 transition group-hover:text-[var(--accent)]">
                            {item.name}
                          </span>
                          <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-neutral-500">
                            {item.destination ?? item.location}
                          </span>
                          <span className="mt-2 inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[11px] font-medium text-neutral-600 transition group-hover:border-[var(--accent)]/25 group-hover:text-[var(--accent)]">
                            View details
                          </span>
                        </button>
                      </td>
                    ) : null}
                    {visibleColumns.destination ? (
                      <td className="px-4 py-5">
                        <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
                          {item.destination ?? item.location}
                        </span>
                      </td>
                    ) : null}
                    {supportsTripStyleColumn && visibleColumns.tripStyle ? (
                      <td className="px-4 py-5 text-neutral-600">{tripStyleLabel ?? "Multi-style"}</td>
                    ) : null}
                    {visibleColumns.bestFor ? (
                      <td className="px-4 py-5">
                        <div className="flex max-w-sm flex-wrap gap-2">
                          {getBestForChips(item).map((chip) => (
                            <span
                              key={`${item.name}-${chip}`}
                              className="inline-flex rounded-full border border-[var(--accent)]/10 bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </td>
                    ) : null}
                    {visibleColumns.priceLevel ? (
                      <td className="px-4 py-5">
                        <div className="min-w-[4.5rem]">
                          <p className="font-semibold tracking-[0.18em] text-neutral-900">{formatPriceLevel(item.hotelRatings?.priceLevel)}</p>
                          <p className="mt-1 text-xs text-neutral-500">{formatScore(item.hotelRatings?.priceLevel)}</p>
                        </div>
                      </td>
                    ) : null}
                    {visibleColumns.familyFit ? (
                      <td className="px-4 py-5">
                        <MetricDots value={item.hotelRatings?.familyFit} tone="teal" />
                      </td>
                    ) : null}
                    {visibleColumns.wellness ? (
                      <td className="px-4 py-5">
                        <MetricDots value={item.hotelRatings?.wellness} tone="amber" />
                      </td>
                    ) : null}
                    {visibleColumns.quietness ? (
                      <td className="px-4 py-5">
                        <MetricDots value={item.hotelRatings?.quietness} tone="slate" />
                      </td>
                    ) : null}
                    {visibleColumns.nightlifeAccess ? (
                      <td className="px-4 py-5">
                        <MetricDots value={item.hotelRatings?.nightlifeAccess} tone="rose" />
                      </td>
                    ) : null}
                    <td className="px-4 py-5 text-right">
                      <a
                        href={getBookingUrl(item)}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        aria-label={`Open booking link for ${item.name}`}
                        title={`Open booking link for ${item.name}`}
                      >
                        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                          <path d="M6 14L14 6M8 6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {current.map((item) => (
            <article key={item.name} className="surface overflow-hidden">
              {item.image ? (
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
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
                  <p>Price: <span className="font-medium text-neutral-800">{formatPriceLevel(item.hotelRatings.priceLevel)}</span></p>
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
      )}

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
            {active.image ? (
              <div className="relative h-52 w-full">
                <Image
                  src={active.image}
                  alt={active.imageAlt ?? active.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 760px"
                />
                <div className="absolute right-3 top-3 flex items-center gap-2">
                  <a
                    href={getBookingUrl(active)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-2 text-xs font-medium text-white shadow-[0_10px_24px_rgba(15,23,42,0.22)] transition hover:bg-neutral-700"
                  >
                    Book
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                      <path d="M6 14L14 6M8 6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white"
                    aria-label="Close details"
                  >
                    ×
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between border-b border-neutral-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.95),rgba(255,255,255,0.92))] px-5 py-5 sm:px-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">{active.location}</p>
                  <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">{active.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={getBookingUrl(active)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-2 text-xs font-medium text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition hover:bg-neutral-700"
                  >
                    Book
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                      <path d="M6 14L14 6M8 6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700"
                    aria-label="Close details"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
            <div className="p-5 sm:p-6">
              {active.image ? (
                <>
                  <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">{active.location}</p>
                  <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">{active.name}</h2>
                </>
              ) : null}
              <p className={`${active.image ? "mt-3" : "mt-0"} text-sm leading-relaxed text-neutral-600`}>{active.summary}</p>
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
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href={`${destinationHotelsBasePath}?destination=${encodeURIComponent(active.name)}`}
                    className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    See hotels in {active.name} →
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function MetricDots({value, tone}: {value?: number; tone: MetricTone}) {
  const palette =
    tone === "teal"
      ? {text: "text-teal-800", active: "bg-teal-600", idle: "bg-teal-100"}
      : tone === "amber"
        ? {text: "text-amber-800", active: "bg-amber-500", idle: "bg-amber-100"}
        : tone === "rose"
          ? {text: "text-rose-800", active: "bg-rose-500", idle: "bg-rose-100"}
          : {text: "text-slate-800", active: "bg-slate-700", idle: "bg-slate-200"};
  const normalized = typeof value === "number" ? Math.max(0, Math.min(10, value)) : 0;
  const activeCount = Math.max(1, Math.ceil(normalized / 2));

  return (
    <div className="min-w-[6rem]">
      <div className="flex items-center gap-1.5">
        {Array.from({length: 5}, (_, index) => (
          <span
            key={index}
            className={`h-2.5 w-2.5 rounded-full ${index < activeCount ? palette.active : palette.idle}`}
            aria-hidden
          />
        ))}
      </div>
      <p className={`mt-1 text-xs font-medium ${palette.text}`}>{typeof value === "number" ? `${value}/10` : "—"}</p>
    </div>
  );
}
