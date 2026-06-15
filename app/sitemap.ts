import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}${s.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: s.hasContent ? 0.8 : 0.5,
    })),
  ];
}
