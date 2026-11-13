# Brookshire Washateria & Cleaners — website

Marketing site for brookshirewashateria.com. Next.js 16 (App Router), TypeScript, Tailwind CSS 4, fully static.
Sister site: [frywashateria.com](https://www.frywashateria.com).

## Editing content (no local server needed)

All business facts live in `data/`. Edit a file on GitHub, commit, and Vercel rebuilds the site.

| File | What it controls |
| --- | --- |
| `data/business.ts` | Name, address, phone, email, hours, social links, Fry links |
| `data/pricing.ts` | Every price (regular + express) |
| `data/services.ts` | Service pages: copy, FAQs, which prices and areas show |
| `data/areas.ts` | Neighborhood pages: facts, directions, FAQs, Fry pickup link |
| `data/posts.ts` | Blog posts |

## Deploy on Vercel

1. vercel.com → Add New → Project → import `tuancaraballo/brookshire-washateria-website`.
2. Framework preset: Next.js. No environment variables needed. Deploy.
3. Every push to a branch gets a preview URL; pushes to `main` go live.
4. When ready to launch: Vercel → Settings → Domains → add `brookshirewashateria.com` and `www`, then update DNS as Vercel shows.
5. After launch: submit `https://brookshirewashateria.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Images

Put files in `public/images/` with these exact names. Until a file exists, the page shows a branded placeholder,
so you can add them one at a time. JPG or WebP, under 300 KB.

| File | Size | Used on |
| --- | --- | --- |
| hero-storefront.jpg | 1600×1200 | Home hero (real storefront photo preferred) |
| self-serve-washers.jpg | 1200×900 | Self-serve page |
| money-counter.jpg | 1200×900 | Home, money services (real photo preferred) |
| wash-fold-stack.jpg | 1200×900 | Wash & fold |
| comforter-hero.jpg | 1200×900 | Comforter cleaning |
| dry-cleaning-rack.jpg | 1200×900 | Dry cleaning |
| ironing-press.jpg | 1200×900 | Ironing & pressing |
| bulky-items.jpg | 1200×900 | Rugs & bulky items |
| alterations-sister.jpg | 1200×900 | Alterations |
| service-area-map.jpg | 1600×1000 | Service areas hub |
| og-default.jpg | 1200×630 | Social share preview + schema image |
| logo.png | 512×512 | Schema logo (header uses an icon until replaced) |

## Open items

- [ ] Self-serve washer/dryer prices (currently "posted on each machine")
- [ ] Express turnaround wording (`EXPRESS_NOTE` in `data/pricing.ts`)
- [ ] Confirm same-day drop-off cutoff time and comforter turnaround (copy in `data/services.ts`)
- [ ] Billers and phone carriers for the money services page
- [ ] CleanCloud fixes: Kids Shirt and Double Drapes express prices are below regular; Wedding Dress not Active
- [ ] Facebook URL (`business.social.facebook`)
- [ ] Add reciprocal link to Brookshire on frywashateria.com (footer + alterations page)
- [ ] Update Google Business Profile hours to 7am–9pm daily
