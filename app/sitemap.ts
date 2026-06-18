import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Only routes that currently exist as pages. Add new service pages here as
// they ship so crawlers don't index 404s.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/eor`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/shared-services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
