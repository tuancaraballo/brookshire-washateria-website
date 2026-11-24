import type { ContentSection } from "./services";

export type Post = {
  slug: string;
  title: string;
  metaDescription: string;
  date: string; // ISO
  excerpt: string;
  sections: ContentSection[];
  relatedServices: string[];
  // Cover photo in public/images (4:3), plus an optional 1200x630 crop used when the post is shared
  cover?: { file: string; alt: string; og?: string };
};

export const posts: Post[] = [
  {
    slug: "how-to-wash-a-king-comforter",
    cover: {
      file: "blog-king-comforter.jpg",
      alt: "Freshly cleaned white king comforter folded on the counter at Brookshire Washateria",
      og: "blog-king-comforter-og.jpg",
    },
    title: "How to Wash a King Comforter (and When to Let Us Do It)",
    metaDescription:
      "Step-by-step guide to washing a king comforter at a laundromat, how often to clean it, and when professional comforter cleaning in Brookshire or Fulshear makes more sense.",
    date: "2026-11-13",
    excerpt: "Most home washers are too small for a king comforter. Here's how to clean one properly at the laundromat, and when to hand it off.",
    sections: [
      {
        heading: "Why your home washer struggles",
        paragraphs: [
          "A king comforter needs room to move so water and detergent can reach the middle. Packed into a standard home washer it comes out with dry spots, leftover soap and lumpy fill, and it can strain the machine.",
          "A large-capacity front-load washer at a laundromat gives it that room.",
        ],
      },
      {
        heading: "Step by step at the laundromat",
        bullets: [
          "Check the care label. If it says dry clean only, or the comforter is down or silk, skip washing and have it dry cleaned.",
          "Choose a large-capacity washer and load the comforter loosely, alone.",
          "Use a small amount of mild detergent. Too much leaves residue in the fill.",
          "Pick a gentle or bulky cycle with warm or cool water and an extra rinse.",
          "Dry on low heat with a few dryer balls, and stop every 20–30 minutes to fluff and turn it.",
          "Make sure it's completely dry inside before folding, or it can smell musty.",
        ],
      },
      {
        heading: "How often should you clean a comforter?",
        paragraphs: [
          "Two to three times a year works for most homes. Clean it every season if you have pets, allergies or kids who snack in bed. Using a duvet cover means you can wash the cover often and the comforter less.",
        ],
      },
      {
        heading: "When it's worth letting us do it",
        paragraphs: [
          "If you don't want to spend two hours watching a dryer, drop it off. At Brookshire Washateria on FM 359, washed comforters are $25 for queen or twin and $30 for king, and dry cleaned comforters start at $20. We dry them all the way through so they come back fluffy.",
        ],
      },
    ],
    relatedServices: ["comforter-cleaning-brookshire-tx", "self-service-laundromat-brookshire-tx"],
  },
  {
    slug: "laundromat-vs-wash-and-fold",
    cover: {
      file: "blog-laundromat-or-wash-fold.jpg",
      alt: "Customer loading a washer at Brookshire Washateria next to a finished wash and fold order on the counter",
      og: "blog-laundromat-or-wash-fold-og.jpg",
    },
    title: "Laundromat or Wash & Fold? How to Choose for Your Household",
    metaDescription:
      "Self-serve laundromat or drop-off wash & fold at $1.50/lb? Compare time, cost and convenience for Brookshire, Sunterra and Fulshear families.",
    date: "2026-11-13",
    excerpt: "Doing it yourself saves money; dropping it off saves hours. Here's how to decide which fits your week.",
    sections: [
      {
        heading: "Self-serve: best when you have time",
        paragraphs: [
          "Washing in our machines costs less than drop-off service, and large-capacity washers let you finish several loads at once. Bring a book, use the free Wi-Fi, and you're done in about an hour.",
        ],
      },
      {
        heading: "Wash & fold: best when time is tight",
        paragraphs: [
          "Drop-off wash & fold is $1.50 per pound with same-day service. You spend five minutes at the counter instead of an hour or more washing, drying and folding. For busy parents and commuters, that time is often worth more than the difference in price.",
        ],
      },
      {
        heading: "A simple rule of thumb",
        bullets: [
          "Small, regular loads and a free afternoon: self-serve.",
          "A week of family laundry and a packed schedule: wash & fold.",
          "Comforters, rugs and pet beds: either use our large washers or drop them off for per-item cleaning.",
          "Work clothes that need to look sharp: dry cleaning or press-only service.",
        ],
      },
      {
        heading: "Mix and match",
        paragraphs: [
          "Many customers wash everyday clothes themselves and drop off bedding and dry cleaning on the same visit. We're open 7am to 9pm every day, with the last wash at 7:30pm.",
        ],
      },
    ],
    relatedServices: ["wash-and-fold-brookshire-tx", "self-service-laundromat-brookshire-tx"],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
