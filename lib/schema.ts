import { business, SITE_URL, sister, fullAddress } from "@/data/business";
import { areas } from "@/data/areas";
import type { Faq, Service } from "@/data/services";
import type { PriceGroup } from "@/data/pricing";

const BUSINESS_ID = `${SITE_URL}/#business`;
const ORG_ID = `${SITE_URL}/#organization`;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.address.street,
  addressLocality: business.address.city,
  addressRegion: business.address.state,
  postalCode: business.address.zip,
  addressCountry: business.address.country,
};

export function localBusinessSchema() {
  const sameAs = Object.values(business.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": ["LaundryService", "DryCleaningOrLaundry"],
    "@id": BUSINESS_ID,
    name: business.name,
    url: SITE_URL,
    telephone: business.phone,
    email: business.email,
    image: `${SITE_URL}/images/og-default.jpg`,
    logo: `${SITE_URL}/images/logo.png`,
    priceRange: business.priceRange,
    address: postalAddress,
    hasMap: business.mapsUrl,
    geo: { "@type": "GeoCoordinates", latitude: business.geo.latitude, longitude: business.geo.longitude },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: business.hours.days,
        opens: business.hours.open,
        closes: business.hours.close,
      },
    ],
    areaServed: [
      ...new Set(["Brookshire, TX", "Fulshear, TX", "Katy, TX", ...areas.filter((a) => a.kind === "community").map((a) => a.name)]),
    ].map((name) => ({ "@type": "Place", name })),
    knowsLanguage: ["en", "es"],
    amenityFeature: business.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    makesOffer: [
      offer("Self-service laundromat"),
      offer("Same-day wash and fold"),
      offer("Dry cleaning"),
      offer("Comforter cleaning"),
      offer("Ironing and pressing"),
      offer("RIA money transfer"),
      offer("Bill payment"),
      offer("Prepaid phone refills"),
    ],
    parentOrganization: { "@id": ORG_ID },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

function offer(name: string) {
  return { "@type": "Offer", itemOffered: { "@type": "Service", name } };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Fry Washateria & Brookshire Washateria",
    url: SITE_URL,
    subOrganization: [
      { "@id": BUSINESS_ID },
      {
        "@type": ["LaundryService", "DryCleaningOrLaundry"],
        name: sister.name,
        url: sister.url,
        telephone: sister.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2501 North Fry Rd. Suite C",
          addressLocality: "Katy",
          addressRegion: "TX",
          postalCode: "77449",
          addressCountry: "US",
        },
      },
    ],
  };
}

export function serviceSchema(service: Pick<Service, "name" | "schemaServiceType" | "metaDescription">, path: string, groups: PriceGroup[] = []) {
  const offers = groups.flatMap((g) =>
    g.items.slice(0, 12).map((item) => ({
      "@type": "Offer",
      name: item.priceLabel ? `${item.name} (${item.priceLabel})` : item.name,
      price: item.regular.toFixed(2),
      priceCurrency: "USD",
      ...(item.unit === "lb"
        ? { priceSpecification: { "@type": "UnitPriceSpecification", price: item.regular.toFixed(2), priceCurrency: "USD", unitCode: "LBR" } }
        : {}),
    })),
  );
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.schemaServiceType,
    description: service.metaDescription,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: ["Brookshire, TX", "Fulshear, TX", "Katy, TX"].map((name) => ({ "@type": "Place", name })),
    ...(offers.length ? { offers } : {}),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
