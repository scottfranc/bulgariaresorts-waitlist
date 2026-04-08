"use client";

import {useMemo, useState} from "react";
import {seaCities} from "@/lib/sea-directory";

type TravelGroup = "couple" | "family" | "friends";
type Energy = "calm" | "balanced" | "nightlife";
type Budget = "value" | "mid" | "upscale";

const travelOptions: Array<{key: TravelGroup; label: string}> = [
  {key: "couple", label: "Couple"},
  {key: "family", label: "Family"},
  {key: "friends", label: "Friends"},
];

const energyOptions: Array<{key: Energy; label: string}> = [
  {key: "calm", label: "Calm"},
  {key: "balanced", label: "Balanced"},
  {key: "nightlife", label: "Nightlife"},
];

const budgetOptions: Array<{key: Budget; label: string}> = [
  {key: "value", label: "Value"},
  {key: "mid", label: "Mid-range"},
  {key: "upscale", label: "Upscale"},
];

const clamp = (value: number, min = 0, max = 10) => Math.max(min, Math.min(max, value));
const closeness = (value: number, target: number) => 10 - Math.abs(value - target);

function scoreDestination(
  item: (typeof seaCities)[number],
  group: TravelGroup,
  energy: Energy,
  budget: Budget,
) {
  const ratings = item.ratings;
  if (!ratings) return {score: 0, reason: item.summary, breakdown: [] as Array<{label: string; value: number}>};

  const energyTargets: Record<Energy, {nightlife: number; crowd: number}> = {
    calm: {nightlife: 2, crowd: 3},
    balanced: {nightlife: 5, crowd: 6},
    nightlife: {nightlife: 9, crowd: 8},
  };
  const budgetTarget: Record<Budget, number> = {
    value: 9,
    mid: 7,
    upscale: 5,
  };

  const target = energyTargets[energy];

  const nightlifeAlignment = closeness(ratings.nightlife, target.nightlife);
  const crowdAlignment = closeness(ratings.crowdLevel, target.crowd);
  const budgetAlignment = closeness(ratings.affordability, budgetTarget[budget]);

  const energyScore = nightlifeAlignment * 0.22 + crowdAlignment * 0.14;
  const budgetScore = budgetAlignment * 0.24;

  let groupScore = 0;
  if (group === "family") {
    groupScore = ratings.familyFit * 0.18 + ratings.access * 0.12 + closeness(ratings.crowdLevel, 4) * 0.1;
  } else if (group === "couple") {
    groupScore = ratings.walkability * 0.16 + closeness(ratings.crowdLevel, 5) * 0.12 + closeness(ratings.nightlife, 5) * 0.1;
  } else {
    groupScore = ratings.nightlife * 0.16 + ratings.access * 0.12 + closeness(ratings.affordability, 7) * 0.1;
  }

  const descriptor = `${item.summary} ${item.facts.join(" ")}`.toLowerCase();
  let keywordBoost = 0;
  if (group === "family" && /(family|calm|mixed-age)/.test(descriptor)) keywordBoost += 0.6;
  if (group === "couple" && /(couple|boutique|historic|calm)/.test(descriptor)) keywordBoost += 0.6;
  if (group === "friends" && /(nightlife|lively|high-energy)/.test(descriptor)) keywordBoost += 0.6;
  if (budget === "value" && /(value|moderate)/.test(descriptor)) keywordBoost += 0.4;
  if (budget === "upscale" && /(upscale|boutique|premium)/.test(descriptor)) keywordBoost += 0.4;

  const rawScore = energyScore + budgetScore + groupScore + keywordBoost;
  const score = clamp(rawScore, 0, 10);

  const reason =
    group === "family"
      ? `Strong family fit (${ratings.familyFit}/10) with practical access (${ratings.access}/10).`
      : group === "couple"
        ? `Good walkability (${ratings.walkability}/10) and a trip pace that matches a ${energy} style.`
        : `Great for friend trips with nightlife (${ratings.nightlife}/10) and solid access (${ratings.access}/10).`;

  return {
    score,
    reason,
    breakdown: [
      {label: "Nightlife alignment", value: nightlifeAlignment},
      {label: "Crowd alignment", value: crowdAlignment},
      {label: "Budget alignment", value: budgetAlignment},
      {label: "Access", value: ratings.access},
      {label: "Family fit", value: ratings.familyFit},
      {label: "Walkability", value: ratings.walkability},
    ],
  };
}

export function SeaFitChooser() {
  const [group, setGroup] = useState<TravelGroup>("couple");
  const [energy, setEnergy] = useState<Energy>("balanced");
  const [budget, setBudget] = useState<Budget>("mid");

  const ranked = useMemo(() => {
    return seaCities
      .filter((city) => city.ratings)
      .map((city) => {
        const evaluated = scoreDestination(city, group, energy, budget);
        return {
          name: city.name,
          rank: evaluated.score,
          reason: evaluated.reason,
          breakdown: evaluated.breakdown,
        };
      })
      .sort((a, b) => b.rank - a.rank)
      .slice(0, 2);
  }, [group, energy, budget]);

  const chipClass = (active: boolean) =>
    `rounded-full border px-3 py-1.5 text-xs font-medium transition ${
      active
        ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_6px_14px_rgba(0,0,0,0.12)]"
        : "border-neutral-200 bg-white text-neutral-700 hover:border-[var(--accent)] hover:text-[var(--accent)]"
    }`;

  return (
    <section className="surface mt-12 p-5 sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">60-second chooser</p>
      <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Find your best sea base</h2>
      <p className="mt-2 text-sm text-neutral-600">Pick your trip style and get a quick shortlist.</p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Traveling as</p>
          <div className="flex flex-wrap gap-2">
            {travelOptions.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setGroup(item.key)}
                className={chipClass(group === item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Energy</p>
          <div className="flex flex-wrap gap-2">
            {energyOptions.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setEnergy(item.key)}
                className={chipClass(energy === item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Budget</p>
          <div className="flex flex-wrap gap-2">
            {budgetOptions.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setBudget(item.key)}
                className={chipClass(budget === item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {ranked.map((item, index) => (
          <article key={item.name} className="rounded-xl border border-neutral-200 bg-white p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Top pick {index + 1}</p>
            <p className="mt-1 text-lg font-medium text-neutral-900">{item.name}</p>
            <p className="mt-1 text-xs text-neutral-500">Match score: {item.rank.toFixed(1)}/10</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.reason}</p>
            <details className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3">
              <summary className="cursor-pointer text-xs font-medium text-neutral-700">Why this ranked</summary>
              <div className="mt-3 space-y-2">
                {item.breakdown.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-1 flex items-center justify-between text-xs text-neutral-600">
                      <span>{metric.label}</span>
                      <span className="font-medium text-neutral-800">{metric.value.toFixed(1)}/10</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-neutral-200">
                      <div className="h-1.5 rounded-full bg-neutral-800" style={{width: `${metric.value * 10}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
