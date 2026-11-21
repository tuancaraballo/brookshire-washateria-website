import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { CtaBand, PageHero, VisitCard } from "@/components/blocks";
import { business, directionsUrl, sister } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Directions & Hours | Brookshire Washateria, 418 FM 359, Brookshire TX",
  description:
    "Find Brookshire Washateria & Cleaners at 418 FM 359, Brookshire, TX 77423, just south of I-10. Open 7am–9pm every day, last wash 7:30pm. Call (281) 206-8251.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        title="Directions, Hours & Contact"
        lead={`${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}. Open ${business.hours.display}, with the last wash at ${business.hours.lastWash}.`}
        crumbs={[{ name: "Contact" }]}
      />

      <section className="py-14 md:py-20">
        <div className="container-site space-y-12">
          <VisitCard />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-line p-6">
              <Icon name="clock" className="h-8 w-8 text-sky-dark" />
              <h2 className="mt-4 text-xl font-bold">Hours</h2>
              <table className="mt-3 w-full text-ink-soft">
                <tbody>
                  {business.hours.days.map((d) => (
                    <tr key={d}>
                      <th scope="row" className="py-0.5 text-left font-normal">{d}</th>
                      <td className="py-0.5 text-right">7am – 9pm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-sm">Last wash starts at {business.hours.lastWash}.</p>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <Icon name="pin" className="h-8 w-8 text-sky-dark" />
              <h2 className="mt-4 text-xl font-bold">Getting here</h2>
              <ul className="mt-3 space-y-3 text-ink-soft">
                <li><span className="font-semibold text-ink">From I-10:</span> take the FM 359 exit in Brookshire and head south.</li>
                <li><span className="font-semibold text-ink">From Fulshear:</span> take FM 359 north toward Brookshire.</li>
                <li><span className="font-semibold text-ink">Parking:</span> free, lit lot with 24/7 cameras.</li>
              </ul>
              <a href={directionsUrl} className="mt-4 inline-block font-semibold text-sky-dark hover:text-forest">Open in Google Maps →</a>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <Icon name="phone" className="h-8 w-8 text-sky-dark" />
              <h2 className="mt-4 text-xl font-bold">Call or email</h2>
              <p className="mt-3 text-ink-soft">
                <a href={business.phoneHref} className="text-lg font-semibold text-forest hover:text-sky-dark">{business.phone}</a>
                <br />
                <a href={`mailto:${business.email}`} className="hover:text-sky-dark">{business.email}</a>
              </p>
              <p className="mt-3 text-sm text-ink-soft">Se habla español.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-lime-light p-8">
            <h2 className="text-2xl font-bold">Our sister location</h2>
            <p className="mt-3 text-lg text-ink-soft">
              <a href={sister.url} className="font-semibold text-forest underline underline-offset-2">{sister.name}</a> · {sister.address} ·{" "}
              <a href={sister.phoneHref} className="font-semibold text-forest">{sister.phone}</a>
              <br />
              Laundry pickup & delivery and alterations.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
