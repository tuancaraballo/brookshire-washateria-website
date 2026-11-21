import JsonLd from "@/components/JsonLd";
import SmartImage from "@/components/SmartImage";
import Icon from "@/components/Icon";
import { AreaChips, CtaBand, FaqList, PageHero } from "@/components/blocks";
import { business } from "@/data/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import type { Faq } from "@/data/services";

const path = "/money-transfer-bill-pay-brookshire-tx";

export const metadata = pageMeta({
  title: "RIA Money Transfer & Bill Pay in Brookshire, TX | Brookshire Washateria",
  description:
    "Send money with RIA, pay bills and refill your phone at Brookshire Washateria on FM 359. Open 7am–9pm daily. Envíos de dinero RIA y pago de biles en Brookshire.",
  path,
});

// TODO: confirm the exact billers and phone carriers with the owner and list them here.
const faqs: Faq[] = [
  {
    q: "Can I send money with RIA in Brookshire?",
    a: "Yes. Brookshire Washateria & Cleaners at 418 FM 359 offers RIA money transfer at our counter during store hours.",
  },
  {
    q: "What do I need to send money?",
    a: "Bring a valid government-issued photo ID and the recipient's full name and location. Requirements can vary by amount and destination, so ask at the counter.",
  },
  {
    q: "Which bills can I pay?",
    a: "We accept many common household bills. Ask at the counter or call us to check whether your biller is available.",
  },
  {
    q: "Do you sell phone refills?",
    a: "Yes, prepaid phone refills are available at the counter.",
  },
  {
    q: "¿Puedo enviar dinero con RIA aquí?",
    a: "Sí. Ofrecemos envíos de dinero con RIA, pago de biles y recargas de celular en nuestro mostrador. Atendemos en español.",
  },
];

const items = [
  {
    icon: "money" as const,
    title: "RIA money transfer",
    text: "Send money to family and friends in the U.S. and abroad through the RIA network, including Mexico and Latin America.",
  },
  {
    icon: "check" as const,
    title: "Bill pay",
    text: "Pay household bills in cash at our counter and get a receipt on the spot, no bank account needed.",
  },
  {
    icon: "phone" as const,
    title: "Phone refills",
    text: "Top up prepaid phone plans while your laundry runs.",
  },
];

export default function MoneyPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            { name: "RIA Money Transfer & Bill Pay", schemaServiceType: "Money transfer and bill payment", metaDescription: metadata.description as string },
            path,
          ),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "Money Transfer & Bill Pay", path }]),
        ]}
      />
      <PageHero
        title="RIA Money Transfer, Bill Pay & Phone Refills in Brookshire"
        lead="Take care of errands while your laundry runs. Our counter offers RIA money transfer, bill payments and prepaid phone refills, 7 days a week."
        crumbs={[{ name: "Money Transfer & Bill Pay" }]}
        highlights={["RIA money transfer", "Bill pay", "Phone refills", "Se habla español"]}
      >
        <SmartImage file="money-counter.jpg" alt="Service counter for RIA money transfer and bill pay at Brookshire Washateria" icon="money" priority className="hidden aspect-[4/3] rounded-3xl ring-1 ring-white/20 lg:block" sizes="40vw" />
      </PageHero>

      <section className="py-14 md:py-20">
        <div className="container-site">
          <div className="grid gap-5 md:grid-cols-3">
            {items.map((i) => (
              <div key={i.title} className="rounded-2xl border border-line bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-light text-sky-dark">
                  <Icon name={i.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-xl font-bold">{i.title}</h2>
                <p className="mt-2 leading-relaxed text-ink-soft">{i.text}</p>
              </div>
            ))}
          </div>

          <div className="prose-local mt-14 max-w-3xl">
            <h2>One stop for laundry and errands</h2>
            <p>
              Many of our customers in Brookshire, Sunterra, Bluestem and the surrounding area come in to wash and leave with
              their money sent and bills paid. The counter is open during store hours, {business.hours.display.toLowerCase()}.
            </p>
            <h2>What to bring</h2>
            <ul>
              <li>A valid government-issued photo ID for money transfers</li>
              <li>The recipient's full name, city and country, and pickup or deposit details</li>
              <li>Your bill or account number for bill payments</li>
              <li>Your phone number and carrier for refills</li>
            </ul>
            <p>Fees and exchange rates are set by the provider and shown before you confirm a transfer.</p>
            <h2 lang="es">Envíos de dinero y pago de biles en Brookshire</h2>
            <p lang="es">
              Envíe dinero con RIA a México, Centroamérica y otros países, pague sus biles y recargue su celular mientras lava
              su ropa. Estamos en 418 FM 359, abiertos de 7am a 9pm todos los días. Atendemos en español.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-display text-lg font-bold">Serving customers from</p>
            <AreaChips slugs={["brookshire", "sunterra", "bluestem", "freeman-ranch", "simonton-pattison-san-felipe-waller"]} className="mt-4" />
          </div>
        </div>
      </section>

      <FaqList faqs={faqs} title="Money services FAQs" />
      <CtaBand title="Laundry and errands, done in one stop." />
    </>
  );
}
