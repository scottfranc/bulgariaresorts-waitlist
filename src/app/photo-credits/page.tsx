import Link from "next/link";
import type {Metadata} from "next";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {SiteFooter, SiteHeader} from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Photo Credits | Bulgaria Resorts",
  description: "Photo attribution for Bulgaria Resorts imagery used across the site.",
};

const credits = [
  {
    section: "Sea card",
    location: "Sozopol, Bulgaria",
    photographerName: "Lidia Stawinska",
    photographerUrl: "https://unsplash.com/@liliess",
    photoUrl: "https://unsplash.com/photos/a-street-light-sitting-next-to-the-ocean-HHZRcMmKE6k",
  },
  {
    section: "Mountains card",
    location: "Bansko, Bulgaria",
    photographerName: "Virginia Marinova",
    photographerUrl: "https://unsplash.com/@virginiaphotostories",
    photoUrl: "https://unsplash.com/photos/flowers-frame-a-scenic-view-of-buildings-and-mountains-n-XpTMdvbwQ",
  },
  {
    section: "Ski card",
    location: "Bansko, Bulgaria",
    photographerName: "Alan Rostovtev",
    photographerUrl: "https://unsplash.com/@alanrost",
    photoUrl: "https://unsplash.com/photos/a-man-riding-skis-down-the-side-of-a-snow-covered-slope-j7UiYfRq9AU",
  },
  {
    section: "Wellness card",
    location: "Sandanski, Bulgaria",
    photographerName: "Stoyan Kolev",
    photographerUrl: "https://unsplash.com/@100sperspective",
    photoUrl:
      "https://unsplash.com/photos/person-in-red-shirt-walking-on-brown-dirt-pathway-surrounded-by-green-trees-during-daytime-RLFshcYpZo8",
  },
  {
    section: "Sea coastal destinations directory (Nessebar)",
    location: "Nessebar, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    section: "Sea coastal destinations directory (Sozopol)",
    location: "Sozopol, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    section: "Sea coastal destinations directory (Sunny Beach)",
    location: "Sunny Beach, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1468413253725-0d5181091126",
  },
  {
    section: "Sea coastal destinations directory (Albena)",
    location: "Albena, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054",
  },
  {
    section: "Sea coastal destinations directory (Balchik)",
    location: "Balchik, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516195-60224327d751",
  },
  {
    section: "Sea coastal destinations directory (Varna)",
    location: "Varna, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516316-102eafcf4ab3",
  },
  {
    section: "Sea coastal destinations directory (Golden Sands)",
    location: "Golden Sands, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516354-b09dbb1a04b4",
  },
  {
    section: "Sea coastal destinations directory (St. Constantine and Helena)",
    location: "Varna Coast, Bulgaria",
    photographerName: "Stoyan Kolev",
    photographerUrl: "https://unsplash.com/@100sperspective",
    photoUrl: "https://unsplash.com/photos/person-in-red-shirt-walking-on-brown-dirt-pathway-surrounded-by-green-trees-during-daytime-RLFshcYpZo8",
  },
  {
    section: "Sea coastal destinations directory (Pomorie)",
    location: "Pomorie, Bulgaria",
    photographerName: "Virginia Marinova",
    photographerUrl: "https://unsplash.com/@virginiaphotostories",
    photoUrl: "https://unsplash.com/photos/flowers-frame-a-scenic-view-of-buildings-and-mountains-n-XpTMdvbwQ",
  },
  {
    section: "Sea coastal destinations directory (Ahtopol)",
    location: "Ahtopol, Bulgaria",
    photographerName: "Alan Rostovtev",
    photographerUrl: "https://unsplash.com/@alanrost",
    photoUrl: "https://unsplash.com/photos/a-man-riding-skis-down-the-side-of-a-snow-covered-slope-j7UiYfRq9AU",
  },
  {
    section: "Sea coastal destinations directory (Tsarevo)",
    location: "Tsarevo, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
  },
  {
    section: "Sea coastal destinations directory (Primorsko)",
    location: "Primorsko, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    section: "Sea hotels directory (Nessebar)",
    location: "Nessebar, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    section: "Sea hotels directory (Sunny Beach)",
    location: "Sunny Beach, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1468413253725-0d5181091126",
  },
  {
    section: "Sea hotels directory (Golden Sands)",
    location: "Golden Sands, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516354-b09dbb1a04b4",
  },
  {
    section: "Sea hotels directory (St. Constantine and Helena)",
    location: "Varna Coast, Bulgaria",
    photographerName: "Stoyan Kolev",
    photographerUrl: "https://unsplash.com/@100sperspective",
    photoUrl: "https://unsplash.com/photos/person-in-red-shirt-walking-on-brown-dirt-pathway-surrounded-by-green-trees-during-daytime-RLFshcYpZo8",
  },
  {
    section: "Sea hotels directory (Varna)",
    location: "Varna, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516316-102eafcf4ab3",
  },
  {
    section: "Sea hotels directory (Balchik)",
    location: "Balchik, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516195-60224327d751",
  },
  {
    section: "Sea hotels directory (Albena)",
    location: "Albena, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054",
  },
  {
    section: "Sea hotels directory (Sozopol)",
    location: "Sozopol, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    section: "Sea hotels directory (Pomorie)",
    location: "Pomorie, Bulgaria",
    photographerName: "Virginia Marinova",
    photographerUrl: "https://unsplash.com/@virginiaphotostories",
    photoUrl: "https://unsplash.com/photos/flowers-frame-a-scenic-view-of-buildings-and-mountains-n-XpTMdvbwQ",
  },
  {
    section: "Sea hotels directory (Ahtopol)",
    location: "Ahtopol, Bulgaria",
    photographerName: "Alan Rostovtev",
    photographerUrl: "https://unsplash.com/@alanrost",
    photoUrl: "https://unsplash.com/photos/a-man-riding-skis-down-the-side-of-a-snow-covered-slope-j7UiYfRq9AU",
  },
  {
    section: "Sea hotels directory (Tsarevo)",
    location: "Tsarevo, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
  },
  {
    section: "Sea hotels directory (Primorsko)",
    location: "Primorsko, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    section: "Mountain destinations directory (Bansko)",
    location: "Bansko, Bulgaria",
    photographerName: "Virginia Marinova",
    photographerUrl: "https://unsplash.com/@virginiaphotostories",
    photoUrl: "https://unsplash.com/photos/flowers-frame-a-scenic-view-of-buildings-and-mountains-n-XpTMdvbwQ",
  },
  {
    section: "Mountain destinations directory (Borovets)",
    location: "Borovets, Bulgaria",
    photographerName: "Alan Rostovtev",
    photographerUrl: "https://unsplash.com/@alanrost",
    photoUrl: "https://unsplash.com/photos/a-man-riding-skis-down-the-side-of-a-snow-covered-slope-j7UiYfRq9AU",
  },
  {
    section: "Mountain destinations directory (Pamporovo)",
    location: "Pamporovo, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    section: "Mountain destinations directory (Velingrad)",
    location: "Velingrad area, Bulgaria",
    photographerName: "Stoyan Kolev",
    photographerUrl: "https://unsplash.com/@100sperspective",
    photoUrl: "https://unsplash.com/photos/person-in-red-shirt-walking-on-brown-dirt-pathway-surrounded-by-green-trees-during-daytime-RLFshcYpZo8",
  },
  {
    section: "Mountain destinations directory (Dobrinishte)",
    location: "Dobrinishte area, Bulgaria",
    photographerName: "Alan Rostovtev",
    photographerUrl: "https://unsplash.com/@alanrost",
    photoUrl: "https://unsplash.com/photos/a-man-riding-skis-down-the-side-of-a-snow-covered-slope-j7UiYfRq9AU",
  },
  {
    section: "Mountain destinations directory (Smolyan)",
    location: "Smolyan area, Bulgaria",
    photographerName: "Virginia Marinova",
    photographerUrl: "https://unsplash.com/@virginiaphotostories",
    photoUrl: "https://unsplash.com/photos/flowers-frame-a-scenic-view-of-buildings-and-mountains-n-XpTMdvbwQ",
  },
  {
    section: "Mountain hotels directory",
    location: "Bulgaria mountain destinations",
    photographerName: "Mixed Unsplash contributors",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516316-102eafcf4ab3",
  },
  {
    section: "Ski destinations directory (Borovets)",
    location: "Borovets, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://unsplash.com/photos/a-group-of-people-riding-skis-vmHLhI0s2qY",
  },
  {
    section: "Ski destinations directory (Pamporovo)",
    location: "Rhodope Mountains near Pamporovo, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://unsplash.com/photos/green-pine-trees-on-mountain-under-white-clouds-and-blue-sky-during-daytime-2ehYFzHB6MQ",
  },
  {
    section: "Ski destinations directory (Chepelare)",
    location: "Chepelare area, Rhodope Mountains, Bulgaria",
    photographerName: "Unsplash contributor",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://unsplash.com/photos/a-large-group-of-trees-in-a-forest-Ilx_i4Z0WtE",
  },
  {
    section: "Ski hotels directory",
    location: "Bulgaria ski resorts",
    photographerName: "Mixed Unsplash contributors",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516354-b09dbb1a04b4",
  },
  {
    section: "Wellness destinations directory (Velingrad)",
    location: "Velingrad, Bulgaria",
    photographerName: "Mixed Unsplash contributors",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1590089137678-3d81de766b94",
  },
  {
    section: "Wellness destinations directory (Sandanski)",
    location: "Southwestern Bulgaria near Sandanski",
    photographerName: "Anton Atanasov",
    photographerUrl: "https://unsplash.com/@blooddrainer",
    photoUrl: "https://unsplash.com/photos/a-foggy-day-in-a-park-with-trees-and-leaves-on-the-ground-xX0UaSMoLLc",
  },
  {
    section: "Wellness destinations directory (Hisarya)",
    location: "Plovdiv region, Bulgaria",
    photographerName: "Boycho Popov",
    photographerUrl: "https://unsplash.com/@boyoto",
    photoUrl: "https://unsplash.com/photos/a-scenic-view-of-a-building-and-a-park-AnaSoVj-XPU",
  },
  {
    section: "Wellness destinations directory (Devin)",
    location: "Rhodope Mountains near Devin, Bulgaria",
    photographerName: "Dannyel Spasov",
    photographerUrl: "https://unsplash.com/@dannyspasov",
    photoUrl: "https://unsplash.com/photos/a-dirt-road-surrounded-by-trees-and-leaves-Tp1DW_mpO3o",
  },
  {
    section: "Wellness hotels directory",
    location: "Bulgaria wellness resorts",
    photographerName: "Mixed Unsplash contributors",
    photographerUrl: "https://unsplash.com",
    photoUrl: "https://images.unsplash.com/photo-1713714516354-b09dbb1a04b4",
  },
];

export default function PhotoCreditsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-shell py-14 sm:py-20">
          <div className="mb-6">
            <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Photo credits"}]} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Transparency</p>
            <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
              Photo credits
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-500">
              We use destination photography from Unsplash and credit every image source here.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {credits.map((credit) => (
              <li key={`${credit.section}-${credit.photoUrl}`} className="surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{credit.section}</p>
                <p className="mt-2 text-sm text-neutral-700">{credit.location}</p>
                <p className="mt-2 text-sm text-neutral-600">
                  Photo by{" "}
                  <a
                    href={credit.photographerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-muted font-medium text-neutral-700"
                  >
                    {credit.photographerName}
                  </a>{" "}
                  on{" "}
                  <a
                    href={credit.photoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-muted font-medium text-neutral-700"
                  >
                    Unsplash
                  </a>
                  .
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-neutral-500">
            Back to{" "}
            <Link href="/" className="link-muted font-medium text-neutral-700">
              homepage
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
