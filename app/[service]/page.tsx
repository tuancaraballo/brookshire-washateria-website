import { notFound } from "next/navigation";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { AreaChips, ContentBody, CtaBand, FaqList, PageHero, PriceTable, ServiceCard } from "@/components/blocks";
import { getService, services } from "@/data/services";
import { business } from "@/data/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const service = getService((await params).service);
  if (!service) return {};
  return pageMeta({ title: service.metaTitle, description: service.metaDescription, path: `/${service.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const service = getService((await params).service);
  if (!service) notFound();
  const path = `/${service.slug}`;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, path, service.priceGroups),
          faqSchema(service.faqs),
          breadcrumbSchema([{ name: service.name, path }]),
        ]}
      />
      <PageHero title={service.h1} lead={service.lead} crumbs={[{ name: service.name }]} highlights={service.highlights}>
        <SmartImage
          file={service.image.file}
          alt={service.image.alt}
          icon={service.icon}
          priority
          className="hidden aspect-[4/3] rounded-3xl ring-1 ring-white/20 lg:block"
          sizes="40vw"
        />
      </PageHero>

      <section className="py-14 md:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div>
            <ContentBody sections={service.sections} />
            {service.priceGroups.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold md:text-3xl">{service.name} prices</h2>
                <div className="mt-6 grid gap-6">
                  {service.priceGroups.map((g) => (
                    <PriceTable key={g.id} group={g} compact />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-cream p-6">
              <p className="font-display text-lg font-bold">Visit us</p>
              <p className="mt-2 text-ink-soft">
                {business.address.street}, {business.address.city}
                <br />
                {business.hours.display}
                <br />
                Last wash {business.hours.lastWash}
              </p>
              <a href={business.phoneHref} className="btn-dark mt-5 w-full">
                <Icon name="phone" className="h-5 w-5" /> {business.phone}
              </a>
              <Link href="/contact" className="btn-outline mt-3 w-full">
                Directions & hours
              </Link>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <p className="font-display text-lg font-bold">Popular with neighbors in</p>
              <AreaChips slugs={service.areaSlugs} className="mt-4" />
            </div>
          </aside>
        </div>
      </section>

      <FaqList faqs={service.faqs} title={`${service.name} FAQs`} />

      <section className="bg-cream py-14 md:py-20">
        <div className="container-site">
          <h2 className="text-2xl font-bold md:text-3xl">More services at Brookshire Washateria</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} href={`/${s.slug}`} icon={s.icon} title={s.name} text={s.metaDescription.split(". ")[0] + "."} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
