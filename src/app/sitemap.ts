import type {MetadataRoute} from "next";
import {env} from "@/lib/env";
import {bestForPages, bestTimePages, comparePages} from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/what-to-expect",
    "/guides",
    "/photo-credits",
    ...bestForPages.map((page) => `/best-for/${page.slug}`),
    ...comparePages.map((page) => `/compare/${page.slug}`),
    ...bestTimePages.map((page) => `/best-time-to-visit/${page.resort}`),
  ];
  return routes.map((route) => ({
    url: `${env.siteUrl}${route}`,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/guides" ? 0.9 : 0.8,
  }));
}
