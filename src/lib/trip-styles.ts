export type TripStyleKey = "sea" | "mountains" | "ski" | "wellness";

export type TripStylePage = {
  key: TripStyleKey;
  title: string;
  strapline: string;
  description: string;
  intro: string;
  image: {
    src: string;
    alt: string;
  };
  sections: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
      note: string;
    }>;
  }>;
};

export const tripStylePages: TripStylePage[] = [
  {
    key: "sea",
    title: "Sea",
    strapline: "Coastal escapes, sorted",
    description: "Explore Bulgaria coastal cities, resorts, and timing guides from one premium sea page.",
    intro:
      "Use this page as your coastal hub: compare beach bases, shortlist resort types, and move straight into practical timing advice.",
    image: {
      src: "https://images.unsplash.com/photo-1683653417528-18cbfea82fae?auto=format&fit=crop&w=1800&q=85",
      alt: "Black Sea waves and rocky shoreline in Sozopol, Bulgaria",
    },
    sections: [
      {
        title: "Plan your stay",
        links: [
          {
            label: "Coastal destinations directory",
            href: "/trip-style/sea/cities",
            note: "Browse destinations with ratings, search, and quick details.",
          },
          {
            label: "Sea hotels directory",
            href: "/trip-style/sea/hotels",
            note: "Compare stay options by fit, price profile, and atmosphere.",
          },
        ],
      },
      {
        title: "Timing guides",
        links: [
          {
            label: "Best time for Sunny Beach",
            href: "/best-time-to-visit/sunny-beach",
            note: "Seasonality by weather, crowds, and value.",
          },
          {
            label: "Best time for Sozopol",
            href: "/best-time-to-visit/sozopol",
            note: "Shoulder-season guidance for slower trips.",
          },
        ],
      },
    ],
  },
  {
    key: "mountains",
    title: "Mountains",
    strapline: "Nature-first mountain stays",
    description: "Find mountain resort comparisons and planning guides across Bulgaria in one page.",
    intro:
      "Start with transfer practicality and pace. These mountain-focused links help you choose where to base and how to time your trip.",
    image: {
      src: "https://images.unsplash.com/photo-1749560917112-918847390483?auto=format&fit=crop&w=1800&q=85",
      alt: "Mountain and resort scenery in Bansko, Bulgaria",
    },
    sections: [
      {
        title: "Plan your stay",
        links: [
          {
            label: "Mountain destinations directory",
            href: "/trip-style/mountains/cities",
            note: "Browse mountain bases with fit scores, search, and quick details.",
          },
          {
            label: "Mountain hotels directory",
            href: "/trip-style/mountains/hotels",
            note: "Compare hotels by budget fit, quietness, and wellness profile.",
          },
        ],
      },
      {
        title: "Resort fit",
        links: [
          {
            label: "Ski resorts for groups",
            href: "/best-for/bulgaria-ski-resorts-for-groups",
            note: "Large-group fit, logistics, and evening options.",
          },
          {
            label: "Ski resorts for families",
            href: "/best-for/bulgaria-ski-resorts-for-families",
            note: "Transfer-friendly choices with practical layouts.",
          },
        ],
      },
      {
        title: "Season windows",
        links: [
          {
            label: "Best time for Bansko",
            href: "/best-time-to-visit/bansko",
            note: "Core-season timing and crowd expectations.",
          },
          {
            label: "Best time for Borovets",
            href: "/best-time-to-visit/borovets",
            note: "When to travel for convenience and value.",
          },
        ],
      },
    ],
  },
  {
    key: "ski",
    title: "Ski",
    strapline: "Slope planning made simple",
    description: "Access Bulgaria ski comparisons, beginner picks, and month-by-month timing from one hub.",
    intro:
      "From first-time ski trips to mixed groups, this page helps you choose your base quickly and move into the right planning detail.",
    image: {
      src: "https://images.unsplash.com/photo-1708519692028-6e8ae48ea3fc?auto=format&fit=crop&w=1800&q=85",
      alt: "Skier on a snowy slope in Bansko, Bulgaria",
    },
    sections: [
      {
        title: "Plan your stay",
        links: [
          {
            label: "Ski destinations directory",
            href: "/trip-style/ski/cities",
            note: "Browse ski bases with fit scores, search, and quick details.",
          },
          {
            label: "Ski hotels directory",
            href: "/trip-style/ski/hotels",
            note: "Compare ski hotels by location, budget fit, and quietness.",
          },
        ],
      },
      {
        title: "Who each resort suits",
        links: [
          {
            label: "Ski resorts for beginners",
            href: "/best-for/bulgaria-ski-resorts-for-beginners",
            note: "Confidence-first picks with easier progression.",
          },
          {
            label: "Ski resorts for families",
            href: "/best-for/bulgaria-ski-resorts-for-families",
            note: "Family-focused ski logistics and terrain fit.",
          },
        ],
      },
      {
        title: "Best time to visit",
        links: [
          {
            label: "Best time for Bansko",
            href: "/best-time-to-visit/bansko",
            note: "When snow consistency is typically strongest.",
          },
          {
            label: "Best time for Pamporovo",
            href: "/best-time-to-visit/pamporovo",
            note: "Timing guidance for a smoother ski plan.",
          },
        ],
      },
    ],
  },
  {
    key: "wellness",
    title: "Wellness",
    strapline: "Restorative Bulgaria escapes",
    description: "Discover spa-focused resorts, calming destinations, and seasonal guidance for wellness stays.",
    intro:
      "For slower-paced travel, choose your spa base first, then use these links to compare locations and book with more confidence.",
    image: {
      src: "https://images.unsplash.com/photo-1590089137678-3d81de766b94?auto=format&fit=crop&w=1800&q=85",
      alt: "Peaceful green park path in Sandanski, Bulgaria",
    },
    sections: [
      {
        title: "Plan your stay",
        links: [
          {
            label: "Wellness destinations directory",
            href: "/trip-style/wellness/cities",
            note: "Browse wellness destinations with fit scores and practical notes.",
          },
          {
            label: "Wellness hotels directory",
            href: "/trip-style/wellness/hotels",
            note: "Compare wellness stays by spa profile, quietness, and value.",
          },
        ],
      },
      {
        title: "Wellness-oriented stays",
        links: [
          {
            label: "Spa resorts for couples",
            href: "/best-for/bulgaria-spa-resorts-for-couples",
            note: "Top spa towns with restorative trip rhythm.",
          },
          {
            label: "Beach resorts for couples",
            href: "/best-for/bulgaria-beach-resorts-for-couples",
            note: "Combine wellness with lighter coastal pace.",
          },
        ],
      },
      {
        title: "Timing and seasonality",
        links: [
          {
            label: "Best time for Sozopol",
            href: "/best-time-to-visit/sozopol",
            note: "Shoulder months for better calm/value balance.",
          },
          {
            label: "Best time for Sunny Beach",
            href: "/best-time-to-visit/sunny-beach",
            note: "Avoid peak crowds while keeping warm-weather days.",
          },
        ],
      },
    ],
  },
];
