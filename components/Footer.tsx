import Link from "next/link";
import Icon from "./Icon";
import { business, directionsUrl, sister } from "@/data/business";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="border-b border-white/10">
        <div className="container-site flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-white">
            <span className="font-semibold">Need pickup & delivery or alterations?</span> Visit our sister store,{" "}
            <a href={sister.url} className="font-semibold text-sun underline underline-offset-2 hover:text-white">
              Fry Washateria & Cleaners
            </a>{" "}
            in Katy, for laundry pickup and delivery across Katy and Fulshear and in-house alterations.
          </p>
          <a href={sister.url} className="btn-secondary shrink-0 text-sm">
            Visit frywashateria.com <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="container-site grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-white">{business.name}</p>
          <address className="mt-4 not-italic leading-relaxed">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </address>
          <p className="mt-3">
            <a href={business.phoneHref} className="font-semibold text-white hover:text-sun">
              {business.phone}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${business.email}`} className="hover:text-white">
              {business.email}
            </a>
          </p>
          <p className="mt-4 text-sm">
            <span className="font-semibold text-white">Hours:</span> {business.hours.display}
            <br />
            Last wash {business.hours.lastWash}
          </p>
          <a href={directionsUrl} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sun hover:text-white">
            <Icon name="pin" className="h-4 w-4" /> Get directions
          </a>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/money-transfer-bill-pay-brookshire-tx" className="hover:text-white">
                RIA Money Transfer & Bill Pay
              </Link>
            </li>
            <li>
              <Link href="/alterations-brookshire-tx" className="hover:text-white">
                Alterations
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                Price list
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Areas we serve</p>
          <ul className="mt-4 space-y-2 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="hover:text-white">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-white">Contact & directions</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
          <p className="mt-6 font-semibold text-white">Sister location</p>
          <p className="mt-2 text-sm leading-relaxed">
            <a href={sister.url} className="hover:text-white">{sister.name}</a>
            <br />
            {sister.address}
            <br />
            <a href={sister.phoneHref} className="hover:text-white">{sister.phone}</a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Laundromat, wash & fold and dry cleaners serving Brookshire, Fulshear and west Katy, TX.</p>
        </div>
      </div>
    </footer>
  );
}
