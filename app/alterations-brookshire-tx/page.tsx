import JsonLd from "@/components/JsonLd";
import SmartImage from "@/components/SmartImage";
import Icon from "@/components/Icon";
import Link from "next/link";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/blocks";
import { sister } from "@/data/business";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import type { Faq } from "@/data/services";

const path = "/alterations-brookshire-tx";

export const metadata = pageMeta({
  title: "Alterations Near Brookshire, TX | At Our Fry Washateria Location",
  description:
    "Alterations for Brookshire and Fulshear customers are offered at our sister location, Fry Washateria & Cleaners, 2501 N Fry Rd, Katy: hems, buttons, badges and rush service.",
  path,
});

const faqs: Faq[] = [
  {
    q: "Do you offer alterations in Brookshire?",
    a: "Alterations are currently offered at our sister location, Fry Washateria & Cleaners, 2501 North Fry Rd. Suite C, Katy.",
  },
  {
    q: "What alterations does Fry Washateria do?",
    a: "Common jobs include pant hems, replacing buttons, sewing on badges and patches, and rush service. Visit frywashateria.com for the full list and prices.",
  },
  {
    q: "Can I drop off dry cleaning in Brookshire and alterations in Katy?",
    a: "Yes. Many customers drop dry cleaning at Brookshire Washateria on FM 359 and take alterations to Fry Washateria on North Fry Road.",
  },
  { q: "What are Fry Washateria's hours?", a: `Fry Washateria & Cleaners is open ${sister.hours}.` },
];

export default function AlterationsPage() {
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema([{ name: "Alterations", path }])]} />

      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky/20 blur-2xl" />
        <div className="container-site relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Breadcrumbs items={[{ name: "Alterations" }]} />
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">Alterations Near Brookshire, TX</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              We currently offer alterations at our sister location,{" "}
              <a href={sister.url} className="font-semibold text-lime underline underline-offset-2">
                Fry Washateria & Cleaners
              </a>
              , at {sister.address}. Hems, buttons, badges and repairs are handled there in house.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={sister.alterationsUrl} className="btn-primary">
                See alterations at Fry Washateria <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a href={sister.phoneHref} className="btn-secondary">
                <Icon name="phone" className="h-5 w-5" /> Call Fry {sister.phone}
              </a>
            </div>
          </div>
          <SmartImage file="alterations-sister.jpg" alt="Seamstress hemming pants at Fry Washateria & Cleaners in Katy" icon="needle" priority className="hidden aspect-[4/3] rounded-3xl ring-1 ring-white/20 lg:flex" sizes="40vw" />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="prose-local">
            <h2>Alterations and tailoring at Fry Washateria in Katy</h2>
            <p>
              Fry Washateria & Cleaners is our sister store on North Fry Road in Katy. Its alterations service handles everyday
              fixes for Brookshire, Fulshear and Katy customers:
            </p>
            <ul>
              <li>Pant and jean hems</li>
              <li>Replacing buttons</li>
              <li>Sewing on badges, patches and name tags for uniforms and scouts</li>
              <li>Rush service when you need it fast</li>
            </ul>
            <p>
              For current alteration prices and turnaround, visit{" "}
              <a href={sister.alterationsUrl}>alterations and tailoring in Katy at frywashateria.com</a> or call {sister.phone}.
            </p>
            <h2>Combine it with dry cleaning in Brookshire</h2>
            <p>
              Drop your dry cleaning, comforters and pressing at Brookshire Washateria on FM 359, and take pieces that need a
              tailor to Fry Washateria. Both stores share the same owners and the same care for your clothes.
            </p>
            <p>
              Looking for cleaning only? See our <Link href="/dry-cleaning-brookshire-tx">dry cleaning</Link> and{" "}
              <Link href="/ironing-pressing-brookshire-tx">ironing & pressing</Link> services in Brookshire.
            </p>
          </div>
          <aside className="rounded-2xl border border-line bg-cream p-6 lg:self-start">
            <p className="font-display text-lg font-bold">{sister.name}</p>
            <p className="mt-2 text-ink-soft">
              {sister.address}
              <br />
              {sister.hours}
            </p>
            <a href={sister.url} className="btn-dark mt-5 w-full">
              frywashateria.com
            </a>
          </aside>
        </div>
      </section>

      <FaqList faqs={faqs} title="Alterations FAQs" />
      <CtaBand />
    </>
  );
}
