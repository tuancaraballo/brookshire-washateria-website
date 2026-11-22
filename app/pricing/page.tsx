import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero, PriceTable } from "@/components/blocks";
import { allPriceGroups, PRICES_UPDATED } from "@/data/pricing";
import { sister } from "@/data/business";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import type { Faq } from "@/data/services";

export const metadata = pageMeta({
  title: "Prices: Wash & Fold, Dry Cleaning, Comforters | Brookshire Washateria",
  description:
    "Full price list for Brookshire Washateria & Cleaners: self-serve washers from $3.75, wash & fold $1.50/lb, comforters from $20, shirts $2.25, suits $10.50, pressing from $2.50, rugs and pet beds. Regular and express prices.",
  path: "/pricing",
});

const faqs: Faq[] = [
  { q: "How is wash & fold priced?", a: "By weight: $1.50 per pound, weighed at drop-off. Folding only is $1.00 per pound." },
  { q: "What is express service?", a: "Express is our rush option for dry cleaning, pressing and dry cleaned bedding. Ask at the counter for today's express turnaround." },
  { q: "How much do the self-serve washers cost?", a: "Washers are $3.75 (20 lb), $4.75 (30 lb), $5.75 (40 lb) and $6.75 (60 lb large capacity). Dryers are $0.25 for 7 minutes; a full 35-minute cycle is about $1.25." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema([{ name: "Pricing", path: "/pricing" }])]} />
      <PageHero
        title="Laundry & Dry Cleaning Prices"
        lead={`Clear, posted prices for every service at Brookshire Washateria & Cleaners. Prices last updated ${PRICES_UPDATED}.`}
        crumbs={[{ name: "Pricing" }]}
        highlights={["Washers from $3.75", "Wash & fold $1.50/lb", "Comforters from $20", "Shirts $2.25"]}
      />

      <section className="py-14 md:py-20">
        <div className="container-site">
          <nav aria-label="Price categories" className="flex flex-wrap gap-2">
            {allPriceGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full border border-line px-4 py-2 text-sm font-medium hover:border-sky hover:text-sky-dark">
                {g.title}
              </a>
            ))}
          </nav>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {allPriceGroups.map((g) => (
              <div key={g.id} id={g.id} className="scroll-mt-28">
                <PriceTable group={g} />
              </div>
            ))}
            <div className="rounded-2xl border border-line bg-cream p-6">
              <h3 className="text-lg font-bold">Self-serve laundromat</h3>
              <p className="mt-2 text-ink-soft">
                Our 60 lb large-capacity washers fit king comforters and bulky loads. Open 7am–9pm daily, last wash 7:30pm.
              </p>
              <Link href="/self-service-laundromat-brookshire-tx" className="mt-4 inline-block font-semibold text-sky-dark hover:text-forest">
                About our self-serve laundromat →
              </Link>
              <h3 className="mt-8 text-lg font-bold">Alterations</h3>
              <p className="mt-2 text-ink-soft">
                Alterations are offered at our sister location,{" "}
                <a href={sister.alterationsUrl} className="font-semibold text-sky-dark underline underline-offset-2">
                  Fry Washateria & Cleaners
                </a>{" "}
                in Katy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqList faqs={faqs} title="Pricing FAQs" />
      <CtaBand />
    </>
  );
}
