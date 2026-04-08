"use client";

import {useMemo, useState} from "react";
import {skiDestinations} from "@/lib/ski-directory";

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

function scoreDestination(item: (typeof skiDestinations)[number], group: TravelGroup, energy: Energy, budget: Budget) {
  const ratings = item.ratings;
  if (!ratings) return {score: 0, reason: item.summary, breakdown: [] as Array<{label: string; value: number}>};

  const target = {
    calm: {nightlife: 2, crowd: 4},
    balanced: {nightlife: 5, crowd: 6},
    nightlife: {nightlife: 8, crowd: 8},
  }[energy];
  const budgetTarget = {value: 9, mid: 7, upscale: 5}[budget];

  const nightlifeAlignment = closeness(ratings.nightlife, target.nightlife);
  const crowdAlignment = closeness(ratings.crowdLevel, target.crowd);
  const budgetAlignment = closeness(ratings.affordability, budgetTarget);

  const energyScore = nightlifeAlignment * 0.2 + crowdAlignment * 0.15;
  const budgetScore = budgetAlignment * 0.22;
  const groupScore =
    group === "family"
      ? ratings.familyFit * 0.22 + ratings.access * 0.1
      : group === "couple"
        ? ratings.walkability * 0.16 + closeness(ratings.crowdLevel, 5) * 0.12
        : ratings.nightlife * 0.16 + ratings.access * 0.12;

  const score = clamp(energyScore + budgetScore + groupScore, 0, 10);
  const reason =
    group === "family"
      ? `Family fit (${ratings.familyFit}/10) and practical access (${ratings.access}/10) stand out.`
      : group === "couple"
        ? `Balanced walkability (${ratings.walkability}/10) with a ski pace that suits ${energy} trips.`
        : `Strong group energy with nightlife (${ratings.nightlife}/10) and access (${ratings.access}/10).`;

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

export function SkiFitChooser() {
  const [group, setGroup] = useState<TravelGroup>("friends");
  const [energy, setEnergy] = useState<Energy>("balanced");
  const [budget, setBudget] = useState<Budget>("mid");

  const ranked = useMemo(
    () =>
      skiDestinations
        .filter((city) => city.ratings)
        .map((city) => {
          const evaluated = scoreDestination(city, group, energy, budget);
          return {name: city.name, rank: evaluated.score, reason: evaluated.reason, breakdown: evaluated.breakdown};
        })
        .sort((a, b) => b.rank - a.rank)
        .slice(0, 2),
    [group, energy, budget],
  );

  const chipClass = (active: boolean) =>
    `rounded-full border px-3 py-1.5 text-xs font-medium transition ${
      active ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-neutral-200 bg-white text-neutral-700"
    }`;

  return (
    <section className="surface mt-12 p-5 sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">60-second chooser</p>
      <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Find your best ski base</h2>
      <p className="mt-2 text-sm text-neutral-600">Pick your trip style and get a quick shortlist.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Traveling as</p>
          <div className="flex flex-wrap gap-2">{travelOptions.map((i) => <button key={i.key} type="button" onClick={() => setGroup(i.key)} className={chipClass(group === i.key)}>{i.label}</button>)}</div>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Energy</p>
          <div className="flex flex-wrap gap-2">{energyOptions.map((i) => <button key={i.key} type="button" onClick={() => setEnergy(i.key)} className={chipClass(energy === i.key)}>{i.label}</button>)}</div>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Budget</p>
          <div className="flex flex-wrap gap-2">{budgetOptions.map((i) => <button key={i.key} type="button" onClick={() => setBudget(i.key)} className={chipClass(budget === i.key)}>{i.label}</button>)}</div>
        </div>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {ranked.map((item, index) => (
          <article key={item.name} className="rounded-xl border border-neutral-200 bg-white p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Top pick {index + 1}</p>
            <p className="mt-1 text-lg font-medium text-neutral-900">{item.name}</p>
            <p className="mt-1 text-xs text-neutral-500">Match score: {item.rank.toFixed(1)}/10</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
