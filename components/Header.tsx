"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { business } from "@/data/business";

type NavService = { slug: string; name: string };

export default function Header({ services }: { services: NavService[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="hidden bg-forest-deep text-white/85 md:block">
        <div className="container-site flex items-center justify-between py-1.5 text-sm">
          <span>Open {business.hours.display} · Last wash {business.hours.lastWash}</span>
          <span>
            {business.address.street}, {business.address.city}, {business.address.state} · Se habla español
          </span>
        </div>
      </div>
      <div className="container-site flex items-center justify-between py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${business.name} home`}>
          <Image
            src="/images/logo-horizontal.png"
            alt={business.name}
            width={1169}
            height={300}
            priority
            sizes="(min-width: 768px) 234px, 195px"
            className="h-[50px] w-auto md:h-[60px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-ink lg:flex" aria-label="Main">
          <div className="group relative">
            <button className="flex items-center gap-1 py-2 hover:text-sky-dark" aria-haspopup="true">
              Services
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full w-64 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {services.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="block rounded-xl px-3 py-2 hover:bg-sky-light">
                  {s.name}
                </Link>
              ))}
              <Link href="/alterations-brookshire-tx" className="block rounded-xl px-3 py-2 hover:bg-sky-light">
                Alterations
              </Link>
            </div>
          </div>
          <Link href="/pricing" className="hover:text-sky-dark">Pricing</Link>
          <Link href="/money-transfer-bill-pay-brookshire-tx" className="hover:text-sky-dark">Money Services</Link>
          <Link href="/service-areas" className="hover:text-sky-dark">Areas We Serve</Link>
          <Link href="/blog" className="hover:text-sky-dark">Blog</Link>
          <Link href="/contact" className="hover:text-sky-dark">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.phoneHref} className="btn-dark hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            <Icon name="phone" className="h-4 w-4" /> {business.phone}
          </a>
          <button
            className="rounded-lg p-2 text-forest lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white lg:hidden" aria-label="Mobile">
          <div className="container-site grid gap-1 py-4 text-base">
            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-ink-soft">Services</p>
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-sky-light">
                {s.name}
              </Link>
            ))}
            <Link href="/alterations-brookshire-tx" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-sky-light">
              Alterations
            </Link>
            <hr className="my-2 border-line" />
            {[
              ["/pricing", "Pricing"],
              ["/money-transfer-bill-pay-brookshire-tx", "Money Transfer & Bill Pay"],
              ["/service-areas", "Areas We Serve"],
              ["/blog", "Blog"],
              ["/contact", "Contact & Directions"],
            ].map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 font-medium hover:bg-sky-light">
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
