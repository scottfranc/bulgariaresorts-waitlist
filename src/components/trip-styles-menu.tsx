"use client";

import Link from "next/link";
import {useEffect, useRef, useState} from "react";

export function TripStylesMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!wrapperRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Trip styles
        <svg viewBox="0 0 20 20" fill="none" className={`h-3.5 w-3.5 text-neutral-500 transition ${open ? "rotate-180" : ""}`} aria-hidden>
          <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      {open ? (
        <div className="absolute right-0 z-20 mt-3 min-w-52 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.12)]">
          <div className="p-1.5" role="menu" aria-label="Trip styles">
            <Link href="/trip-style/sea" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900" onClick={() => setOpen(false)}>
              Sea
            </Link>
            <Link href="/trip-style/mountains" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900" onClick={() => setOpen(false)}>
              Mountains
            </Link>
            <Link href="/trip-style/ski" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900" onClick={() => setOpen(false)}>
              Ski
            </Link>
            <Link href="/trip-style/wellness" className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900" onClick={() => setOpen(false)}>
              Wellness
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
