export type BestForPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  publishedAt: string;
  updatedAt: string;
  highlights: string[];
  resorts: Array<{
    name: string;
    why: string;
  }>;
};

export type ComparePage = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  publishedAt: string;
  updatedAt: string;
  leftLabel: string;
  rightLabel: string;
  comparison: Array<{
    label: string;
    left: string;
    right: string;
  }>;
};

export type BestTimePage = {
  resort: string;
  title: string;
  description: string;
  intro: string;
  publishedAt: string;
  updatedAt: string;
  monthlyNotes: Array<{
    months: string;
    note: string;
  }>;
};

export const bestForPages: BestForPage[] = [
  {
    slug: "bulgaria-ski-resorts-for-families",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    title: "Best Bulgaria Ski Resorts for Families",
    description:
      "Compare family-friendly Bulgaria ski resorts by slope mix, transfer effort, and beginner support.",
    intro:
      "These options are typically the easiest for families that want smooth logistics, child-friendly learning terrain, and a balanced pace.",
    highlights: [
      "Short transfer times reduce stress for younger children.",
      "Reliable beginner zones and ski schools matter more than total slope count.",
      "Walkable layouts and mixed dining options improve evenings for groups.",
    ],
    resorts: [
      {
        name: "Borovets",
        why: "Closest major ski resort to Sofia for easier airport-to-resort travel with kids.",
      },
      {
        name: "Bansko",
        why: "Largest infrastructure and plenty of accommodation choices at different budgets.",
      },
      {
        name: "Pamporovo",
        why: "Gentler terrain feel and calmer pace for first family ski trips.",
      },
    ],
  },
  {
    slug: "bulgaria-beach-resorts-for-couples",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    title: "Best Beach Resorts in Bulgaria for Couples",
    description:
      "Find Bulgaria beach resorts for couples by atmosphere, nightlife style, and nearby experiences.",
    intro:
      "Couples usually get the best experience by matching energy level first: calm boutique areas, lifestyle beach towns, or lively nightlife zones.",
    highlights: [
      "Old-town ambiance and walkability are key for romantic breaks.",
      "Shoulder season travel can improve value without sacrificing weather.",
      "Split-stay plans work well for combining nightlife and quieter beach days.",
    ],
    resorts: [
      {
        name: "Nessebar",
        why: "Historic old town with scenic waterfront walks and a slower evening rhythm.",
      },
      {
        name: "Sozopol",
        why: "Creative, boutique vibe with charming streets and strong food options.",
      },
      {
        name: "Sunny Beach",
        why: "Best for couples who prioritize nightlife and a high-energy atmosphere.",
      },
    ],
  },
  {
    slug: "bulgaria-ski-resorts-for-beginners",
    title: "Best Bulgaria Ski Resorts for Beginners",
    description: "Find beginner-friendly Bulgaria ski resorts with easier slopes, schools, and simpler logistics.",
    intro: "If your priority is confidence and progression, focus on easy access learning areas and dependable instruction.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    highlights: [
      "Reliable beginner zones reduce day-one friction.",
      "Instructor availability and language support improve outcomes.",
      "Compact resort layouts are easier for first-time visitors.",
    ],
    resorts: [
      {name: "Pamporovo", why: "Gentler terrain profile and approachable pace for first ski holidays."},
      {name: "Borovets", why: "Practical transfer plus good entry-level options for short learning trips."},
      {name: "Bansko", why: "Broad resort infrastructure with many school and accommodation choices."},
    ],
  },
  {
    slug: "bulgaria-ski-resorts-for-groups",
    title: "Best Bulgaria Ski Resorts for Groups",
    description: "Compare Bulgaria ski resorts for groups by stay options, evening scene, and mixed-skill suitability.",
    intro: "Group trips work best when resorts offer flexible accommodation, varied slopes, and enough evening options.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    highlights: [
      "Mixed-skill groups need enough slope variety.",
      "Large accommodation inventory helps keep budgets aligned.",
      "A strong dining and après mix makes evenings easier to coordinate.",
    ],
    resorts: [
      {name: "Bansko", why: "Most comprehensive infrastructure for mixed preferences and larger groups."},
      {name: "Borovets", why: "Convenient for quick group breaks from Sofia arrivals."},
      {name: "Pamporovo", why: "Calmer pace for groups prioritizing ski time over nightlife."},
    ],
  },
  {
    slug: "bulgaria-beach-resorts-for-families",
    title: "Best Beach Resorts in Bulgaria for Families",
    description: "Family-friendly Bulgaria beach resorts ranked by calm water access, walkability, and practical logistics.",
    intro: "For family beach trips, start with safety, convenience, and how easy daily movement is with children.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    highlights: [
      "Proximity to beach and food matters more than nightlife.",
      "Calmer zones are better for young children.",
      "Nearby essentials save time during multi-day stays.",
    ],
    resorts: [
      {name: "Albena", why: "Purpose-built resort format with practical family conveniences."},
      {name: "Nessebar", why: "Balanced pace with scenic areas and good day-to-day flexibility."},
      {name: "St. St. Constantine and Helena", why: "More relaxed atmosphere and easier family rhythm."},
    ],
  },
  {
    slug: "bulgaria-spa-resorts-for-couples",
    title: "Best Bulgaria Spa Resorts for Couples",
    description: "Top Bulgaria spa resort areas for couples seeking calm stays, wellness focus, and scenic surroundings.",
    intro: "Spa-oriented couples trips are strongest when you combine wellness quality with quiet, walkable surroundings.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    highlights: [
      "Look for wellness depth, not just one-off facilities.",
      "Quiet surroundings usually improve value for shorter breaks.",
      "Shoulder seasons can unlock better price-to-quality ratios.",
    ],
    resorts: [
      {name: "Velingrad", why: "Established spa reputation with many wellness-focused stays."},
      {name: "Sandanski", why: "Milder climate and restorative pace for couples breaks."},
      {name: "Hisarya", why: "Historic spa profile with a calmer rhythm than larger resort hubs."},
    ],
  },
  {
    slug: "bulgaria-mountain-resorts-for-couples",
    title: "Best Bulgaria Mountain Resorts for Couples",
    description: "Compare Bulgaria mountain stays for couples by pace, scenery, and evening atmosphere.",
    intro: "Couples usually get the best mountain experience by balancing quietness, walkability, and wellness quality.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    highlights: [
      "Quieter zones and spa options matter more than nightlife depth.",
      "Scenic walks and compact centers improve short stays.",
      "Shoulder season travel can unlock better room value.",
    ],
    resorts: [
      {name: "Velingrad", why: "Strong spa ecosystem and restorative pace for couples breaks."},
      {name: "Borovets", why: "Good short-break fit with easier transfer logistics."},
      {name: "Pamporovo", why: "Calmer mountain rhythm with strong comfort profile."},
    ],
  },
  {
    slug: "bulgaria-wellness-resorts-for-families",
    title: "Best Bulgaria Wellness Resorts for Families",
    description: "Family-friendly wellness resort picks in Bulgaria with practical planning notes.",
    intro: "Family wellness trips work best when destinations combine calm pace, easy logistics, and flexible hotel services.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    highlights: [
      "Family-ready hotel amenities reduce planning stress.",
      "Walkable town centers support easier daily routines.",
      "Balanced pricing and quieter areas improve longer stays.",
    ],
    resorts: [
      {name: "Velingrad", why: "Most complete wellness infrastructure for mixed-age trips."},
      {name: "Sandanski", why: "Mild climate and easy pace suit family recovery-focused breaks."},
      {name: "Hisarya", why: "Compact thermal-town setup with practical day-to-day movement."},
    ],
  },
];

export const comparePages: ComparePage[] = [
  {
    slug: "bansko-vs-borovets",
    title: "Bansko vs Borovets: Which Bulgaria Ski Resort Fits You?",
    description:
      "A practical Bansko vs Borovets comparison across transfer time, slope experience, après scene, and budget.",
    overview:
      "Both are strong options, but the right pick depends on whether you value shorter transfers and convenience or larger resort infrastructure.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    leftLabel: "Bansko",
    rightLabel: "Borovets",
    comparison: [
      {
        label: "Transfer from Sofia",
        left: "Longer transfer, often around 2.5 to 3 hours depending on traffic.",
        right: "Usually the easiest transfer, often around 1 to 1.5 hours.",
      },
      {
        label: "Resort scale",
        left: "Bigger base area and broader accommodation inventory.",
        right: "More compact feel with less complexity for short stays.",
      },
      {
        label: "Group fit",
        left: "Strong for mixed groups wanting lots of options.",
        right: "Strong for weekend trips and convenience-first travelers.",
      },
      {
        label: "Evening atmosphere",
        left: "More varied dining and nightlife choices.",
        right: "Generally calmer and simpler night scene.",
      },
    ],
  },
  {
    slug: "bansko-vs-pamporovo",
    title: "Bansko vs Pamporovo: Which Ski Resort Should You Choose?",
    description: "Compare Bansko and Pamporovo by terrain feel, crowd levels, and trip style fit.",
    overview: "Choose Bansko for broader infrastructure, or Pamporovo for a calmer, gentler mountain rhythm.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    leftLabel: "Bansko",
    rightLabel: "Pamporovo",
    comparison: [
      {label: "Trip style", left: "Higher-energy with more variety.", right: "Lower-key and more relaxed."},
      {label: "Terrain feel", left: "Broad range for mixed ability groups.", right: "Often perceived as more beginner-friendly."},
      {label: "Evenings", left: "More nightlife and dining choice.", right: "Calmer nights and simpler pace."},
      {label: "Best for", left: "Groups wanting many options.", right: "Travelers prioritizing ease and comfort."},
    ],
  },
  {
    slug: "sunny-beach-vs-nessebar",
    title: "Sunny Beach vs Nessebar: Which Coastal Base Is Better?",
    description: "Compare Sunny Beach and Nessebar for nightlife, atmosphere, and who each destination suits.",
    overview: "Pick Sunny Beach for energy and nightlife, or Nessebar for character, culture, and a slower coastal pace.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    leftLabel: "Sunny Beach",
    rightLabel: "Nessebar",
    comparison: [
      {label: "Atmosphere", left: "Lively, entertainment-focused.", right: "Historic, scenic, and more relaxed."},
      {label: "Evening style", left: "Nightlife-heavy.", right: "Dining and walking-focused."},
      {label: "Trip fit", left: "Friends and nightlife-driven trips.", right: "Couples and culture-oriented breaks."},
      {label: "Day planning", left: "Strong for convenience and activity density.", right: "Strong for slower and more curated days."},
    ],
  },
  {
    slug: "sozopol-vs-nessebar",
    title: "Sozopol vs Nessebar: Which Old-Town Beach Destination Fits You?",
    description: "A practical Sozopol vs Nessebar comparison for vibe, beach access, and travel pace.",
    overview: "Both towns offer old-town charm; Sozopol leans boutique and artistic while Nessebar feels more historic and classic.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    leftLabel: "Sozopol",
    rightLabel: "Nessebar",
    comparison: [
      {label: "Character", left: "Boutique and creative.", right: "Historic and heritage-led."},
      {label: "Pace", left: "Laid-back with lifestyle focus.", right: "Balanced between tourism and old-town exploration."},
      {label: "Best for", left: "Couples seeking design-forward stays.", right: "Travelers wanting iconic old-town context."},
      {label: "Overall feel", left: "Intimate and curated.", right: "Classic and photogenic."},
    ],
  },
  {
    slug: "borovets-vs-pamporovo",
    title: "Borovets vs Pamporovo: Which Ski Base Fits Your Trip?",
    description: "Compare Borovets and Pamporovo by access, atmosphere, crowd profile, and group fit.",
    overview: "Borovets is typically stronger for transfer convenience, while Pamporovo often wins on calmer rhythm and value.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    leftLabel: "Borovets",
    rightLabel: "Pamporovo",
    comparison: [
      {label: "Transfer practicality", left: "Usually easier from Sofia arrivals.", right: "Longer route, especially for short breaks."},
      {label: "Trip atmosphere", left: "Compact and energetic.", right: "Calmer, family-leaning pace."},
      {label: "Crowd profile", left: "Medium-high in key weeks.", right: "Often lower and more relaxed."},
      {label: "Best fit", left: "Convenience-first and weekend trips.", right: "Comfort-first and gentler ski plans."},
    ],
  },
  {
    slug: "velingrad-vs-sandanski",
    title: "Velingrad vs Sandanski: Which Wellness Base Is Better?",
    description: "A practical wellness comparison between Velingrad and Sandanski for spa depth, pace, and value.",
    overview: "Velingrad generally offers broader spa depth, while Sandanski often feels milder and slower for restorative breaks.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    leftLabel: "Velingrad",
    rightLabel: "Sandanski",
    comparison: [
      {label: "Wellness depth", left: "Largest spa-hotel ecosystem in Bulgaria.", right: "Strong wellness profile with fewer large properties."},
      {label: "Climate feel", left: "Cooler mountain-town context.", right: "Milder southwestern climate."},
      {label: "Trip pace", left: "Structured resort experience.", right: "Slower and more local rhythm."},
      {label: "Best for", left: "Travelers wanting broad premium options.", right: "Travelers prioritizing calm, climate, and recovery."},
    ],
  },
];

export const bestTimePages: BestTimePage[] = [
  {
    resort: "bansko",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    title: "Best Time to Visit Bansko",
    description:
      "Month-by-month guide for when to visit Bansko based on ski conditions, crowds, and pricing.",
    intro:
      "Bansko usually performs best for ski-focused trips from late December through early March, with January and February offering the most consistent winter conditions.",
    monthlyNotes: [
      {
        months: "December",
        note: "Festive period atmosphere; snow quality can vary early in the month.",
      },
      {
        months: "January to February",
        note: "Peak ski season with strongest consistency and busiest weekends.",
      },
      {
        months: "March",
        note: "Milder weather and potential value windows; monitor late-season conditions.",
      },
    ],
  },
  {
    resort: "borovets",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    title: "Best Time to Visit Borovets",
    description:
      "Plan your Borovets trip with practical monthly timing tips for weather, crowds, and value.",
    intro:
      "Borovets is best for convenience-focused ski breaks in core winter, especially when you want minimal transfer complexity from Sofia.",
    monthlyNotes: [
      {
        months: "December",
        note: "Popular holiday travel period and lively resort atmosphere.",
      },
      {
        months: "January to February",
        note: "Most reliable period for ski planning and instructor availability.",
      },
      {
        months: "March",
        note: "Good option for flexible travelers seeking fewer crowds and softer pricing.",
      },
    ],
  },
  {
    resort: "pamporovo",
    title: "Best Time to Visit Pamporovo",
    description: "Month-by-month Pamporovo timing guide for ski conditions, crowds, and planning value.",
    intro: "Pamporovo is often a great fit in core winter for relaxed ski pacing, especially for newer skiers and families.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    monthlyNotes: [
      {months: "December", note: "Holiday atmosphere with variable early-season conditions."},
      {months: "January to February", note: "Most consistent period for winter-trip planning."},
      {months: "March", note: "Potentially quieter with softer pricing and milder weather."},
    ],
  },
  {
    resort: "sunny-beach",
    title: "Best Time to Visit Sunny Beach",
    description: "Best months for Sunny Beach based on weather, crowd intensity, and nightlife seasonality.",
    intro: "Sunny Beach typically peaks in midsummer, while shoulder months can offer better balance between weather and crowd levels.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    monthlyNotes: [
      {months: "May to June", note: "Warmer conditions begin with a lighter crowd profile."},
      {months: "July to August", note: "Peak beach and nightlife season with the highest demand."},
      {months: "September", note: "Often attractive for value and a calmer pace."},
    ],
  },
  {
    resort: "sozopol",
    title: "Best Time to Visit Sozopol",
    description: "Sozopol month-by-month travel timing guide for weather, crowds, and cultural atmosphere.",
    intro: "Sozopol often shines in shoulder season when weather is still pleasant and the town retains its relaxed charm.",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    monthlyNotes: [
      {months: "May to June", note: "Comfortable climate and easier pacing for old-town exploration."},
      {months: "July to August", note: "Peak summer energy with busier beaches and restaurants."},
      {months: "September", note: "A popular balance of warm weather and reduced crowd pressure."},
    ],
  },
  {
    resort: "velingrad",
    title: "Best Time to Visit Velingrad",
    description: "Timing guide for Velingrad wellness trips by weather feel, crowd flow, and spa-season value.",
    intro: "Velingrad is typically strong year-round, with spring and autumn often offering the best calm-to-value balance.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    monthlyNotes: [
      {months: "March to May", note: "Great shoulder-season wellness balance with softer crowd levels."},
      {months: "June to August", note: "Warm period with higher leisure demand."},
      {months: "September to November", note: "Often strong value and calmer spa routines."},
    ],
  },
  {
    resort: "sandanski",
    title: "Best Time to Visit Sandanski",
    description: "Month-by-month Sandanski timing guide for wellness stays and slow-travel planning.",
    intro: "Sandanski is frequently a strong shoulder-season destination, with mild conditions and a relaxed town rhythm.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    monthlyNotes: [
      {months: "March to May", note: "Pleasant climate and easier pacing for spa-focused itineraries."},
      {months: "June to August", note: "Warmer season with moderate visitor demand."},
      {months: "September to November", note: "Popular for restorative trips and balanced value."},
    ],
  },
  {
    resort: "hisarya",
    title: "Best Time to Visit Hisarya",
    description: "Planning guide for Hisarya by season, crowd levels, and wellness trip value.",
    intro: "Hisarya often performs best in spring and autumn when thermal-town travel feels calm and practical.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    monthlyNotes: [
      {months: "March to May", note: "Comfortable weather for thermal stays and town exploration."},
      {months: "June to August", note: "Summer warmth with higher weekend traffic."},
      {months: "September to November", note: "Balanced demand and often stronger value windows."},
    ],
  },
];
