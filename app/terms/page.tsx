import { PageHero } from "@/components/blocks";
import { business } from "@/data/business";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Service | Brookshire Washateria & Cleaners",
  description: "Terms for using the Brookshire Washateria & Cleaners website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" lead="Last updated November 2026." crumbs={[{ name: "Terms" }]} />
      <section className="py-14">
        <div className="container-site prose-local max-w-3xl">
          <h2>Prices</h2>
          <p>
            Prices on this website are provided for convenience and may change. The price posted in store or quoted at drop-off
            applies to your order.
          </p>
          <h2>Garment care</h2>
          <p>
            We follow care labels and industry practice. Please point out stains, damage, loose buttons and special
            instructions at drop-off, and check pockets before leaving items with us.
          </p>
          <h2>Self-serve laundromat</h2>
          <p>
            Customers using self-serve machines are responsible for their belongings and for following posted machine
            instructions. Please don't leave laundry unattended.
          </p>
          <h2>Contact</h2>
          <p>
            {business.name} · {business.address.street}, {business.address.city}, {business.address.state} · {business.phone}
          </p>
        </div>
      </section>
    </>
  );
}
