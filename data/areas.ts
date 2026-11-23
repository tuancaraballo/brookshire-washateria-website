import type { Faq } from "./services";

// Neighborhood landing pages. Facts here come from public sources (builder / HAR / RCLCO pages,
// listed in `sources`). Keep each page's copy unique – don't clone one area into another.
// Fry Washateria owns "pickup & delivery" for these areas; Brookshire pages target
// walk-in laundromat, drop-off and dry cleaning searches and link to Fry for delivery.

export type Area = {
  slug: string;
  name: string;
  tier: 1 | 2;
  kind: "city" | "community" | "towns";
  locality: string; // city/ZIP line shown on the page
  metaTitle: string;
  metaDescription: string;
  lead: string;
  about: string[];
  gettingHere: string;
  popularServices: string[]; // service slugs
  faqs: Faq[];
  nearby: string[]; // area slugs
  frySlug?: string; // matching Fry pickup page, if one exists
  image?: { file: string; alt: string; crop?: "top" | "bottom" | "left" | "right" }; // hero photo in public/images
  sources: { label: string; url: string }[];
};

export const areas: Area[] = [
  {
    slug: "fulshear",
    name: "Fulshear",
    tier: 1,
    kind: "city",
    locality: "Fulshear, TX 77441 · Fort Bend County",
    metaTitle: "Laundromat & Dry Cleaners Near Fulshear, TX | Brookshire Washateria",
    metaDescription:
      "Dry cleaning, comforter cleaning and same-day wash & fold near Fulshear, a straight drive up FM 359. Open 7am–9pm daily. Serving Cross Creek Ranch, Fulbrook and Weston Lakes.",
    lead:
      "Fulshear households are a straight drive up FM 359 from our store. Drop off dry cleaning, comforters and wash & fold on the way to I-10, or wash in our large-capacity self-serve machines any day from 7am to 9pm.",
    about: [
      "Fulshear has grown from a small Fort Bend County town into one of the Houston area's most sought-after places to live, with award-winning master-planned communities such as Cross Creek Ranch and Weston Lakes, along with Fulbrook on Fulshear Creek, Fulshear Run, Polo Ranch and parts of Firethorne.",
      "Many Fulshear families commute toward Katy and Houston on I-10. Our store on FM 359 sits between Fulshear and the I-10 on-ramp, which makes it an easy morning drop-off and evening pickup.",
    ],
    gettingHere:
      "Head north on FM 359 from Fulshear toward Brookshire. We're at 418 FM 359, on the Brookshire end of the road before I-10.",
    popularServices: ["dry-cleaning-brookshire-tx", "comforter-cleaning-brookshire-tx", "wash-and-fold-brookshire-tx"],
    faqs: [
      {
        q: "Is there a dry cleaner near Fulshear?",
        a: "Yes. Brookshire Washateria & Cleaners is on FM 359, the main road between Fulshear and Brookshire, with next-day dry cleaning and express service.",
      },
      {
        q: "Where can I get a comforter cleaned near Fulshear?",
        a: "Drop it off at 418 FM 359. Washed comforters start at $25 and dry cleaned comforters at $20.",
      },
      {
        q: "Do you deliver to Fulshear?",
        a: "Brookshire is a drop-off store. Our sister location, Fry Washateria & Cleaners, offers laundry pickup and delivery in Fulshear.",
      },
      { q: "What are your hours?", a: "7am to 9pm, seven days a week. Last wash at 7:30pm." },
    ],
    nearby: ["cross-creek-ranch", "fulbrook", "fulshear-run", "weston-lakes", "polo-ranch"],
    sources: [
      { label: "HoustonProperties: Fulshear guide", url: "https://houstonproperties.com/houston-neighborhoods/fulshear" },
      { label: "HAR: Fulshear 77441 neighborhoods", url: "https://www.har.com/zipcode_77441/neighborhoods" },
    ],
  },
  {
    slug: "tamarron",
    image: { file: "brookshire_washateria_service_areas_tamarron.jpg", alt: "Tamarron entrance monument with fountain and cypress trees", crop: "left" },
    name: "Tamarron",
    tier: 1,
    kind: "community",
    locality: "Fulshear / Katy area, TX 77441",
    metaTitle: "Laundromat & Dry Cleaners Near Tamarron | Brookshire Washateria",
    metaDescription:
      "Same-day wash & fold, comforter cleaning and next-day dry cleaning near Tamarron. Large self-serve washers, open 7am–9pm daily on FM 359 in Brookshire.",
    lead:
      "Big Tamarron households generate big laundry piles. Drop off wash & fold for same-day pickup, bring comforters and bedding we'll clean for you, or knock out everything at once in our large-capacity washers.",
    about: [
      "Tamarron is one of the Katy area's newest master-planned communities and one of Houston's top-selling, with more than 4,000 new homes planned. It sits in Lamar CISD, with amenity centers, lakes and trails.",
      "With so many young families in Tamarron, comforters, kids' sports uniforms and school clothes are among the most common things residents bring us.",
    ],
    gettingHere:
      "Set your GPS to 418 FM 359, Brookshire. We're just south of I-10 on FM 359, the road that connects Brookshire and Fulshear, with free, lit parking.",
    popularServices: ["wash-and-fold-brookshire-tx", "comforter-cleaning-brookshire-tx", "self-service-laundromat-brookshire-tx"],
    faqs: [
      {
        q: "Is there a laundromat near Tamarron?",
        a: "Yes. Brookshire Washateria on FM 359 is a full-service laundromat with large-capacity washers, open 7am to 9pm every day.",
      },
      {
        q: "Can I drop off laundry instead of washing it myself?",
        a: "Yes. Drop-off wash & fold is $1.50 per pound with same-day service.",
      },
      {
        q: "Is there laundry pickup in Tamarron?",
        a: "Yes, through our sister store, Fry Washateria & Cleaners, which offers pickup and delivery in Tamarron.",
      },
      {
        q: "Do you clean kids' sports uniforms?",
        a: "Yes. Add them to a wash & fold order, or bring them in for dry cleaning if the label requires it.",
      },
    ],
    nearby: ["jordan-ranch", "fulshear", "cross-creek-ranch", "polo-ranch"],
    frySlug: "tamarron",
    sources: [
      {
        label: "By Jo & Co: Houston MPC sales",
        url: "https://byjoandco.com/2024/01/23/houston-leads-the-way-in-master-planned-community-home-sales/",
      },
      {
        label: "MyNeighborhoodNews: Top-selling MPCs of 2025",
        url: "https://myneighborhoodnews.com/top-selling-master-planned-communities-of-2025-houston-area-leads-nation-with-sunterra-tamarron-bridgeland-and-more",
      },
    ],
  },
  {
    slug: "jordan-ranch",
    image: { file: "brookshire_washateria_service_areas_jordan-ranch.jpg", alt: "Jordan Ranch entrance monument with the JR logo and Fulshear Texas lettering" },
    name: "Jordan Ranch",
    tier: 1,
    kind: "community",
    locality: "Brookshire, TX 77423 · near Fulshear",
    metaTitle: "Laundromat & Dry Cleaners Near Jordan Ranch | Brookshire, TX",
    metaDescription:
      "The closest laundromat and dry cleaners to Jordan Ranch. Next-day dry cleaning, same-day wash & fold, comforters and ironing on FM 359. Open 7am–9pm daily.",
    lead:
      "Jordan Ranch shares our Brookshire ZIP code, so we're one of the closest laundromats and dry cleaners to home. Drop off dry cleaning, ironing and wash & fold, or wash in our big machines any day from 7am to 9pm.",
    about: [
      "Jordan Ranch is a 1,350-acre master-planned community by Johnson Development, south of I-10 between Brookshire and Fulshear. Homes here carry a Brookshire address, and the community is known for The Shed amenity center with its lazy river.",
      "Students attend Lamar CISD schools including Willie Melton Sr. Elementary, Leaman Junior High and Fulshear High School.",
    ],
    gettingHere:
      "Set your GPS to 418 FM 359, Brookshire. We're just south of I-10 on FM 359, the road that connects Brookshire and Fulshear, with free, lit parking.",
    popularServices: ["dry-cleaning-brookshire-tx", "ironing-pressing-brookshire-tx", "wash-and-fold-brookshire-tx"],
    faqs: [
      {
        q: "What's the closest dry cleaner to Jordan Ranch?",
        a: "Brookshire Washateria & Cleaners at 418 FM 359 offers next-day dry cleaning and express service, a short drive from Jordan Ranch.",
      },
      { q: "Do you do ironing only?", a: "Yes. Press-only shirts are $2.50 and hand ironing is $3.50 per piece." },
      {
        q: "Is there pickup and delivery in Jordan Ranch?",
        a: "Yes, through our sister store, Fry Washateria & Cleaners.",
      },
      { q: "When are you open?", a: "7am to 9pm every day, with the last wash at 7:30pm." },
    ],
    nearby: ["tamarron", "fulshear", "sunterra", "cross-creek-ranch"],
    frySlug: "jordan-ranch",
    sources: [
      { label: "HoustonProperties: Jordan Ranch", url: "https://houstonproperties.com/houston-neighborhoods/jordan-ranch/homes-for-sale" },
      { label: "By Jo & Co: Jordan Ranch", url: "https://byjoandco.com/2022/02/10/jordan-ranch-brookshire-tx-neighborhood/" },
      {
        label: "David Weekley Homes: Jordan Ranch schools",
        url: "https://www.davidweekleyhomes.com/new-homes/tx/houston/fulshear/jordan-ranch-45-homesites",
      },
    ],
  },
  {
    slug: "cross-creek-ranch",
    image: { file: "brookshire_washateria_service_areas_cross-creek-ranch.jpg", alt: "Cross Creek Ranch entrance arches and lit water feature at dusk in Fulshear" },
    name: "Cross Creek Ranch",
    tier: 1,
    kind: "community",
    locality: "Fulshear, TX 77441",
    metaTitle: "Dry Cleaners & Comforter Cleaning Near Cross Creek Ranch | Fulshear",
    metaDescription:
      "Next-day dry cleaning, comforter and duvet cleaning, and same-day wash & fold for Cross Creek Ranch residents. On FM 359 in Brookshire, open 7am–9pm daily.",
    lead:
      "Cross Creek Ranch residents use us for suits and work clothes, comforters and duvets, drapes and table linens. We're on FM 359 and open 7am to 9pm every day.",
    about: [
      "Cross Creek Ranch is an award-winning 3,200-acre master-planned community in Fulshear developed by Johnson Development, with more than 45 miles of trails and about 650 acres of lakes and green space.",
      "Larger homes mean more bedding, drapes and table linens to care for, which is exactly what our comforter cleaning and dry cleaning services handle.",
    ],
    gettingHere: "From Cross Creek Ranch, drive into Fulshear and take FM 359 north toward Brookshire to 418 FM 359.",
    popularServices: ["dry-cleaning-brookshire-tx", "comforter-cleaning-brookshire-tx", "ironing-pressing-brookshire-tx"],
    faqs: [
      {
        q: "Do you clean drapes and tablecloths?",
        a: "Yes. Drapes are $15 ($25 for double drapes) and tablecloths are $8–$14 depending on size.",
      },
      {
        q: "Can you clean a king duvet or down comforter?",
        a: "Yes. Dry cleaned king comforters are $40 and king duvet covers are $25.",
      },
      {
        q: "Is there laundry pickup in Cross Creek Ranch?",
        a: "Yes, through our sister store, Fry Washateria & Cleaners.",
      },
    ],
    nearby: ["fulshear", "fulbrook", "tamarron", "weston-lakes"],
    frySlug: "cross-creek-ranch",
    sources: [
      {
        label: "By Jo & Co: Fulshear master-planned communities",
        url: "https://byjoandco.com/2023/12/07/where-you-should-live-if-you-want-to-live-in-fulshear-in-a-master-planned-community/",
      },
      { label: "HAR: Why move to Fulshear", url: "https://www.har.com/blog_111321_why-move-to-fulshear-texas-small-town-charm-with-big-city-convenience" },
    ],
  },
  {
    slug: "fulbrook",
    image: { file: "brookshire_washateria_service_areas_fulbrook.jpg", alt: "Fulbrook on Fulshear Creek entrance sign with clock tower" },
    name: "Fulbrook on Fulshear Creek",
    tier: 1,
    kind: "community",
    locality: "Fulshear, TX 77441",
    metaTitle: "Dry Cleaners Near Fulbrook on Fulshear Creek | Brookshire Washateria",
    metaDescription:
      "Careful dry cleaning, wedding and formal wear, drapes, comforters and hand ironing near Fulbrook on Fulshear Creek. FM 359, Brookshire. Open 7am–9pm daily.",
    lead:
      "For Fulbrook homeowners we handle the pieces that need care: formal wear, leather, drapes, duvets and hand ironing, all next day with express available.",
    about: [
      "Fulbrook on Fulshear Creek is one of Fulshear's most established luxury neighborhoods, with large homes on generous lots that reflect the town's original small-town, country feel.",
      "Our most-requested services from Fulbrook residents are dry cleaning for formal and leather pieces, drapes and table linens, and comforter and duvet cleaning.",
    ],
    gettingHere: "From Fulbrook, head into Fulshear and take FM 359 north to Brookshire. We're at 418 FM 359.",
    popularServices: ["dry-cleaning-brookshire-tx", "comforter-cleaning-brookshire-tx", "ironing-pressing-brookshire-tx"],
    faqs: [
      { q: "Do you clean formal and wedding dresses?", a: "Yes. Fancy dresses are $15 and wedding dresses $85, with express available." },
      { q: "Do you dry clean leather?", a: "Yes, leather jackets are $45 ($55 express)." },
      {
        q: "Do you offer alterations?",
        a: "Alterations are offered at our sister store, Fry Washateria & Cleaners on North Fry Road in Katy.",
      },
    ],
    nearby: ["fulshear", "cross-creek-ranch", "fulshear-run", "weston-lakes", "polo-ranch"],
    frySlug: "fulbrook-on-fulshear-creek",
    sources: [
      { label: "HAR: Fulshear 77441 neighborhoods", url: "https://www.har.com/zipcode_77441/neighborhoods" },
      { label: "Homes.com: Fulshear local guide", url: "https://homes.com/local-guide/fulshear-tx" },
    ],
  },
  {
    slug: "fulshear-run",
    name: "Fulshear Run",
    tier: 1,
    kind: "community",
    locality: "Fulshear, TX 77441 / 77406",
    image: { file: "brookshire_washateria_service_areas_fulshear-run.jpg", alt: "Fulshear Run entrance monument with stone wall and pergola in Fulshear" },
    metaTitle: "Dry Cleaners & Rug Cleaning Near Fulshear Run | Brookshire Washateria",
    metaDescription:
      "Dry cleaning, comforter and rug cleaning, and same-day wash & fold near Fulshear Run. A short drive from downtown Fulshear up FM 359. Open 7am–9pm daily.",
    lead:
      "Fulshear Run homes sit on big lots under old trees, and that means rugs, outdoor cushions, bedding and plenty of work clothes. Bring them to us on FM 359, any day from 7am to 9pm.",
    about: [
      "Fulshear Run is a small master-planned neighborhood off FM 1093 and Bois d'Arc, tucked between Fulshear City Hall and downtown. It's known for half-acre to one-acre-plus homesites, mature pecan and oak trees, walking trails and fishing lakes.",
      "Large homes on acreage bring plenty of household cleaning: area rugs, patio cushion covers, king comforters and drapes, along with dry cleaning for the work week.",
    ],
    gettingHere: "From Fulshear Run, head into downtown Fulshear and take FM 359 north toward Brookshire. We're at 418 FM 359.",
    popularServices: ["rug-cleaning-brookshire-tx", "comforter-cleaning-brookshire-tx", "dry-cleaning-brookshire-tx"],
    faqs: [
      {
        q: "Can you clean outdoor cushion covers and area rugs?",
        a: "Yes. Sofa and patio cushion covers are $20 each, and washable area rugs are $25–$50 depending on size.",
      },
      {
        q: "How far is your store from Fulshear Run?",
        a: "We're a straight drive from downtown Fulshear up FM 359 to Brookshire, with no highway needed.",
      },
      {
        q: "Is there laundry pickup in Fulshear Run?",
        a: "Yes, through our sister store, Fry Washateria & Cleaners, which offers pickup and delivery in Fulshear Run.",
      },
    ],
    nearby: ["fulshear", "fulbrook", "cross-creek-ranch", "weston-lakes"],
    frySlug: "fulshear-run",
    sources: [
      { label: "Houston Chronicle: Fulshear Run features half-acre sites", url: "https://www.pressreader.com/usa/houston-chronicle-sunday/20170723/283497911106050" },
      { label: "HAR: Fulshear Run listing (location)", url: "https://www-v2.har.com/web/BenevidesAssociates/sold_detail/28173987" },
    ],
  },
  {
    slug: "weston-lakes",
    image: { file: "brookshire_washateria_service_areas_weston-lakes.jpg", alt: "Brick home on the lake with crape myrtles in bloom in Weston Lakes" },
    name: "Weston Lakes",
    tier: 1,
    kind: "community",
    locality: "Fulshear area, TX",
    metaTitle: "Dry Cleaners & Laundry Near Weston Lakes, TX | Brookshire Washateria",
    metaDescription:
      "Dry cleaning, comforter and rug cleaning, and same-day wash & fold near Weston Lakes. Brookshire Washateria on FM 359 is open 7am–9pm every day.",
    lead:
      "Weston Lakes residents bring us golf and club wear, suits, comforters, rugs and household linens. Drop off any day from 7am to 9pm.",
    about: [
      "Weston Lakes is a guard-gated country-club community near Fulshear, set among mature trees, lakes and a golf course, with custom homes on large lots.",
      "Spacious homes and outdoor living mean plenty of bedding, rugs and patio cushion covers, all of which we clean in our large-capacity machines.",
    ],
    gettingHere: "From Weston Lakes, drive to Fulshear and continue north on FM 359 to 418 FM 359 in Brookshire.",
    popularServices: ["dry-cleaning-brookshire-tx", "comforter-cleaning-brookshire-tx", "rug-cleaning-brookshire-tx"],
    faqs: [
      { q: "Do you clean patio cushion covers?", a: "Yes. Sofa and patio cushion covers are $20 each." },
      { q: "Do you clean area rugs?", a: "Washable area rugs are $25–$50 depending on size." },
      { q: "Do you deliver to Weston Lakes?", a: "Pickup and delivery is offered by our sister store, Fry Washateria & Cleaners." },
    ],
    nearby: ["fulshear", "fulbrook", "cross-creek-ranch", "polo-ranch"],
    frySlug: "weston-lakes",
    sources: [
      {
        label: "By Jo & Co: Guard-gated neighborhoods in Fulshear",
        url: "https://byjoandco.com/2025/12/26/the-best-manned-guard-gated-neighborhoods-in-fulshear-texas-2025-your-move-to-fulshear-guide/",
      },
    ],
  },
  {
    slug: "brookshire",
    name: "Brookshire",
    tier: 2,
    kind: "city",
    locality: "Brookshire, TX 77423 · Waller County",
    metaTitle: "Laundromat in Brookshire, TX | Wash & Fold, Dry Cleaning, RIA",
    metaDescription:
      "Brookshire's neighborhood laundromat on FM 359: self-serve washers, same-day wash & fold, dry cleaning, RIA money transfer, bill pay and phone refills. Open 7am–9pm daily.",
    lead:
      "We're Brookshire's hometown laundromat and cleaners on FM 359. Wash, drop off, dry clean, send money and pay bills, all in one stop, 7am to 9pm every day.",
    about: [
      "Brookshire is a Waller County city on I-10 west of Katy. The 2020 Census counted about 5,000 residents, and the area is growing fast with new communities such as Sunterra, Jordan Ranch and Bluestem.",
      "Families come to us for big self-serve washers, same-day wash & fold, and our counter services: RIA money transfer, bill pay and phone refills.",
    ],
    gettingHere:
      "From I-10, take the FM 359 exit and head south. We're at 418 FM 359 with free, lit parking.",
    popularServices: [
      "self-service-laundromat-brookshire-tx",
      "wash-and-fold-brookshire-tx",
      "ironing-pressing-brookshire-tx",
    ],
    faqs: [
      { q: "Where is the laundromat in Brookshire?", a: "418 FM 359, Brookshire, TX 77423, just south of I-10." },
      {
        q: "Can I send money or pay bills there?",
        a: "Yes. We offer RIA money transfer, bill pay and phone refills at the counter during store hours.",
      },
      { q: "¿Hablan español?", a: "Sí, atendemos en español." },
    ],
    nearby: ["sunterra", "bluestem", "freeman-ranch", "jordan-ranch"],
    sources: [
      {
        label: "Community Impact: New Brookshire communities",
        url: "https://editions.communityimpact.com/view/938563190/11/",
      },
    ],
  },
  {
    slug: "sunterra",
    name: "Sunterra",
    tier: 2,
    kind: "community",
    locality: "Brookshire / Katy, TX 77423",
    metaTitle: "Laundromat Near Sunterra, TX | Big Washers & Same-Day Wash & Fold",
    metaDescription:
      "Large-capacity self-serve washers, same-day wash & fold at $1.50/lb and dry cleaning near Sunterra. Brookshire Washateria on FM 359, open 7am–9pm daily.",
    lead:
      "Sunterra families use our large-capacity washers to do a week of laundry in one visit, or drop it off for same-day wash & fold. Open 7am to 9pm every day.",
    about: [
      "Sunterra is a 1,463-acre master-planned community in Brookshire, north of I-10 and west of the Grand Parkway in Waller County, and one of Houston's top-selling communities.",
      "Its lakes, trails and family amenities attract lots of young families, which means lots of towels, swimsuits, bedding and kids' clothes.",
    ],
    gettingHere: "From Sunterra, take I-10 west to the FM 359 exit in Brookshire and head south to 418 FM 359.",
    popularServices: [
      "self-service-laundromat-brookshire-tx",
      "wash-and-fold-brookshire-tx",
      "comforter-cleaning-brookshire-tx",
    ],
    faqs: [
      { q: "Is there a laundromat near Sunterra?", a: "Yes. Brookshire Washateria is a short drive west on I-10 at 418 FM 359." },
      { q: "How much is drop-off laundry?", a: "$1.50 per pound, washed, dried and folded the same day." },
      { q: "Do you have big washers for comforters?", a: "Yes, our large-capacity washers fit king comforters." },
    ],
    nearby: ["brookshire", "freeman-ranch", "bluestem", "jordan-ranch"],
    sources: [
      { label: "Zillow: Sunterra Lakes", url: "https://www.zillow.com/community/sunterra-lakes/31878220_plid/" },
      {
        label: "MyNeighborhoodNews: Top-selling MPCs of 2025",
        url: "https://myneighborhoodnews.com/top-selling-master-planned-communities-of-2025-houston-area-leads-nation-with-sunterra-tamarron-bridgeland-and-more",
      },
    ],
  },
  {
    slug: "freeman-ranch",
    name: "Freeman Ranch",
    tier: 2,
    kind: "community",
    locality: "Katy / Brookshire, TX",
    metaTitle: "Laundromat Near Freeman Ranch | Brookshire Washateria",
    metaDescription:
      "Self-serve laundromat, same-day wash & fold and dry cleaning near Freeman Ranch. Brookshire Washateria on FM 359, open 7am–9pm daily.",
    lead:
      "Freeman Ranch residents are just a few minutes from our store. Wash in our large machines, or drop off laundry and dry cleaning on your way past.",
    about: [
      "Freeman Ranch is a newer single-family community near I-10 and TX-99 (Grand Parkway), built by Lennar and LGI Homes, with a splash park, trails and playgrounds.",
      "New homeowners often bring us move-in laundry: curtains, rugs, bedding and everything that came out of storage.",
    ],
    gettingHere: "From Freeman Ranch, take I-10 west to the FM 359 exit in Brookshire and head south to 418 FM 359.",
    popularServices: ["self-service-laundromat-brookshire-tx", "wash-and-fold-brookshire-tx", "rug-cleaning-brookshire-tx"],
    faqs: [
      { q: "Is there a laundromat near Freeman Ranch?", a: "Yes, Brookshire Washateria at 418 FM 359, open 7am to 9pm every day." },
      { q: "Can you clean curtains and rugs after a move?", a: "Yes. Drapes start at $15 and washable rugs at $25." },
    ],
    nearby: ["sunterra", "bluestem", "brookshire", "jordan-ranch"],
    sources: [
      { label: "Lennar: Freeman Ranch", url: "https://www.lennar.com/new-homes/texas/houston/katy/freeman-ranch" },
      { label: "Homes.com: Freeman Ranch", url: "https://www.homes.com/property/ramsey-plan-freeman-ranch/77w092p85l8mv" },
    ],
  },
  {
    slug: "bluestem",
    name: "Bluestem",
    tier: 2,
    kind: "community",
    locality: "Brookshire, TX 77423",
    metaTitle: "Laundromat Near Bluestem, Brookshire TX | Wash & Fold, Money Transfer",
    metaDescription:
      "Laundromat, same-day wash & fold, dry cleaning, RIA money transfer and bill pay near Bluestem in Brookshire. Open 7am–9pm daily on FM 359.",
    lead:
      "Bluestem residents can wash, drop off laundry, pick up dry cleaning and handle money transfers and bills at our counter, all in one stop on FM 359.",
    about: [
      "Bluestem is a new Brookshire community near I-10, US-90 and the Grand Parkway, with walking trails, ponds and green space, close to Katy Mills and Typhoon Texas.",
      "It's a short drive to our store, where you can do laundry and errands in one trip.",
    ],
    gettingHere: "From Bluestem, head toward I-10 and FM 359 in Brookshire. We're at 418 FM 359, just south of the freeway.",
    popularServices: ["self-service-laundromat-brookshire-tx", "wash-and-fold-brookshire-tx", "dry-cleaning-brookshire-tx"],
    faqs: [
      { q: "Is there a laundromat near Bluestem?", a: "Yes, Brookshire Washateria at 418 FM 359." },
      { q: "Can I pay bills at the laundromat?", a: "Yes. We offer bill pay, RIA money transfer and phone refills during store hours." },
    ],
    nearby: ["brookshire", "sunterra", "freeman-ranch", "jordan-ranch"],
    sources: [
      { label: "Trulia: Bluestem", url: "https://www.trulia.com/builder-community/bluestem--31414987" },
      { label: "MyNeighborhoodNews: About Bluestem", url: "https://myneighborhoodnews.com/bluestem-about-bluestem" },
    ],
  },
  {
    slug: "polo-ranch",
    name: "Polo Ranch",
    tier: 2,
    kind: "community",
    locality: "Fulshear, TX 77441",
    metaTitle: "Laundromat & Dry Cleaners Near Polo Ranch, Fulshear",
    metaDescription:
      "Same-day wash & fold, comforter cleaning, dry cleaning and ironing near Polo Ranch in Fulshear. Brookshire Washateria on FM 359, open 7am–9pm daily.",
    lead:
      "Polo Ranch families can drop off wash & fold, comforters and dry cleaning on FM 359, or wash in our large machines any day from 7am to 9pm.",
    about: [
      "Polo Ranch is a newer Fulshear community spanning more than 300 acres, one of the area's more affordable new-home options.",
      "Busy households here use our same-day wash & fold and next-day ironing to get the week's laundry off their list.",
    ],
    gettingHere: "From Polo Ranch, drive into Fulshear and take FM 359 north to Brookshire. We're at 418 FM 359.",
    popularServices: ["wash-and-fold-brookshire-tx", "comforter-cleaning-brookshire-tx", "ironing-pressing-brookshire-tx"],
    faqs: [
      { q: "How much is wash & fold?", a: "$1.50 per pound with same-day service." },
      { q: "Do you iron school and work uniforms?", a: "Yes. Press-only shirts are $2.50 and other garments $3.00." },
    ],
    nearby: ["fulshear", "cross-creek-ranch", "fulbrook", "weston-lakes"],
    sources: [
      { label: "HAR: Why move to Fulshear", url: "https://www.har.com/blog_111321_why-move-to-fulshear-texas-small-town-charm-with-big-city-convenience" },
    ],
  },
  {
    slug: "simonton-pattison-san-felipe-waller",
    name: "Simonton, Pattison, San Felipe & Waller",
    tier: 2,
    kind: "towns",
    locality: "Waller, Fort Bend and Austin Counties, TX",
    metaTitle: "Laundromat Near Simonton, Pattison, San Felipe & Waller, TX",
    metaDescription:
      "The nearest full-service laundromat and dry cleaners for Simonton, Pattison, San Felipe and Waller. Big washers, same-day wash & fold, RIA and bill pay on FM 359 in Brookshire.",
    lead:
      "If you live out in the country around Brookshire, we're your closest full-service laundromat: big washers, same-day wash & fold, dry cleaning and money services in one stop.",
    about: [
      "Simonton, Pattison, San Felipe and Waller are small communities around Brookshire with few laundromats of their own. Many residents make one trip to town for groceries and laundry together.",
      "Our large-capacity washers handle farm and ranch loads, horse blankets ($15 drop-off) and work clothes, and the store is open 7am to 9pm every day.",
    ],
    gettingHere:
      "Set your GPS to 418 FM 359, Brookshire. We're just south of I-10 at the FM 359 exit, so it's an easy stop on a trip into town.",
    popularServices: ["self-service-laundromat-brookshire-tx", "wash-and-fold-brookshire-tx", "rug-cleaning-brookshire-tx"],
    faqs: [
      { q: "Do you clean horse blankets?", a: "Yes. Horse blankets (basto de caballo) are $15 each for drop-off cleaning." },
      { q: "What are your hours?", a: "7am to 9pm every day, last wash at 7:30pm." },
    ],
    nearby: ["brookshire", "sunterra", "fulshear", "jordan-ranch"],
    sources: [],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
