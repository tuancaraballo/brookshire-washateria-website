import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/business";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/pricing", 0.9),
    ...services.map((s) => page(`/${s.slug}`, 0.9)),
    page("/money-transfer-bill-pay-brookshire-tx", 0.8),
    page("/alterations-brookshire-tx", 0.6),
    page("/service-areas", 0.8),
    ...areas.map((a) => page(`/service-areas/${a.slug}`, a.tier === 1 ? 0.8 : 0.7)),
    page("/contact", 0.7),
    page("/blog", 0.5, "weekly"),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.5)),
    page("/privacy-policy", 0.1, "yearly"),
    page("/terms", 0.1, "yearly"),
  ];
}
