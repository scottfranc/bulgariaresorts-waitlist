"use client";

import {useMemo, useState} from "react";
import {wellnessDestinations} from "@/lib/wellness-directory";

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

function scoreDestination(item: (typeof wellnessDestinations)[number], group: TravelGroup, energy: Energy, budget: Budget) {
  const ratings = item.ratings;
  if (!ratings) return {score: 0, reason: item.summary};
  const target = {calm: {nightlife: 2, crowd: 3}, balanced: {nightlife: 4, crowd: 5}, nightlife: {nightlife: 7, crowd: 7}}[energy];
  const budgetTarget = {value: 9, mid: 7, upscale: 5}[budget];
  const score =
    closeness(ratings.nightlife, target.nightlife) * 0.18 +
    closeness(ratings.crowdLevel, target.crowd) * 0.18 +
    closeness(ratings.affordability, budgetTarget) * 0.22 +
    (group === "couple" ? ratings.walkability : group === "family" ? ratings.familyFit : ratings.access) * 0.2 +
    ratings.access * 0.12;
  return {
    score: clamp(score),
    reason:
      group === "couple"
        ? `Wellness pace with walkability (${ratings.walkability}/10) and calm crowd profile (${ratings.crowdLevel}/10).`
        : group === "family"
          ? `Family utility (${ratings.familyFit}/10) plus easy practical access (${ratings.access}/10).`
          : `Balanced access (${ratings.access}/10) with a lower-noise wellness rhythm.`,
  };
}

export function WellnessFitChooser() {
  const [group, setGroup] = useState<TravelGroup>("couple");
  const [energy, setEnergy] = useState<Energy>("calm");
  const [budget, setBudget] = useState<Budget>("mid");
  const ranked = useMemo(
    () =>
      wellnessDestinations
        .map((d) => ({name: d.name, ...scoreDestination(d, group, energy, budget)}))
        .sort((a, b) => b.score - a.score)
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
      <h2 className="font-display mt-2 text-3xl tracking-tight text-neutral-900">Find your best wellness base</h2>
      <p className="mt-2 text-sm text-neutral-600">Pick your trip style and get a quick shortlist.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div><p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Traveling as</p><div className="flex flex-wrap gap-2">{travelOptions.map((i) => <button key={i.key} type="button" onClick={() => setGroup(i.key)} className={chipClass(group === i.key)}>{i.label}</button>)}</div></div>
        <div><p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Energy</p><div className="flex flex-wrap gap-2">{energyOptions.map((i) => <button key={i.key} type="button" onClick={() => setEnergy(i.key)} className={chipClass(energy === i.key)}>{i.label}</button>)}</div></div>
        <div><p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Budget</p><div className="flex flex-wrap gap-2">{budgetOptions.map((i) => <button key={i.key} type="button" onClick={() => setBudget(i.key)} className={chipClass(budget === i.key)}>{i.label}</button>)}</div></div>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {ranked.map((item, idx) => (
          <article key={item.name} className="rounded-xl border border-neutral-200 bg-white p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Top pick {idx + 1}</p>
            <p className="mt-1 text-lg font-medium text-neutral-900">{item.name}</p>
            <p className="mt-1 text-xs text-neutral-500">Match score: {item.score.toFixed(1)}/10</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
