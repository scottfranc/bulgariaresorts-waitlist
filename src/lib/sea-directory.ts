export type SeaDirectoryItem = {
  name: string;
  location: string;
  destination?: string;
  summary: string;
  facts: string[];
  image: string;
  imageAlt: string;
  ratings?: {
    scale: 10;
    access: number;
    affordability: number;
    crowdLevel: number;
    familyFit: number;
    nightlife: number;
    walkability: number;
  };
  hotelRatings?: {
    scale: 10;
    priceLevel: number;
    familyFit: number;
    wellness: number;
    beachProximity: number;
    quietness: number;
    nightlifeAccess: number;
  };
};

export const seaCities: SeaDirectoryItem[] = [
  {
    name: "Nessebar",
    location: "Black Sea Coast, Burgas Province",
    summary: "UNESCO old town feel, stone streets, and calmer evenings.",
    facts: ["Historic peninsula setting", "Best for couples", "Walkable old-town core"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Coastal old town view in Nessebar area",
    ratings: {scale: 10, access: 8, affordability: 7, crowdLevel: 7, familyFit: 8, nightlife: 5, walkability: 9},
  },
  {
    name: "Sozopol",
    location: "Southern Black Sea Coast",
    summary: "Boutique atmosphere and creative, slower-paced beach days.",
    facts: ["Design-led vibe", "Great food scene", "Good shoulder-season fit"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Coastline and old architecture in Sozopol",
    ratings: {scale: 10, access: 7, affordability: 6, crowdLevel: 6, familyFit: 7, nightlife: 6, walkability: 8},
  },
  {
    name: "Sunny Beach",
    location: "Near Nessebar, Burgas Province",
    summary: "High-energy resort base with nightlife and broad hotel inventory.",
    facts: ["Strong nightlife", "Wide accommodation range", "Popular in July-August"],
    image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sunny Beach coastline in Bulgaria",
    ratings: {scale: 10, access: 9, affordability: 8, crowdLevel: 9, familyFit: 6, nightlife: 10, walkability: 8},
  },
  {
    name: "Albena",
    location: "Northern Black Sea Coast",
    summary: "Family-leaning resort zone with practical beach logistics.",
    facts: ["Family-friendly setup", "Organized resort structure", "Calmer than party hubs"],
    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Beach resort atmosphere on Bulgarian coast",
    ratings: {scale: 10, access: 7, affordability: 7, crowdLevel: 6, familyFit: 9, nightlife: 4, walkability: 7},
  },
  {
    name: "Balchik",
    location: "Northern Coast, Dobrich Province",
    summary: "Smaller town base known for gardens, marina views, and relaxed pace.",
    facts: ["Scenic waterfront", "Good for calm stays", "Close to golf zones"],
    image: "https://images.unsplash.com/photo-1713714516195-60224327d751?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Coastal cliffs and harbor style view",
    ratings: {scale: 10, access: 6, affordability: 7, crowdLevel: 4, familyFit: 7, nightlife: 3, walkability: 7},
  },
  {
    name: "Varna",
    location: "Eastern Bulgaria",
    summary: "Largest coastal city with urban amenities and beach access.",
    facts: ["City + beach balance", "Strong transport links", "Wide dining options"],
    image: "https://images.unsplash.com/photo-1713714516316-102eafcf4ab3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Urban coastal panorama of Varna area",
    ratings: {scale: 10, access: 10, affordability: 7, crowdLevel: 7, familyFit: 7, nightlife: 8, walkability: 8},
  },
  {
    name: "Golden Sands",
    location: "North of Varna",
    summary: "Resort strip with active nightlife and many package-stay options.",
    facts: ["Lively evenings", "Hotel-dense zone", "Easy for short breaks"],
    image: "https://images.unsplash.com/photo-1713714516354-b09dbb1a04b4?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Golden Sands style beach area",
    ratings: {scale: 10, access: 8, affordability: 7, crowdLevel: 8, familyFit: 6, nightlife: 9, walkability: 7},
  },
  {
    name: "St. St. Constantine and Helena",
    location: "Near Varna",
    summary: "Quieter coastal area with spa influences and slower rhythm.",
    facts: ["Wellness-friendly", "Calm atmosphere", "Good for mixed-age groups"],
    image: "https://images.unsplash.com/photo-1590089137678-3d81de766b94?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Calm coastal zone near Varna",
    ratings: {scale: 10, access: 8, affordability: 6, crowdLevel: 4, familyFit: 8, nightlife: 4, walkability: 7},
  },
  {
    name: "Pomorie",
    location: "Near Burgas",
    summary: "Traditional town with beach access and spa/mud-treatment reputation.",
    facts: ["Known for wellness treatments", "More local feel", "Good value in shoulder months"],
    image: "https://images.unsplash.com/photo-1749560917112-918847390483?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Pomorie coastal surroundings",
    ratings: {scale: 10, access: 8, affordability: 8, crowdLevel: 5, familyFit: 7, nightlife: 4, walkability: 7},
  },
  {
    name: "Ahtopol",
    location: "Southern Coast, Strandzha area",
    summary: "Low-key seaside base for travelers prioritizing calm over nightlife.",
    facts: ["Very relaxed", "Nature-near", "Lower crowd pressure"],
    image: "https://images.unsplash.com/photo-1708519692028-6e8ae48ea3fc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Quiet Bulgarian coastline",
    ratings: {scale: 10, access: 5, affordability: 8, crowdLevel: 3, familyFit: 7, nightlife: 2, walkability: 6},
  },
  {
    name: "Tsarevo",
    location: "Southern Black Sea Coast",
    summary: "Practical base with nearby beach options and local-town rhythm.",
    facts: ["Moderate pricing", "Good base for exploring south coast", "Family-capable"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Tsarevo seaside view",
    ratings: {scale: 10, access: 6, affordability: 8, crowdLevel: 5, familyFit: 8, nightlife: 3, walkability: 7},
  },
  {
    name: "Primorsko",
    location: "Southern Coast, Burgas Province",
    summary: "Popular summer destination with active beach life and broad appeal.",
    facts: ["Strong summer demand", "Youth-friendly energy", "Good beach variety"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Primorsko beach line",
    ratings: {scale: 10, access: 7, affordability: 8, crowdLevel: 8, familyFit: 7, nightlife: 7, walkability: 7},
  },
];

export const seaHotels: SeaDirectoryItem[] = [
  {
    name: "Wave Resort",
    location: "Pomorie area",
    destination: "Pomorie",
    summary: "Modern resort profile with spa and family-oriented facilities.",
    facts: ["Upscale leaning", "Spa + pools", "Airport transfer convenience"],
    image: "https://images.unsplash.com/photo-1749560917112-918847390483?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Resort-style hotel in coastal Bulgaria",
    hotelRatings: {scale: 10, priceLevel: 6, familyFit: 9, wellness: 8, beachProximity: 8, quietness: 7, nightlifeAccess: 4},
  },
  {
    name: "Sol Nessebar Palace",
    location: "Nessebar",
    destination: "Nessebar",
    summary: "Large resort format with multiple amenities for mixed trip types.",
    facts: ["Family-capable", "Resort convenience", "Near old town access"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Hotel-facing coastal view in Nessebar",
    hotelRatings: {scale: 10, priceLevel: 6, familyFit: 8, wellness: 6, beachProximity: 8, quietness: 6, nightlifeAccess: 5},
  },
  {
    name: "HVD Club Bor",
    location: "Sunny Beach",
    destination: "Sunny Beach",
    summary: "Central base suited to travelers wanting nightlife proximity.",
    facts: ["Strong location", "Mid-range comfort", "Walkable to main strip"],
    image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sunny Beach hotel zone near the coastline",
    hotelRatings: {scale: 10, priceLevel: 8, familyFit: 6, wellness: 4, beachProximity: 7, quietness: 4, nightlifeAccess: 9},
  },
  {
    name: "Melia Grand Hermitage",
    location: "Golden Sands",
    destination: "Golden Sands",
    summary: "High-capacity upscale option with broad amenities.",
    facts: ["Upscale segment", "Large inventory", "Close to entertainment zones"],
    image: "https://images.unsplash.com/photo-1713714516354-b09dbb1a04b4?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Golden Sands resort skyline near the sea",
    hotelRatings: {scale: 10, priceLevel: 5, familyFit: 7, wellness: 7, beachProximity: 8, quietness: 5, nightlifeAccess: 8},
  },
  {
    name: "Ensana Aquahouse",
    location: "St. St. Constantine and Helena",
    destination: "St. St. Constantine and Helena",
    summary: "Wellness-oriented stay with thermal and spa features.",
    facts: ["Spa-focused", "Calmer location", "Couples and wellness fit"],
    image: "https://images.unsplash.com/photo-1590089137678-3d81de766b94?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "St. St. Constantine and Helena wellness-style coastal setting",
    hotelRatings: {scale: 10, priceLevel: 5, familyFit: 7, wellness: 10, beachProximity: 7, quietness: 8, nightlifeAccess: 3},
  },
  {
    name: "Hotel Primoretz",
    location: "Varna",
    destination: "Varna",
    summary: "City-and-coast blend for travelers wanting urban convenience.",
    facts: ["Business + leisure fit", "Central location", "Polished service style"],
    image: "https://images.unsplash.com/photo-1713714516316-102eafcf4ab3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Varna coastal city hotel district atmosphere",
    hotelRatings: {scale: 10, priceLevel: 4, familyFit: 6, wellness: 7, beachProximity: 8, quietness: 6, nightlifeAccess: 7},
  },
  {
    name: "Kaliakria Resort",
    location: "Balchik area",
    destination: "Balchik",
    summary: "Apartment-resort setup favored for longer sea stays.",
    facts: ["Long-stay friendly", "Scenic setting", "Good for groups"],
    image: "https://images.unsplash.com/photo-1713714516195-60224327d751?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Balchik-area resort setting above the Black Sea",
    hotelRatings: {scale: 10, priceLevel: 7, familyFit: 8, wellness: 6, beachProximity: 6, quietness: 8, nightlifeAccess: 3},
  },
  {
    name: "Helena Sands",
    location: "Sunny Beach",
    destination: "Sunny Beach",
    summary: "Quieter edge-of-strip option balancing comfort and access.",
    facts: ["Mid-upscale", "Beachfront positioning", "Less noisy than center"],
    image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sunny Beach beachfront hotel atmosphere",
    hotelRatings: {scale: 10, priceLevel: 6, familyFit: 7, wellness: 6, beachProximity: 9, quietness: 6, nightlifeAccess: 8},
  },
  {
    name: "Astor Garden Hotel",
    location: "St. St. Constantine and Helena",
    destination: "St. St. Constantine and Helena",
    summary: "Refined stay with spa and relaxed coastal tone.",
    facts: ["Upscale comfort", "Wellness amenities", "Good couples fit"],
    image: "https://images.unsplash.com/photo-1590089137678-3d81de766b94?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Seaside wellness-hotel atmosphere near Varna coast",
    hotelRatings: {scale: 10, priceLevel: 5, familyFit: 7, wellness: 8, beachProximity: 8, quietness: 8, nightlifeAccess: 4},
  },
  {
    name: "Albena Maritim Hotels",
    location: "Albena",
    destination: "Albena",
    summary: "Cluster of family-first beach properties in a managed resort area.",
    facts: ["Family convenience", "Resort ecosystem", "Predictable logistics"],
    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Albena family resort coastline and hotel strip",
    hotelRatings: {scale: 10, priceLevel: 7, familyFit: 9, wellness: 5, beachProximity: 8, quietness: 7, nightlifeAccess: 4},
  },
  {
    name: "Apolonia Resort",
    location: "Sozopol",
    destination: "Sozopol",
    summary: "Apartment-style resort option near old-town experiences.",
    facts: ["Flexible stays", "Good for longer visits", "Close to Sozopol core"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sozopol resort area by the sea",
    hotelRatings: {scale: 10, priceLevel: 7, familyFit: 7, wellness: 5, beachProximity: 7, quietness: 7, nightlifeAccess: 5},
  },
  {
    name: "Grand Hotel Pomorie",
    location: "Pomorie",
    destination: "Pomorie",
    summary: "Spa and health-treatment oriented coastal stay.",
    facts: ["Wellness reputation", "Calmer destination", "Good shoulder-season value"],
    image: "https://images.unsplash.com/photo-1749560917112-918847390483?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Spa hotel in Pomorie",
    hotelRatings: {scale: 10, priceLevel: 7, familyFit: 7, wellness: 9, beachProximity: 7, quietness: 8, nightlifeAccess: 3},
  },
  {
    name: "Hotel Ahtopol",
    location: "Ahtopol",
    destination: "Ahtopol",
    summary: "Simple coastal stay for travelers prioritizing quiet and sea proximity.",
    facts: ["Low-key atmosphere", "Budget friendly", "Good for relaxed beach days"],
    image: "https://images.unsplash.com/photo-1708519692028-6e8ae48ea3fc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Quiet Ahtopol coastal stay setting",
    hotelRatings: {scale: 10, priceLevel: 9, familyFit: 7, wellness: 4, beachProximity: 7, quietness: 9, nightlifeAccess: 2},
  },
  {
    name: "Hotel Zebra",
    location: "Tsarevo",
    destination: "Tsarevo",
    summary: "Practical base with easy access to Tsarevo beaches and nearby southern coast spots.",
    facts: ["Central positioning", "Good value profile", "Convenient short-stay option"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Tsarevo coastal hotel surroundings",
    hotelRatings: {scale: 10, priceLevel: 8, familyFit: 7, wellness: 4, beachProximity: 7, quietness: 7, nightlifeAccess: 3},
  },
  {
    name: "Perla Beach Club Hotel",
    location: "Primorsko",
    destination: "Primorsko",
    summary: "Beach-focused hotel option in one of the more active southern summer destinations.",
    facts: ["Near main beach zones", "Family-capable setup", "Popular in peak season"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Primorsko hotel zone by the beach",
    hotelRatings: {scale: 10, priceLevel: 7, familyFit: 8, wellness: 5, beachProximity: 9, quietness: 5, nightlifeAccess: 7},
  },
];
