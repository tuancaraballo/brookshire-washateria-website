// Self-serve machines shown on the laundromat page. Prices come from data/pricing.ts (selfServe).
export type Machine = {
  name: string;
  capacity: string;
  price: string;
  bestFor: string;
  image: { file: string; alt: string };
};

export const washers: Machine[] = [
  {
    name: "20 lb washer",
    capacity: "2 loads",
    price: "$3.75",
    bestFor: "Everyday clothes and a couple of towel loads",
    image: { file: "self-serve-washers.jpg", alt: "Row of 20 lb Huebsch front-load washers at Brookshire Washateria" },
  },
  {
    name: "30 lb washer",
    capacity: "3 loads",
    price: "$4.75",
    bestFor: "A week of family laundry or sheets and towels",
    image: { file: "washer-30lb.jpg", alt: "30 lb Huebsch washers next to the detergent shelf at Brookshire Washateria" },
  },
  {
    name: "40 lb washer",
    capacity: "4 loads",
    price: "$5.75",
    bestFor: "Queen comforters, blankets and big mixed loads",
    image: { file: "washer-40lb.jpg", alt: "40 lb Huebsch washers at Brookshire Washateria" },
  },
  {
    name: "60 lb washer",
    capacity: "6 loads, large capacity",
    price: "$6.75",
    bestFor: "King comforters, sleeping bags and small washable rugs",
    image: { file: "washer-60lb.jpg", alt: "Large-capacity 60 lb Huebsch washers at Brookshire Washateria" },
  },
];

export const dryers = {
  price: "$0.25 per 7 minutes",
  typical: "A full 35-minute cycle is about $1.25 and dries most loads.",
  images: [
    { file: "dryers-large.jpg", alt: "Wall of Huebsch dryers including large-capacity stacked dryers at Brookshire Washateria" },
    { file: "dryers-stacked.jpg", alt: "Rows of stacked Huebsch dryers with laundry carts and folding table" },
  ],
};
