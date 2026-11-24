import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SmartImage from "@/components/SmartImage";
import Icon from "@/components/Icon";
import { CtaBand, PageHero, VisitCard } from "@/components/blocks";
import { areas } from "@/data/areas";
import { sister } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Areas We Serve: Brookshire, Fulshear & West Katy, TX",
  description:
    "Laundry and dry cleaning on FM 359 for Brookshire, Fulshear, Tamarron, Jordan Ranch, Cross Creek Ranch, Fulbrook, Weston Lakes, Sunterra and nearby towns.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const groups = [
    { title: "Fulshear & the FM 359 corridor", list: areas.filter((a) => a.tier === 1) },
    { title: "Brookshire & communities along I-10", list: areas.filter((a) => a.tier === 2) },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Service Areas", path: "/service-areas" }])} />
      <PageHero
        title="Laundromat & Dry Cleaners Serving Brookshire, Fulshear and West Katy"
        lead="We're on FM 359 just south of I-10, the road that links Brookshire and Fulshear. Neighbors from these communities drop off laundry, dry cleaning and comforters with us, or wash in our big machines 7am to 9pm every day."
        crumbs={[{ name: "Service Areas" }]}
      >
        <SmartImage file="service-area-map.jpg" alt="Welcome signs for Brookshire, Fulshear and Katy, the communities served by Brookshire Washateria" icon="pin" priority className="hidden aspect-[4/3] rounded-3xl ring-1 ring-white/20 lg:flex" sizes="40vw" />
      </PageHero>

      <section className="py-14 md:py-20">
        <div className="container-site space-y-14">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl font-bold md:text-3xl">{g.title}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.list.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/service-areas/${a.slug}`}
                    className="group rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky/50 hover:shadow-lg"
                  >
                    <p className="flex items-center gap-2 text-sm text-ink-soft">
                      <Icon name="pin" className="h-4 w-4 text-sky-dark" /> {a.locality}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{a.name}</h3>
                    <p className="mt-2 line-clamp-3 text-ink-soft">{a.lead}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-dark group-hover:text-forest">
                      View {a.name} page <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-3xl bg-lime-light p-8">
            <h2 className="text-2xl font-bold">Want laundry picked up at your door?</h2>
            <p className="mt-3 max-w-3xl text-lg text-ink-soft">
              Brookshire Washateria is a walk-in and drop-off store. Our sister location,{" "}
              <a href={sister.serviceAreasUrl} className="font-semibold text-forest underline underline-offset-2">
                Fry Washateria & Cleaners
              </a>
              , offers laundry pickup and delivery across Katy and Fulshear neighborhoods.
            </p>
          </div>

          <VisitCard />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
