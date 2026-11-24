// /llms.txt: a plain-text summary of the business for AI assistants (llmstxt.org format).
// Built from the same data files as the site, so it never drifts from the pages.
import { business, fullAddress, sister, SITE_URL } from "@/data/business";
import { allPriceGroups, EXPRESS_NOTE, formatPrice, PRICES_UPDATED } from "@/data/pricing";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/posts";
import { contaminantPolicy } from "@/data/policies";

export const dynamic = "force-static";

export function GET() {
  const url = (path: string) => `${SITE_URL}${path}`;
  const lines: string[] = [
    `# ${business.name}`,
    "",
    `> Self-service laundromat, same-day wash & fold, dry cleaning and RIA money transfer at ${fullAddress}, between I-10 and Fulshear. Open ${business.hours.display}, last wash ${business.hours.lastWash}. Phone ${business.phone}. Se habla español.`,
    "",
    "## Key facts",
    `- Address: ${fullAddress} (${business.address.county})`,
    `- Hours: ${business.hours.display}; last wash ${business.hours.lastWash}`,
    `- Phone: ${business.phone}; email: ${business.email}`,
    "- Wash & fold: same-day, $1.50/lb, 10 lb minimum",
    "- Dry cleaning: next-day; express available",
    `- Pickup & delivery and alterations are offered by our sister store, ${sister.name} (${sister.address}, ${sister.phone}): ${sister.url}`,
    `- Items we can't accept: ${contaminantPolicy.en}`,
    `- Google Business Profile: ${business.social.google}`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${url(`/${s.slug}`)}): ${s.metaDescription}`),
    `- [Money transfer & bill pay](${url("/money-transfer-bill-pay-brookshire-tx")}): RIA money transfer, bill pay and phone refills at the counter`,
    `- [Alterations](${url("/alterations-brookshire-tx")}): handled at our sister store, ${sister.name}`,
    "",
    `## Prices (updated ${PRICES_UPDATED})`,
    `Full list: ${url("/pricing")}. ${EXPRESS_NOTE}`,
  ];
  for (const g of allPriceGroups) {
    lines.push("", `### ${g.title}`);
    for (const item of g.items) {
      const express = item.express ? `; express ${formatPrice(item, item.express)}` : "";
      lines.push(`- ${item.name}: ${formatPrice(item)}${express}${item.note ? `. ${item.note}` : ""}`);
    }
  }
  lines.push(
    "",
    "## Areas served",
    ...areas.map((a) => `- [${a.name}](${url(`/service-areas/${a.slug}`)})`),
    "",
    "## Guides",
    ...posts.map((p) => `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.excerpt}`),
    "",
    "## Optional",
    `- [Directions & hours](${url("/contact")})`,
    `- [Sitemap](${url("/sitemap.xml")})`,
  );
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
