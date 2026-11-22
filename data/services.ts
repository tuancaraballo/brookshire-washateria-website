import type { PriceGroup } from "./pricing";
import { bulky, comfortersDryClean, comfortersWash, dryCleaning, ironing, selfServe, washFold } from "./pricing";

export type Faq = { q: string; a: string };

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  name: string; // short name for nav and cards
  icon: "washer" | "basket" | "bed" | "hanger" | "iron" | "rug";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  highlights: string[];
  image: { file: string; alt: string };
  sections: ContentSection[];
  priceGroups: PriceGroup[];
  showMachines?: boolean; // machine photo gallery (self-serve page)
  dropOff?: boolean; // shows the "items we can't accept" fine print
  gallery?: { title: string; intro?: string; images: { file: string; alt: string; portrait?: boolean; crop?: "top" | "bottom" }[] };
  faqs: Faq[];
  areaSlugs: string[]; // neighborhoods to link to
  schemaServiceType: string;
};

export const services: Service[] = [
  {
    slug: "self-service-laundromat-brookshire-tx",
    name: "Self-Serve Laundromat",
    icon: "washer",
    h1: "Self-Serve Laundromat in Brookshire, TX",
    metaTitle: "Self-Serve Laundromat in Brookshire, TX | Big Washers, Open 7–9",
    metaDescription:
      "Clean, attended self-service laundromat on FM 359 in Brookshire. Washers from $3.75, 60 lb machines for comforters, dryers 25¢ per 7 min. Open 7am–9pm daily.",
    lead:
      "Wash at your own pace in a clean, attended laundromat on FM 359. We're open 7am to 9pm every day (last wash at 7:30pm), with large-capacity machines that fit a week of family laundry or a king comforter in one load.",
    highlights: ["Washers from $3.75", "Dryers 25¢ / 7 min", "Open 7am–9pm, 7 days", "Free Wi-Fi"],
    image: { file: "self-serve-washers.jpg", alt: "Row of Huebsch front-load washers inside Brookshire Washateria on FM 359" },
    sections: [
      {
        heading: "A laundromat that's easy to use",
        paragraphs: [
          "Brookshire Washateria is a neighborhood laundromat for Brookshire, Fulshear, Sunterra, Jordan Ranch and the west Katy area. Bring your laundry, pick your machines and be done in about an hour.",
          "Our attendant keeps the store clean, the machines running and can help if you have a question. Washers run from $3.75 for a 20 lb machine to $6.75 for our 60 lb large-capacity washers, and dryers are 25¢ for 7 minutes.",
        ],
      },
      {
        heading: "What you'll find inside",
        bullets: [
          "Huebsch washers in four sizes: 20, 30, 40 and 60 lb, including large-capacity machines for bedding, rugs and big family loads",
          "A wall of regular and large-capacity stacked dryers so you're rarely waiting for one",
          "Folding tables and laundry carts",
          "Detergent, softener, bleach, dryer sheets and bags for sale at the counter",
          "Free high-speed Wi-Fi and $1 vending drinks and snacks",
          "Secure, lit parking with 24/7 camera surveillance",
        ],
      },
      {
        heading: "Do errands while you wash",
        paragraphs: [
          "While your clothes dry you can send money with RIA, pay bills or refill your phone at our counter, and drop off dry cleaning for next-day pickup.",
        ],
      },
      {
        heading: "Tips for a faster laundry day",
        bullets: [
          "Weekday mornings are usually the quietest time to visit.",
          "Use one large washer instead of two small ones for bulky loads; it's often cheaper and faster.",
          "Arrive by 7:30pm for your last wash so you have time to dry before we close at 9pm.",
          "Short on time? Drop it off and we'll wash, dry and fold it the same day for $1.50/lb.",
        ],
      },
    ],
    priceGroups: [selfServe],
    showMachines: true,
    faqs: [
      {
        q: "What are your laundromat hours?",
        a: "We're open 7am to 9pm, seven days a week. The last wash starts at 7:30pm so every load can finish drying before we close.",
      },
      {
        q: "How much do the washers and dryers cost?",
        a: "Washers are $3.75 for 20 lb (2 loads), $4.75 for 30 lb (3 loads), $5.75 for 40 lb (4 loads) and $6.75 for our 60 lb large-capacity machines (6 loads). Dryers are $0.25 for 7 minutes; a full 35-minute cycle is about $1.25 and dries most loads.",
      },
      {
        q: "Can I wash a king comforter in your machines?",
        a: "Yes. Our 60 lb large-capacity washers ($6.75) fit king comforters, sleeping bags and small rugs. If you'd rather not wait, we'll clean it for you starting at $25.",
      },
      {
        q: "Do you sell detergent?",
        a: "Yes. Tide, Gain, Downy, Suavitel, Clorox, Foca, Roma and more are available at the counter, along with laundry bags.",
      },
      {
        q: "Is there Wi-Fi and parking?",
        a: "Free high-speed Wi-Fi is available, and our parking lot is lit and monitored by cameras 24/7.",
      },
      {
        q: "Is there an attendant?",
        a: "Yes, an attendant is on site to keep the store clean and help with machines, drop-off orders, dry cleaning and our money services counter.",
      },
    ],
    areaSlugs: ["brookshire", "sunterra", "bluestem", "freeman-ranch"],
    schemaServiceType: "Self-service laundromat",
  },
  {
    slug: "wash-and-fold-brookshire-tx",
    dropOff: true,
    name: "Wash & Fold",
    icon: "basket",
    h1: "Same-Day Wash & Fold in Brookshire, TX",
    metaTitle: "Same-Day Wash & Fold Laundry Service, $1.50/lb | Brookshire, TX",
    metaDescription:
      "Drop off your laundry on FM 359 and pick it up washed, dried and folded the same day for $1.50/lb. Serving Brookshire, Fulshear, Tamarron and Jordan Ranch.",
    lead:
      "Drop off your laundry in the morning and pick it up clean, dried and neatly folded the same day. Wash & fold is $1.50 per pound with no sign-up and no subscription.",
    highlights: ["$1.50/lb", "Same-day service", "Folded and bagged", "No sign-up needed"],
    image: { file: "wash-fold-stack.jpg", alt: "Wash and fold order bagged and ready for pickup next to a stack of folded clothes and towels at Brookshire Washateria" },
    sections: [
      {
        heading: "How drop-off laundry works",
        bullets: [
          "Bring your laundry to 418 FM 359 any day between 7am and 9pm.",
          "We weigh it in front of you and give you a ticket.",
          "We sort, wash, dry and fold everything, and hang items on request ($1 per hanger).",
          "Pick it up the same day, ready to put away.",
        ],
        paragraphs: ["Drop off early in the day for same-day pickup. Orders dropped late are ready the next morning."],
      },
      {
        heading: "Who uses wash & fold",
        paragraphs: [
          "Busy families in Jordan Ranch, Tamarron and Sunterra, commuters on I-10, and anyone who would rather spend the weekend doing something else. It's also a simple way to handle laundry after a move, a trip or a new baby.",
          "Already washed at home? Folding only is $1.00 per pound.",
        ],
      },
      {
        heading: "Prefer pickup and delivery?",
        paragraphs: [
          "Our sister store, Fry Washateria & Cleaners in Katy, picks up and delivers laundry across Katy and Fulshear neighborhoods. Brookshire is a drop-off location.",
        ],
      },
    ],
    priceGroups: [washFold],
    gallery: {
      title: "Real orders from our store",
      intro: "Every order is washed, dried, folded by hand and bagged at our counter on FM 359. These are actual customer orders, ready for pickup.",
      images: [
        { file: "wash-fold-real-stacks.jpg", alt: "A finished wash and fold order: jeans, shirts and sweaters folded in neat stacks with socks rolled, on the folding counter at Brookshire Washateria" },
        { file: "wash-fold-real-shirts.jpg", alt: "Folded towels, shirts and jeans from a wash and fold order at Brookshire Washateria", portrait: true, crop: "bottom" },
        { file: "wash-fold-real-bag.jpg", alt: "Wash and fold order bagged and tagged for pickup in front of the detergent shelf at Brookshire Washateria", portrait: true },
      ],
    },
    faqs: [
      { q: "How much is wash and fold?", a: "$1.50 per pound, weighed at drop-off. Folding only is $1.00 per pound and hangers are $1 each." },
      {
        q: "Is it really same-day?",
        a: "Yes. Laundry dropped off earlier in the day is ready the same day. Late drop-offs are ready the next morning.",
      },
      { q: "Is there a minimum?", a: "Yes, wash & fold has a 10 lb minimum ($15 at $1.50/lb). Above that, you pay for what your laundry weighs on our scale." },
      { q: "Is there anything you can't accept?", a: "Yes. For the safety of our staff, we can't accept clothes or bedding soiled with blood, feces or any other biohazard or contaminant. We may decline or return any order that poses a health or safety risk." },
      {
        q: "Can I request a detergent or special care?",
        a: "Yes. Tell us at drop-off if you want a particular detergent, no softener, or items hung instead of folded.",
      },
      {
        q: "Do you pick up and deliver from Brookshire?",
        a: "Brookshire is a drop-off store. For pickup and delivery, our sister location Fry Washateria & Cleaners serves Katy and Fulshear neighborhoods.",
      },
      {
        q: "Can I add comforters to my wash & fold order?",
        a: "Yes. Comforters and bedding are priced per item (from $25 for queen or twin) and can be dropped off with your laundry.",
      },
    ],
    areaSlugs: ["jordan-ranch", "tamarron", "sunterra", "fulshear"],
    schemaServiceType: "Wash and fold laundry service",
  },
  {
    slug: "comforter-cleaning-brookshire-tx",
    dropOff: true,
    name: "Comforter Cleaning",
    icon: "bed",
    h1: "Comforter & Bedding Cleaning in Brookshire, Near Fulshear",
    metaTitle: "Comforter Cleaning in Brookshire & Fulshear, TX | From $25",
    metaDescription:
      "Professional comforter, duvet, blanket and pillow cleaning on FM 359. Washed from $25 or dry cleaned from $20. Serving Fulshear, Tamarron, Cross Creek Ranch and Weston Lakes.",
    lead:
      "Home washers are too small for most comforters. We clean queen and king comforters, duvets, blankets, pillows and mattress covers in large-capacity machines, then dry them all the way through so they come back fluffy and fresh.",
    highlights: ["Washed from $25", "Dry cleaned from $20", "King & extra-heavy sizes", "Pillows & mattress covers too"],
    image: { file: "comforter-hero.jpg", alt: "Freshly cleaned white comforter, pillows and folded blanket on the counter at Brookshire Washateria" },
    sections: [
      {
        heading: "Washed or dry cleaned: which is right?",
        paragraphs: [
          "Most cotton and polyester comforters are best washed in our large machines and dried slowly on low heat. Down, silk and anything labeled \"dry clean only\" goes through our dry cleaning service instead.",
          "Not sure? Bring it in. We'll read the care label and recommend the right option before we start.",
        ],
      },
      {
        heading: "Everything for the bedroom",
        bullets: [
          "Comforters: twin, queen, king and extra-heavy",
          "Duvets and duvet covers",
          "Blankets and throws",
          "Pillows from small to XL",
          "Mattress covers and pads",
          "Sleeping bags",
        ],
      },
      {
        heading: "When to clean your comforter",
        paragraphs: [
          "Plan on cleaning comforters two to three times a year, and every season if you have pets or allergies. Many Fulshear and Katy families bring bedding in during spring cleaning and again when they switch to heavier bedding in the fall.",
        ],
      },
      {
        heading: "Do it yourself in our big washers",
        paragraphs: [
          "Prefer to do it yourself? Our large-capacity self-serve washers fit a king comforter. Use a gentle cycle, then dry on low with a few dryer balls until completely dry.",
        ],
      },
    ],
    priceGroups: [comfortersWash, comfortersDryClean],
    faqs: [
      {
        q: "How much does comforter cleaning cost?",
        a: "Washed comforters are $25 for queen or twin and $30 for king ($30/$35 for extra-heavy). Dry cleaned comforters are $20 twin, $30 queen and $40 king.",
      },
      { q: "How long does it take?", a: "Most comforters are ready the next day. Express service is available for dry cleaned bedding." },
      {
        q: "Can you clean a down comforter?",
        a: "Yes. Down and \"dry clean only\" comforters go through our dry cleaning service so the fill stays lofty.",
      },
      { q: "Do you clean pillows?", a: "Yes, from $4 for small pillows up to $12 for XL pillows." },
      {
        q: "Is there comforter cleaning near Fulshear?",
        a: "Yes. We're on FM 359 in Brookshire, the main road between Brookshire and Fulshear, so it's an easy drop-off for Fulshear, Cross Creek Ranch, Fulbrook and Weston Lakes.",
      },
      {
        q: "Can I wash my comforter myself?",
        a: "Yes. Our large-capacity self-serve washers fit king comforters. Ask the attendant which machine to use.",
      },
    ],
    areaSlugs: ["fulshear", "cross-creek-ranch", "weston-lakes", "tamarron"],
    schemaServiceType: "Comforter and bedding cleaning",
  },
  {
    slug: "dry-cleaning-brookshire-tx",
    dropOff: true,
    name: "Dry Cleaning",
    icon: "hanger",
    h1: "Next-Day Dry Cleaners in Brookshire, TX",
    metaTitle: "Dry Cleaners in Brookshire, TX | Next-Day, Near Fulshear & Katy",
    metaDescription:
      "Next-day dry cleaning on FM 359: shirts $2.25, suits $10.50, dresses from $8. Express service available. Convenient for Fulshear, Jordan Ranch, Tamarron and I-10 commuters.",
    lead:
      "Professional dry cleaning and pressing for suits, shirts, dresses, coats and household items, ready the next day. Shirts start at $2.25 and two-piece suits at $10.50, with express service when you need it sooner.",
    highlights: ["Next-day ready", "Express available", "Shirts $2.25", "Suits $10.50"],
    image: { file: "dry-cleaning-rack.jpg", alt: "Pressed dress shirts and a suit jacket in clear garment bags on a rack, with folded slacks, at Brookshire Washateria & Cleaners" },
    sections: [
      {
        heading: "What we dry clean",
        bullets: [
          "Work clothes: shirts, blouses, pants, skirts, sweaters and ties",
          "Suits, jackets and vests",
          "Dresses, from everyday to formal and wedding gowns",
          "Coats, leather jackets and school letter jackets",
          "Uniforms, graduation gowns and lab coats",
          "Home items: drapes, tablecloths, pillow cases and duvet covers",
        ],
      },
      {
        heading: "Convenient for Fulshear and I-10 commuters",
        paragraphs: [
          "We're on FM 359 between I-10 and Fulshear, so you can drop off on the way to work and pick up on the way home. We're open 7am to 9pm every day, so early and late drop-offs are easy.",
        ],
      },
      {
        heading: "Spot and stain care",
        paragraphs: [
          "Point out stains when you drop off and tell us what caused them if you know. The sooner a stain comes in, the better the result. If something isn't right, ask and we'll redo it.",
        ],
      },
      {
        heading: "Need alterations too?",
        paragraphs: [
          "Hems, buttons and repairs are handled at our sister location, Fry Washateria & Cleaners on North Fry Road in Katy.",
        ],
      },
    ],
    priceGroups: [dryCleaning],
    faqs: [
      { q: "How long does dry cleaning take?", a: "Regular dry cleaning is ready the next day. Express service is available for an added charge." },
      {
        q: "How much does it cost to dry clean a shirt or suit?",
        a: "Shirts are $2.25, polos and blouses $3.25, pants $4.50, and a two-piece suit is $10.50. See the full price list for every item.",
      },
      { q: "Do you clean wedding dresses?", a: "Yes. Wedding dress cleaning is $85, or $95 with express service." },
      { q: "Do you clean leather?", a: "Yes, leather jackets are $45 ($55 express)." },
      {
        q: "Do you offer alterations?",
        a: "Alterations are offered at our sister location, Fry Washateria & Cleaners, 2501 North Fry Rd. Suite C, Katy.",
      },
      {
        q: "Is there a dry cleaner near Fulshear or Jordan Ranch?",
        a: "Yes. We're on FM 359 in Brookshire, a short drive from Fulshear, Jordan Ranch and Tamarron, and open 7am to 9pm every day.",
      },
    ],
    areaSlugs: ["fulshear", "jordan-ranch", "fulbrook", "cross-creek-ranch"],
    schemaServiceType: "Dry cleaning",
  },
  {
    slug: "ironing-pressing-brookshire-tx",
    dropOff: true,
    name: "Ironing & Pressing",
    icon: "iron",
    h1: "Ironing & Pressing Service in Brookshire, TX",
    metaTitle: "Ironing & Pressing Service in Brookshire, TX | Planchado de Ropa",
    metaDescription:
      "Professional pressing and hand ironing on FM 359 in Brookshire. Shirts pressed from $2.50, hand ironing $3.50. Planchado de ropa a mano. Open 7am–9pm daily.",
    lead:
      "Skip the ironing board. Bring clean clothes and we'll press them crisp, from $2.50 for a shirt or blouse. Delicate pieces get careful hand ironing (planchado a mano) for $3.50.",
    highlights: ["Shirts from $2.50", "Hand ironing $3.50", "Express available", "Se habla español"],
    image: { file: "ironing-press.jpg", alt: "Crisply pressed dress shirts folded and on a hanger next to a steam iron at Brookshire Washateria" },
    sections: [
      {
        heading: "Pressing or hand ironing?",
        paragraphs: [
          "Press-only service uses professional steam pressing equipment and is ideal for dress shirts, slacks and uniforms. Hand ironing is done piece by piece for delicate fabrics, embellished items and clothes you want finished with extra care.",
          "Need the clothes cleaned too? Choose dry cleaning, which includes pressing, or add your items to a wash & fold order.",
        ],
      },
      {
        heading: "Good for",
        bullets: [
          "Work shirts and uniforms for the week",
          "Church, school and event outfits",
          "Clothes that came out of a suitcase wrinkled",
          "Linen and cotton that wrinkles easily",
          "Tablecloths and napkins before a party",
        ],
      },
      {
        heading: "Planchado de ropa en Brookshire",
        paragraphs: [
          "Ofrecemos planchado a mano y planchado a vapor para camisas, blusas, pantalones y vestidos. Atendemos en español.",
        ],
      },
    ],
    priceGroups: [ironing],
    faqs: [
      { q: "How much is ironing?", a: "Press-only shirts and blouses are $2.50, other garments $3.00, dresses $4.00, and hand ironing is $3.50 per piece." },
      { q: "Do the clothes need to be clean?", a: "Yes. Pressing is for clean clothes. For dirty items choose dry cleaning, which includes pressing." },
      { q: "How fast can I get my clothes back?", a: "Most pressing is ready the next day. Express pressing is available for a small added charge." },
      { q: "¿Hacen planchado a mano?", a: "Sí. El planchado a mano cuesta $3.50 por pieza. Atendemos en español." },
    ],
    areaSlugs: ["brookshire", "jordan-ranch", "fulshear", "polo-ranch"],
    schemaServiceType: "Ironing and pressing",
  },
  {
    slug: "rug-cleaning-brookshire-tx",
    dropOff: true,
    name: "Rugs & Bulky Items",
    icon: "rug",
    h1: "Rug, Pet Bed & Bulky Item Cleaning in Brookshire, TX",
    metaTitle: "Rug, Pet Bed & Bulky Item Cleaning | Brookshire, TX",
    metaDescription:
      "Washable area rugs, bath rugs, pet beds, sleeping bags and patio cushion covers cleaned on FM 359 in Brookshire. Bath rugs from $4, pet beds from $15.",
    lead:
      "Area rugs, bath mats, pet beds and patio cushion covers are too big or too dirty for a home washer. Drop them off and we'll clean them in our large-capacity machines.",
    highlights: ["Bath rugs from $4", "Pet beds from $15", "Area rugs from $25", "Patio covers $20"],
    image: { file: "bulky-items.jpg", alt: "Clean rolled rug, pet bed and folded blankets on the counter at Brookshire Washateria" },
    sections: [
      {
        heading: "What we clean",
        bullets: [
          "Washable area rugs (small, medium and large)",
          "Bathroom rugs and mats",
          "Pet beds up to XL",
          "Sleeping bags",
          "Sofa and patio cushion covers",
          "Horse blankets",
        ],
      },
      {
        heading: "Pet owners welcome",
        paragraphs: [
          "Pet beds collect hair, dirt and odor fast. We wash them in dedicated large machines so they come back clean and fresh. Shake off loose hair before drop-off for the best result.",
        ],
      },
      {
        heading: "What we can't take",
        paragraphs: [
          "Wall-to-wall carpet, rugs with rubber backing that is breaking down, and hand-knotted or antique rugs need a specialist rug cleaner. If you're unsure, bring it in and ask.",
        ],
      },
    ],
    priceGroups: [bulky],
    faqs: [
      { q: "How much does rug cleaning cost?", a: "Bathroom rugs are $4–$8 and washable area rugs are $25 small, $35 medium and $50 large." },
      { q: "Do you wash pet beds?", a: "Yes. Pet beds are $15 small, $25 large and $30 XL." },
      { q: "Can I wash a rug myself?", a: "Small washable rugs fit in our large-capacity self-serve washers. Ask the attendant which machine to use." },
    ],
    areaSlugs: ["brookshire", "sunterra", "weston-lakes", "fulbrook"],
    schemaServiceType: "Rug and bulky item cleaning",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
