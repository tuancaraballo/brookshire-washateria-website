// Single source of truth for NAP, hours and links.
// Every page, the footer and the JSON-LD read from this file, so they never disagree.
// Keep it identical to the Google Business Profile listing.

export const SITE_URL = "https://www.brookshirewashateria.com";

export const business = {
  name: "Brookshire Washateria & Cleaners",
  shortName: "Brookshire Washateria",
  tagline: "Laundromat, wash & fold and dry cleaners on FM 359",
  phone: "(281) 206-8251",
  phoneHref: "tel:+12812068251",
  email: "brookshirewashateria@outlook.com",
  address: {
    street: "418 FM 359",
    city: "Brookshire",
    state: "TX",
    zip: "77423",
    country: "US",
    county: "Waller County",
  },
  // Hours confirmed by the owner, Nov 2026.
  hours: {
    open: "07:00",
    close: "21:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    display: "7am – 9pm, 7 days a week",
    lastWash: "7:30pm",
  },
  priceRange: "$",
  mapsQuery: "Brookshire Washateria & Cleaners, 418 FM 359, Brookshire, TX 77423",
  social: {
    google: "https://share.google/oSgQnXTLHuYiYq3Mx", // Google Business Profile (owner's share link)
    yelp: "https://www.yelp.com/biz/brookshire-washateria-and-cleaners-brookshire",
    facebook: "", // TODO: add the Facebook page URL
  },
  stats: {
    googleRating: 4.0,
    googleReviewCount: 73,
    itemsCleaned: "11,500+",
  },
  amenities: [
    "Free high-speed Wi-Fi",
    "Secure, lit parking with 24/7 cameras",
    "Vending: $1 drinks and snacks",
    "Detergent, softener and bags for sale",
    "Attendant on site",
  ],
} as const;

export const sister = {
  name: "Fry Washateria & Cleaners",
  url: "https://www.frywashateria.com",
  alterationsUrl: "https://www.frywashateria.com/alterations-katy-tx",
  pickupUrl: "https://www.frywashateria.com/laundry-pickup-delivery-katy-tx",
  serviceAreasUrl: "https://www.frywashateria.com/service-areas",
  areaUrl: (slug: string) => `https://www.frywashateria.com/service-areas/${slug}`,
  address: "2501 North Fry Rd. Suite C, Katy, TX 77449",
  phone: "(281) 769-2203",
  phoneHref: "tel:+12817692203",
  hours: "7am – 9pm, 7 days a week",
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.mapsQuery,
)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;
