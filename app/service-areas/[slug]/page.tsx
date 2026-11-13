import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { AreaChips, CtaBand, FaqList, PageHero, ServiceCard, VisitCard } from "@/components/blocks";
import { areas, getArea } from "@/data/areas";
import { services } from "@/data/services";
import { business, sister } from "@/data/business";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const area = getArea((await params).slug);
  if (!area) return {};
  return pageMeta({ title: area.metaTitle, description: area.metaDescription, path: `/service-areas/${area.slug}` });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const area = getArea((await params).slug);
  if (!area) notFound();
  const path = `/service-areas/${area.slug}`;
  const popular = area.popularServices.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  const h1 =
    area.kind === "towns"
      ? `Laundromat & Dry Cleaners Near ${area.name}`
      : area.slug === "brookshire"
        ? "Laundromat & Dry Cleaners in Brookshire, TX"
        : `Laundromat & Dry Cleaners Near ${area.name}, TX`;

  return (
    <>
      <JsonLd
        data={[
          faqSchema(area.faqs),
          breadcrumbSchema([
            { name: "Service Areas", path: "/service-areas" },
            { name: area.name, path },
          ]),
        ]}
      />
      <PageHero title={h1} lead={area.lead} crumbs={[{ name: "Service Areas", path: "/service-areas" }, { name: area.name }]} />

      <section className="py-14 md:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="prose-local">
            <h2>About {area.name}</h2>
            {area.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h2>Getting to our store from {area.name}</h2>
            <p>{area.gettingHere}</p>
            <h2>What {area.name} customers bring us</h2>
            <p>
              Here's what neighbors from {area.name} use most. Everything is available any day from 7am to 9pm, and the last
              wash starts at {business.hours.lastWash}.
            </p>
          </div>
          <aside className="space-y-6 lg:self-start">
            <div className="rounded-2xl border border-line bg-cream p-6">
              <p className="font-display text-lg font-bold">Prices at a glance</p>
              <ul className="mt-4 space-y-2 text-ink-soft">
                <li className="flex justify-between"><span>Wash & fold</span><span className="font-semibold text-navy">$1.50/lb</span></li>
                <li className="flex justify-between"><span>Comforter (queen)</span><span className="font-semibold text-navy">$25</span></li>
                <li className="flex justify-between"><span>Dress shirt</span><span className="font-semibold text-navy">$2.25</span></li>
                <li className="flex justify-between"><span>2-piece suit</span><span className="font-semibold text-navy">$10.50</span></li>
                <li className="flex justify-between"><span>Pressing</span><span className="font-semibold text-navy">from $2.50</span></li>
              </ul>
              <Link href="/pricing" className="mt-4 inline-block text-sm font-semibold text-aqua-dark hover:text-navy">
                Full price list →
              </Link>
            </div>
            {area.frySlug && (
              <div className="rounded-2xl bg-sun-light p-6">
                <p className="font-display text-lg font-bold">Prefer pickup?</p>
                <p className="mt-2 text-ink-soft">
                  Our sister store delivers to {area.name}.
                </p>
                <a href={sister.areaUrl(area.frySlug)} className="mt-4 inline-flex items-center gap-1 font-semibold text-navy underline underline-offset-2">
                  Laundry pickup in {area.name} <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            )}
          </aside>
        </div>

        <div className="container-site mt-4 grid gap-5 md:grid-cols-3">
          {popular.map((s) => (
            <ServiceCard key={s.slug} href={`/${s.slug}`} icon={s.icon} title={s.name} text={s.metaDescription.split(". ")[0] + "."} />
          ))}
        </div>

        <div className="container-site mt-14">
          <VisitCard />
        </div>
      </section>

      <FaqList faqs={area.faqs} title={`Laundry & dry cleaning FAQs for ${area.name}`} />

      <section className="pb-14">
        <div className="container-site">
          <h2 className="text-2xl font-bold">Nearby areas we serve</h2>
          <AreaChips slugs={area.nearby} className="mt-5" />
          {area.sources.length > 0 && (
            <p className="mt-8 text-xs text-ink-soft">
              Community information:{" "}
              {area.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && " · "}
                  <a href={s.url} rel="nofollow noopener" target="_blank" className="underline underline-offset-2">
                    {s.label}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
