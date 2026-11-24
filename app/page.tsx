import Link from "next/link";
import Icon from "@/components/Icon";
import SmartImage from "@/components/SmartImage";
import JsonLd from "@/components/JsonLd";
import { AreaChips, CtaBand, CtaButtons, FaqList, ServiceCard, VisitCard } from "@/components/blocks";
import { business, sister } from "@/data/business";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import type { Faq } from "@/data/services";

export const metadata = pageMeta({
  title: "Brookshire Laundromat & Dry Cleaners | Brookshire Washateria",
  description:
    "Laundromat on FM 359 in Brookshire: big washers, same-day wash & fold ($1.50/lb), next-day dry cleaning, comforters and RIA money transfer. Open 7am–9pm daily.",
  path: "/",
});

const cardPrices: Record<string, string> = {
  "self-service-laundromat-brookshire-tx": "Washers from $3.75",
  "wash-and-fold-brookshire-tx": "$1.50/lb",
  "comforter-cleaning-brookshire-tx": "From $20",
  "dry-cleaning-brookshire-tx": "Shirts $2.25",
  "ironing-pressing-brookshire-tx": "From $2.50",
  "rug-cleaning-brookshire-tx": "From $4",
};

const homeFaqs: Faq[] = [
  {
    q: "What are your hours?",
    a: "We're open 7am to 9pm, seven days a week. The last wash starts at 7:30pm.",
  },
  {
    q: "How much is wash and fold?",
    a: "Drop-off wash & fold is $1.50 per pound, washed, dried and folded the same day.",
  },
  {
    q: "Do you offer dry cleaning?",
    a: "Yes. Dry cleaning is ready the next day, with express service available. Shirts are $2.25 and two-piece suits $10.50.",
  },
  {
    q: "Can I send money or pay bills at the laundromat?",
    a: "Yes. Our counter offers RIA money transfer, bill pay and phone refills during store hours.",
  },
  {
    q: "Do you offer pickup and delivery?",
    a: "Brookshire is a walk-in and drop-off store. Our sister location, Fry Washateria & Cleaners in Katy, offers laundry pickup and delivery across Katy and Fulshear.",
  },
  {
    q: "Do you do alterations?",
    a: "Alterations are currently offered at our sister location, Fry Washateria & Cleaners, 2501 North Fry Rd. Suite C, Katy.",
  },
];

export default function HomePage() {
  const tier1 = areas.filter((a) => a.tier === 1);
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-sky/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-lime/10 blur-3xl" />
        <div className="container-site relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium ring-1 ring-white/20">
              <Icon name="clock" className="h-4 w-4 text-lime" /> Open 7am – 9pm, every day
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white md:text-6xl">
              Laundromat, Wash & Fold and Dry Cleaners in Brookshire, TX
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              On FM 359 between I-10 and Fulshear. Big self-serve washers, same-day wash & fold for $1.50/lb, next-day dry
              cleaning, and RIA money transfer and bill pay at the counter.
            </p>
            <CtaButtons className="mt-8" />
            <ul className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm text-white/85">
              {["Same-day wash & fold", "Next-day dry cleaning", "Large-capacity washers", "Se habla español"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-5 w-5 text-lime" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <SmartImage
            file="hero-storefront.jpg"
            alt="Brookshire Washateria & Cleaners storefront on FM 359 in Brookshire, Texas"
            className="aspect-[16/10] rounded-3xl ring-1 ring-white/20"
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-line bg-white">
        <div className="container-site grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          <a href={business.social.google} className="flex items-center gap-3">
            <Icon name="star" className="h-8 w-8 shrink-0 text-lime" />
            <span className="text-sm">
              <span className="block font-bold text-ink">{business.stats.googleRating}★ · {business.stats.googleReviewCount}+ Google reviews</span>
              <span className="text-ink-soft">Read what neighbors say</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <Icon name="basket" className="h-8 w-8 text-sky-dark" />
            <span className="text-sm">
              <span className="block font-bold text-ink">{business.stats.itemsCleaned} items</span>
              <span className="text-ink-soft">cleaned and counting</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="wifi" className="h-8 w-8 text-sky-dark" />
            <span className="text-sm">
              <span className="block font-bold text-ink">Free Wi-Fi</span>
              <span className="text-ink-soft">and $1 vending</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="shield" className="h-8 w-8 text-sky-dark" />
            <span className="text-sm">
              <span className="block font-bold text-ink">Safe, lit parking</span>
              <span className="text-ink-soft">24/7 cameras</span>
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-semibold text-sky-dark">Services</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Everything your laundry needs, in one stop</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Do it yourself in our machines, or drop it off and let us handle it. Either way, you're in and out fast.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} href={`/${s.slug}`} icon={s.icon} title={s.name} text={s.metaDescription.split(". ")[0] + "."} price={cardPrices[s.slug]} />
            ))}
          </div>
        </div>
      </section>

      {/* More than laundry */}
      <section className="py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <SmartImage file="money-counter.jpg" alt="Ria money transfer, bill pay and phone refill counter inside Brookshire Washateria" icon="money" className="aspect-[4/3] rounded-3xl" />
          <div>
            <p className="font-semibold text-sky-dark">More than laundry</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Send money and pay bills while the dryer runs</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Our counter offers RIA money transfer, bill payments and prepaid phone refills, so you can take care of errands
              without another stop.
            </p>
            <ul className="mt-6 space-y-3">
              {["RIA money transfer", "Bill pay", "Prepaid phone refills"].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-light text-sky-dark">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/money-transfer-bill-pay-brookshire-tx" className="btn-dark mt-8">
              Money services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Price highlights */}
      <section className="bg-forest-deep py-16 text-white md:py-20">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-semibold text-lime">Simple, posted prices</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Popular prices</h2>
            </div>
            <Link href="/pricing" className="btn-secondary self-start">
              Full price list <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Wash & fold", "$1.50/lb", "Same day"],
              ["Comforter (queen/twin)", "$25", "Washed & folded"],
              ["Dress shirt", "$2.25", "Dry cleaned & pressed"],
              ["2-piece suit", "$10.50", "Dry cleaned"],
            ].map(([label, price, note]) => (
              <div key={label} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
                <p className="text-white/75">{label}</p>
                <p className="mt-2 font-display text-4xl font-extrabold text-white">{price}</p>
                <p className="mt-1 text-sm text-white/60">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-semibold text-sky-dark">Areas we serve</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Your laundromat between Brookshire and Fulshear</h2>
            <p className="mt-4 text-lg text-ink-soft">
              We're on FM 359, the road that connects Brookshire and Fulshear, a short drive from {tier1.map((a) => a.name).slice(0, 4).join(", ")} and
              the new communities along I-10.
            </p>
          </div>
          <AreaChips className="mt-8" />
          <Link href="/service-areas" className="mt-8 inline-flex items-center gap-1 font-semibold text-sky-dark hover:text-forest">
            View all service areas <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Sister location */}
      <section className="pb-4">
        <div className="container-site">
          <div className="grid gap-6 rounded-3xl bg-lime-light p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Need pickup & delivery or alterations?</h2>
              <p className="mt-3 max-w-2xl text-lg text-ink-soft">
                Our sister store, <a href={sister.url} className="font-semibold text-forest underline underline-offset-2">Fry Washateria & Cleaners</a>{" "}
                on North Fry Road in Katy, picks up and delivers laundry across Katy and Fulshear and offers in-house alterations.
              </p>
            </div>
            <a href={sister.url} className="btn-dark">
              Visit Fry Washateria <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <VisitCard />
        </div>
      </section>

      <FaqList faqs={homeFaqs} />
      <CtaBand />
    </>
  );
}
