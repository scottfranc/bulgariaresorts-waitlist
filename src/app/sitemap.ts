import type {MetadataRoute} from "next";
import {env} from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/what-to-expect"];
  return routes.map((route) => ({
    url: `${env.siteUrl}${route}`,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
