"use client";

import {useEffect, useState} from "react";

type SidebarSection = {
  id: string;
  label: string;
};

type WhatToExpectSidebarProps = {
  sections: SidebarSection[];
};

export function WhatToExpectSidebar({sections}: WhatToExpectSidebarProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-24 rounded-[1.4rem] border border-neutral-200 bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">On this page</p>
      <nav className="mt-4">
        <ul className="space-y-1.5">
          {sections.map((section) => {
            const isActive = section.id === activeId;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-xl px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-[var(--accent-soft)] font-medium text-[var(--accent)]"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
