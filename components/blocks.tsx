import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { business, directionsUrl, mapEmbedUrl } from "@/data/business";
import { EXPRESS_NOTE, formatPrice, type PriceGroup } from "@/data/pricing";
import type { Faq, Service } from "@/data/services";
import { areas } from "@/data/areas";

/* ---------- Breadcrumbs ---------- */
export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-white">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.name} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {item.path ? (
              <Link href={item.path} className="hover:text-white">{item.name}</Link>
            ) : (
              <span className="text-white" aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- Page hero (inner pages) ---------- */
export function PageHero({
  title,
  lead,
  crumbs,
  highlights,
  children,
}: {
  title: string;
  lead: string;
  crumbs: { name: string; path?: string }[];
  highlights?: string[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky/20 blur-2xl" />
      <div className="container-site relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{lead}</p>
          {highlights && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/20">
                  <Icon name="check" className="h-4 w-4 text-lime" /> {h}
                </li>
              ))}
            </ul>
          )}
          <CtaButtons className="mt-8" />
        </div>
        {children}
      </div>
    </section>
  );
}

export function CtaButtons({ className = "", dark = true }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={directionsUrl} className="btn-primary">
        <Icon name="pin" className="h-5 w-5" /> Get directions
      </a>
      <a href={business.phoneHref} className={dark ? "btn-secondary" : "btn-outline"}>
        <Icon name="phone" className="h-5 w-5" /> Call {business.phone}
      </a>
    </div>
  );
}

/* ---------- Price table ---------- */
export function PriceTable({ group, compact = false }: { group: PriceGroup; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <div className="border-b border-line bg-cream px-5 py-4">
        <h3 className="text-lg font-bold">{group.title}</h3>
        {group.description && <p className="mt-1 text-sm text-ink-soft">{group.description}</p>}
      </div>
      <table className="w-full text-left text-[15px]">
        <thead className="sr-only md:not-sr-only">
          <tr className="text-xs uppercase tracking-wider text-ink-soft">
            <th scope="col" className="px-5 pb-2 pt-4 font-semibold">Item</th>
            <th scope="col" className="px-5 pb-2 pt-4 text-right font-semibold">Price</th>
            {group.showExpress && <th scope="col" className="px-5 pb-2 pt-4 text-right font-semibold">Express</th>}
          </tr>
        </thead>
        <tbody>
          {(compact ? group.items.slice(0, 8) : group.items).map((item) => (
            <tr key={item.name} className="border-t border-line/70 first:border-t-0 md:first:border-t">
              <th scope="row" className="px-5 py-3 font-medium">
                {item.name}
                {item.es && <span className="block text-xs font-normal text-ink-soft" lang="es">{item.es}</span>}
              </th>
              <td className="whitespace-nowrap px-5 py-3 text-right font-semibold text-forest">{formatPrice(item)}</td>
              {group.showExpress && (
                <td className="whitespace-nowrap px-5 py-3 text-right text-ink-soft">
                  {item.express !== undefined ? formatPrice(item, item.express) : "—"}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {group.showExpress && <p className="border-t border-line px-5 py-3 text-xs text-ink-soft">{EXPRESS_NOTE}</p>}
      {compact && group.items.length > 8 && (
        <p className="border-t border-line px-5 py-3 text-sm">
          <Link href="/pricing" className="font-semibold text-sky-dark hover:text-forest">
            See all {group.items.length} items on the full price list →
          </Link>
        </p>
      )}
    </div>
  );
}

/* ---------- FAQ ---------- */
export function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-site max-w-3xl">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-ink">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-light text-sky-dark transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA ---------- */
export function CtaBand({ title = "Laundry day, done in one stop." }: { title?: string }) {
  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-12 text-center text-white md:px-16">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-sky/25 blur-2xl" />
          <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-lime/20 blur-2xl" />
          <h2 className="relative text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/85">
            {business.address.street}, {business.address.city} · Open {business.hours.display} · Last wash {business.hours.lastWash}
          </p>
          <CtaButtons className="relative mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Service cards ---------- */
export function ServiceCard({ href, icon, title, text, price }: { href: string; icon: IconName; title: string; text: string; price?: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky/50 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-light text-sky-dark">
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{text}</p>
      <div className="mt-5 flex items-center justify-between">
        {price && <span className="text-sm font-semibold text-forest">{price}</span>}
        <span className="flex items-center gap-1 text-sm font-semibold text-sky-dark group-hover:text-forest">
          Learn more <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

/* ---------- Area link chips ---------- */
export function AreaChips({ slugs, className = "" }: { slugs?: string[]; className?: string }) {
  const list = slugs ? areas.filter((a) => slugs.includes(a.slug)) : areas;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {list.map((a) => (
        <li key={a.slug}>
          <Link
            href={`/service-areas/${a.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium hover:border-sky hover:text-sky-dark"
          >
            <Icon name="pin" className="h-4 w-4 text-sky-dark" /> {a.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Map + visit card ---------- */
export function VisitCard() {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-line bg-white md:grid-cols-2">
      <iframe
        title={`Map to ${business.name}`}
        src={mapEmbedUrl}
        className="h-72 w-full md:h-full md:min-h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-8">
        <h2 className="text-2xl font-bold">Visit us on FM 359</h2>
        <ul className="mt-5 space-y-4 text-ink-soft">
          <li className="flex gap-3">
            <Icon name="pin" className="h-6 w-6 shrink-0 text-sky-dark" />
            <span>
              {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}
              <br />
              <span className="text-sm">Just south of I-10, on the road between Brookshire and Fulshear</span>
            </span>
          </li>
          <li className="flex gap-3">
            <Icon name="clock" className="h-6 w-6 shrink-0 text-sky-dark" />
            <span>
              {business.hours.display}
              <br />
              <span className="text-sm">Last wash at {business.hours.lastWash}</span>
            </span>
          </li>
          <li className="flex gap-3">
            <Icon name="phone" className="h-6 w-6 shrink-0 text-sky-dark" />
            <a href={business.phoneHref} className="font-semibold text-forest hover:text-sky-dark">{business.phone}</a>
          </li>
        </ul>
        <CtaButtons className="mt-7" dark={false} />
      </div>
    </div>
  );
}

/* ---------- Content sections (service/area/blog bodies) ---------- */
export function ContentBody({ sections }: { sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[] }) {
  return (
    <div className="prose-local">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
          {s.bullets && (
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

export function serviceCardText(s: Service) {
  return s.lead.split(". ")[0] + ".";
}
