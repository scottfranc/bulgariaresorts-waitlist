"use client";

import Image from "next/image";
import Link from "next/link";
import {type WheelEvent, useEffect, useRef, useState} from "react";

type QuickLinkIcon = "city" | "hotel" | "activity";
type ModalStyle = "default" | "luxe";

const cards = [
  {
    slug: "sea",
    title: "Sea",
    description: "Coastal towns, beach pace, and summer-fit destinations in Bulgaria.",
    href: "/trip-style/sea",
    cta: "Explore coastal guides",
    src: "https://images.unsplash.com/photo-1683653417528-18cbfea82fae?auto=format&fit=crop&w=1800&q=85",
    alt: "Black Sea waves and rocky shoreline in Sozopol, Bulgaria",
    modalText: "Discover beaches, seaside towns, and practical guides for planning your Bulgaria coast trip.",
    quickLinks: [
      {label: "Top destinations", href: "/trip-style/sea/cities", icon: "city" as QuickLinkIcon},
      {label: "Hotels", href: "/trip-style/sea/hotels", icon: "hotel" as QuickLinkIcon},
      {label: "Things to do", href: "/guides", icon: "activity" as QuickLinkIcon},
    ],
  },
  {
    slug: "mountains",
    title: "Mountains",
    description: "Nature-first stays, spa towns, and mountain trips at a calmer rhythm.",
    href: "/trip-style/mountains",
    cta: "Explore mountain guides",
    src: "https://images.unsplash.com/photo-1749560917112-918847390483?auto=format&fit=crop&w=1800&q=85",
    alt: "Mountain and resort scenery in Bansko, Bulgaria",
    modalText: "Explore mountain-town options, nature-first stays, and timing guidance before booking.",
    quickLinks: [
      {label: "Top destinations", href: "/trip-style/mountains/cities", icon: "city" as QuickLinkIcon},
      {label: "Hotels", href: "/trip-style/mountains/hotels", icon: "hotel" as QuickLinkIcon},
      {label: "Things to do", href: "/guides", icon: "activity" as QuickLinkIcon},
    ],
  },
  {
    slug: "ski",
    title: "Ski",
    description: "Slope fit, transfer trade-offs, and practical planning for ski season.",
    href: "/trip-style/ski",
    cta: "Explore ski guides",
    src: "https://images.unsplash.com/photo-1708519692028-6e8ae48ea3fc?auto=format&fit=crop&w=1800&q=85",
    alt: "Skier on a snowy slope in Bansko, Bulgaria",
    modalText: "Compare Bulgaria ski destinations by slope level, transfers, and group fit in one place.",
    quickLinks: [
      {label: "Top destinations", href: "/trip-style/ski/cities", icon: "city" as QuickLinkIcon},
      {label: "Hotels", href: "/trip-style/ski/hotels", icon: "hotel" as QuickLinkIcon},
      {label: "Things to do", href: "/guides", icon: "activity" as QuickLinkIcon},
    ],
  },
  {
    slug: "wellness",
    title: "Wellness",
    description: "Spa towns, restorative stays, and slow-paced escapes across Bulgaria.",
    href: "/trip-style/wellness",
    cta: "Explore wellness guides",
    src: "https://images.unsplash.com/photo-1590089137678-3d81de766b94?auto=format&fit=crop&w=1800&q=85",
    alt: "Peaceful green park path in Sandanski, Bulgaria",
    modalText: "Find spa towns, restorative stays, and calm itineraries for a slower Bulgaria escape.",
    quickLinks: [
      {label: "Top destinations", href: "/trip-style/wellness/cities", icon: "city" as QuickLinkIcon},
      {label: "Hotels", href: "/trip-style/wellness/hotels", icon: "hotel" as QuickLinkIcon},
      {label: "Things to do", href: "/guides", icon: "activity" as QuickLinkIcon},
    ],
  },
];

const secondaryItems = [
  {
    title: "Spa resorts for couples",
    href: "/best-for/bulgaria-spa-resorts-for-couples",
    type: "Wellness",
  },
  {
    title: "Hot springs & thermal towns",
    href: "/best-for/bulgaria-spa-resorts-for-couples",
    type: "Hot springs",
  },
  {
    title: "Family beach resorts",
    href: "/best-for/bulgaria-beach-resorts-for-families",
    type: "Best for",
  },
  {
    title: "Couples beach escapes",
    href: "/best-for/bulgaria-beach-resorts-for-couples",
    type: "Best for",
  },
  {
    title: "Ski resorts for groups",
    href: "/best-for/bulgaria-ski-resorts-for-groups",
    type: "Best for",
  },
  {
    title: "Ski resorts for beginners",
    href: "/best-for/bulgaria-ski-resorts-for-beginners",
    type: "Best for",
  },
  {
    title: "Bansko vs Pamporovo",
    href: "/compare/bansko-vs-pamporovo",
    type: "Comparison",
  },
  {
    title: "Sunny Beach vs Nessebar",
    href: "/compare/sunny-beach-vs-nessebar",
    type: "Comparison",
  },
  {
    title: "Best time for Sunny Beach",
    href: "/best-time-to-visit/sunny-beach",
    type: "Timing",
  },
  {
    title: "Best time for Sozopol",
    href: "/best-time-to-visit/sozopol",
    type: "Timing",
  },
  {
    title: "Best time for Pamporovo",
    href: "/best-time-to-visit/pamporovo",
    type: "Timing",
  },
];

function QuickActionIcon({icon}: {icon: QuickLinkIcon}) {
  if (icon === "city") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
        <path d="M3 17h14M5 17V8h4v9M11 17V4h4v13M7 11h1M7 13h1M13 7h1M13 9h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "hotel") {
    return (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
        <path d="M3 16V8m0 8h14M3 12h14M7 12V9m6 3V9m-8 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M3.5 5.8 8 4l4 1.8 4.5-1.8v10.2L12 16l-4-1.8-4.5 1.8V5.8ZM8 4v10.2M12 5.8V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TripStyleCards() {
  const primaryRefs = useRef<Array<HTMLElement | null>>([]);
  const [primaryIndex, setPrimaryIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCard, setActiveCard] = useState<(typeof cards)[number] | null>(null);
  const modalStyle: ModalStyle = process.env.NEXT_PUBLIC_MODAL_STYLE === "luxe" ? "luxe" : "default";

  const maxPrimaryIndex = Math.max(0, cards.length - 3);

  const updateScrollState = () => {
    const container = carouselRef.current;
    if (!container) return;
    const {scrollLeft, scrollWidth, clientWidth} = container;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < maxScroll - 8);

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    itemRefs.current.forEach((element, index) => {
      if (!element) return;
      const distance = Math.abs(element.offsetLeft - scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    setCurrentIndex(nearestIndex);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = 320;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const target = itemRefs.current[index];
    target?.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"});
  };

  const scrollPrimaryTo = (index: number) => {
    const bounded = Math.max(0, Math.min(index, maxPrimaryIndex));
    const target = primaryRefs.current[bounded];
    target?.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"});
    setPrimaryIndex(bounded);
  };

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    const container = carouselRef.current;
    if (!container) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      container.scrollBy({left: event.deltaY, behavior: "auto"});
      event.preventDefault();
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    updateScrollState();
    container.addEventListener("scroll", updateScrollState, {passive: true});
    window.addEventListener("resize", updateScrollState);
    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (!activeCard) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCard(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCard]);

  return (
    <section className="mx-auto mt-16 max-w-5xl">
      <div className="flex items-end justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Pick your trip style
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollPrimaryTo(primaryIndex - 1)}
            disabled={primaryIndex <= 0}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
            aria-label="Previous trip styles"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
              <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollPrimaryTo(primaryIndex + 1)}
            disabled={primaryIndex >= maxPrimaryIndex}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
            aria-label="Next trip styles"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
              <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1">
          {cards.map((card, index) => (
            <article
              key={card.slug}
              ref={(element) => {
                primaryRefs.current[index] = element;
              }}
              className="group surface min-w-[280px] snap-start overflow-hidden sm:min-w-[320px] lg:min-w-[calc((100%-2rem)/3)]"
            >
              <button
                type="button"
                className="block w-full text-left"
                onClick={() => setActiveCard(card)}
                aria-label={`Open ${card.title} trip style options`}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-2xl tracking-tight text-neutral-900">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{card.description}</p>
                  <p className="mt-4">
                    <span className="link-muted font-medium">{card.cta} →</span>
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-200/80 pt-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            More ways to explore
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              disabled={!canScrollLeft}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              disabled={!canScrollRight}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--bg)] to-transparent" />
          <div
            ref={carouselRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2"
            role="region"
            aria-label="Secondary guide categories"
            onWheel={onWheel}
          >
            {secondaryItems.map((item, index) => (
              <article
                key={item.title}
                className="surface min-w-[260px] snap-start p-4 sm:min-w-[300px]"
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {item.type}
                </p>
                <h3 className="mt-2 text-base font-medium tracking-tight text-neutral-900">{item.title}</h3>
                <p className="mt-3">
                  <Link href={item.href} className="link-muted font-medium">
                    Open guide →
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5" aria-label="Carousel position indicators">
          {secondaryItems.map((item, index) => {
            const active = index === currentIndex;
            return (
              <button
                key={`${item.title}-dot`}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition ${
                  active ? "w-5 bg-[var(--accent)]" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to ${item.title}`}
                aria-current={active ? "true" : undefined}
              />
            );
          })}
        </div>
      </div>

      {activeCard ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-3 backdrop-blur-[2px] sm:items-center sm:p-6"
          role="presentation"
          onClick={() => setActiveCard(null)}
        >
          {modalStyle === "luxe" ? (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${activeCard.title} options`}
              className="w-full max-w-4xl overflow-hidden rounded-[24px] border border-neutral-200 bg-[var(--bg)] shadow-[0_36px_90px_rgba(0,0,0,0.24)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid md:grid-cols-[1.05fr_1fr]">
                <div className="relative min-h-[280px] md:min-h-[520px]">
                  <Image src={activeCard.src} alt={activeCard.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-14">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Trip style</p>
                    <p className="font-display mt-2 text-4xl tracking-tight text-white">{activeCard.title}</p>
                  </div>
                </div>
                <div className="relative p-6 sm:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900"
                    onClick={() => setActiveCard(null)}
                    aria-label="Close trip style modal"
                  >
                    ×
                  </button>
                  <p className="pr-12 text-sm leading-relaxed text-neutral-600">{activeCard.modalText}</p>
                  <div className="mt-6 space-y-2">
                    {activeCard.quickLinks.map((item) => (
                      <Link
                        key={`${activeCard.slug}-${item.label}`}
                        href={item.href}
                        className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        onClick={() => setActiveCard(null)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)]">
                            <QuickActionIcon icon={item.icon} />
                          </span>
                          {item.label}
                        </span>
                        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 opacity-60 transition group-hover:opacity-100" aria-hidden>
                          <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    <Link
                      href={activeCard.href}
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
                      onClick={() => setActiveCard(null)}
                    >
                      Open {activeCard.title} page
                      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                        <path d="M6 14L14 6M8 6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-500"
                      onClick={() => setActiveCard(null)}
                    >
                      Continue browsing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${activeCard.title} options`}
              className="w-full max-w-2xl overflow-hidden rounded-[22px] border border-neutral-200 bg-[var(--bg)] shadow-[0_36px_90px_rgba(0,0,0,0.24)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-48 w-full sm:h-56">
                <Image src={activeCard.src} alt={activeCard.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 760px" />
                <button
                  type="button"
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white transition hover:bg-black/65"
                  onClick={() => setActiveCard(null)}
                  aria-label="Close trip style modal"
                >
                  ×
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Trip style</p>
                  <p className="font-display text-3xl tracking-tight text-white">{activeCard.title}</p>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-neutral-600">{activeCard.modalText}</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {activeCard.quickLinks.map((item) => (
                    <Link
                      key={`${activeCard.slug}-${item.label}`}
                      href={item.href}
                      className="group flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      onClick={() => setActiveCard(null)}
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)]">
                        <QuickActionIcon icon={item.icon} />
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Link
                    href={activeCard.href}
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
                    onClick={() => setActiveCard(null)}
                  >
                    Open {activeCard.title} page
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                      <path d="M6 14L14 6M8 6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-500"
                    onClick={() => setActiveCard(null)}
                  >
                    Continue browsing
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}
