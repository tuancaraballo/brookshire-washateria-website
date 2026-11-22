// Prices copied from the CleanCloud "Default Price List" (owner screenshots, Nov 2026).
// regular = Price column, express = Price Express column. Update here and every page follows.

export type PriceItem = {
  name: string;
  es?: string; // Spanish label shown as a secondary line
  regular: number;
  express?: number;
  unit?: "lb" | "item" | "piece";
  priceLabel?: string; // overrides the formatted price, e.g. "$0.25 / 7 min"
  note?: string; // small secondary line under the item name
};

export type PriceGroup = {
  id: string;
  title: string;
  description?: string;
  showExpress?: boolean;
  items: PriceItem[];
};

export const PRICES_UPDATED = "November 2026";

// Wording shown next to the Express column. TODO: confirm express turnaround with the owner.
export const EXPRESS_NOTE = "Express = rush service. Ask at the counter for today's express turnaround.";

// Self-serve machine prices (owner, Nov 2026). Machine photos live in data/machines.ts.
export const selfServe: PriceGroup = {
  id: "self-serve",
  title: "Self-serve washers & dryers",
  description: "Pick the washer size that fits your load. Dryers are shared by all washer sizes.",
  items: [
    { name: "20 lb washer (2 loads)", es: "Lavadora de 20 lb", regular: 3.75 },
    { name: "30 lb washer (3 loads)", es: "Lavadora de 30 lb", regular: 4.75 },
    { name: "40 lb washer (4 loads)", es: "Lavadora de 40 lb", regular: 5.75 },
    { name: "60 lb washer (6 loads, large capacity)", es: "Lavadora de 60 lb", regular: 6.75 },
    {
      name: "Dryers",
      es: "Secadoras",
      regular: 0.25,
      priceLabel: "$0.25 / 7 min",
      note: "A full 35-minute cycle (about $1.25) dries most loads",
    },
  ],
};

export const washFold: PriceGroup = {
  id: "wash-fold",
  title: "Wash & fold (drop-off laundry)",
  description: "Same-day service. Priced by weight on our scale, 10 lb minimum.",
  items: [
    { name: "Wash, dry & fold", es: "Lavado y doblado", regular: 1.5, unit: "lb" },
    { name: "Folding only", es: "Solo doblado", regular: 1.0, unit: "lb" },
    { name: "Hangers", es: "Ganchos", regular: 1.0, unit: "item" },
  ],
};

export const comfortersWash: PriceGroup = {
  id: "comforters-wash",
  title: "Comforters & bedding (washed)",
  description: "Washed, dried and folded in our large-capacity machines.",
  items: [
    { name: "Comforter – Queen or Twin", es: "Edredón – Queen/Twin", regular: 25 },
    { name: "Comforter – King", es: "Edredón – King", regular: 30 },
    { name: "Comforter – Queen or Twin (extra heavy)", regular: 30 },
    { name: "Comforter – King (extra heavy)", regular: 35 },
    { name: "Blanket – Queen or Twin", es: "Cobija – Queen/Twin", regular: 15 },
    { name: "Blanket – King", es: "Cobija – King", regular: 18 },
    { name: "Mattress cover – Twin", regular: 20 },
    { name: "Mattress cover – Queen", regular: 25 },
    { name: "Mattress cover – King", regular: 35 },
    { name: "Pillow – Small", es: "Almohada", regular: 4 },
    { name: "Pillow – Queen", regular: 8 },
    { name: "Pillow – King", regular: 10 },
    { name: "Pillow – XL", regular: 12 },
    { name: "Sleeping bag – Small", regular: 15 },
    { name: "Sleeping bag – Large", regular: 20 },
    { name: "Horse blanket", es: "Basto de caballo", regular: 15 },
  ],
};

export const comfortersDryClean: PriceGroup = {
  id: "comforters-dry-clean",
  title: "Comforters & duvets (dry cleaned)",
  description: "For down, silk or 'dry clean only' bedding.",
  showExpress: true,
  items: [
    { name: "Comforter – Twin", regular: 20, express: 23 },
    { name: "Comforter – Queen", regular: 30, express: 35 },
    { name: "Comforter – King", regular: 40, express: 48 },
    { name: "Duvet cover – King", regular: 25, express: 25 },
  ],
};

export const bulky: PriceGroup = {
  id: "rugs-bulky",
  title: "Rugs, pet beds & bulky items",
  items: [
    { name: "Bathroom rug – Small", es: "Tapete de baño", regular: 4 },
    { name: "Bathroom rug – Medium", regular: 6 },
    { name: "Bathroom rug – Large", regular: 8 },
    { name: "Rug – Small", es: "Alfombra", regular: 25 },
    { name: "Rug – Medium", regular: 35 },
    { name: "Rug – Large", regular: 50 },
    { name: "Pet bed – Small", es: "Cama de mascota", regular: 15 },
    { name: "Pet bed – Large", regular: 25 },
    { name: "Pet bed – XL", regular: 30 },
    { name: "Sofa / patio cushion covers", regular: 20 },
  ],
};

export const dryCleaning: PriceGroup = {
  id: "dry-cleaning",
  title: "Dry cleaning",
  description: "Professional dry cleaning and pressing, ready next day.",
  showExpress: true,
  items: [
    { name: "Shirt", es: "Camisa", regular: 2.25, express: 4.25 },
    { name: "Polo shirt", regular: 3.25, express: 5.25 },
    { name: "Blouse", es: "Blusa", regular: 3.25, express: 5.25 },
    { name: "Pants / jeans", es: "Pantalón", regular: 4.5, express: 6.5 },
    { name: "Shorts", regular: 3.0, express: 4.5 },
    { name: "Skirt – short", regular: 4.5, express: 6.5 },
    { name: "Skirt – long", regular: 6.0, express: 8.0 },
    { name: "Sweater", regular: 4.5, express: 6.5 },
    { name: "Vest", regular: 4.0, express: 6.0 },
    { name: "Tie", regular: 3.0, express: 4.25 },
    { name: "Scarf", regular: 4.0, express: 5.5 },
    { name: "Long scarf / shawl", es: "Pañuelo largo", regular: 5.0, express: 5.0 },
    { name: "Hat", regular: 5.0, express: 7.0 },
    { name: "Jacket", regular: 6.5, express: 8.5 },
    { name: "Suit – 2 piece", es: "Traje de 2 piezas", regular: 10.5, express: 12.5 },
    { name: "Suit – 3 piece", es: "Traje de 3 piezas", regular: 13.5, express: 15.5 },
    { name: "Kids suit – 2 piece", regular: 9.0, express: 9.0 },
    { name: "Dress – plain", es: "Vestido sencillo", regular: 8.0, express: 10.0 },
    { name: "Dress – fancy", es: "Vestido de fiesta", regular: 15.0, express: 18.0 },
    { name: "Wedding dress", es: "Vestido de novia", regular: 85.0, express: 95.0 },
    { name: "Jumpsuit", regular: 12.0, express: 14.0 },
    { name: "Coat – short", es: "Abrigo corto", regular: 12.0, express: 14.0 },
    { name: "Coat – long", es: "Abrigo largo", regular: 15.0, express: 17.0 },
    { name: "Leather jacket", es: "Chaqueta de piel", regular: 45.0, express: 55.0 },
    { name: "School / letter jacket", regular: 40.0, express: 48.0 },
    { name: "School / letter jacket – small", regular: 20.0, express: 23.0 },
    { name: "Graduation gown", regular: 9.0, express: 11.0 },
    { name: "Doctor's / lab gown", regular: 6.0, express: 8.0 },
    { name: "Apron", regular: 2.5, express: 4.0 },
    { name: "Kids shirt", regular: 2.75 }, // TODO: express shows $1.50 in CleanCloud (below regular) – confirm
    { name: "Kids pants", regular: 4.0, express: 4.0 },
    { name: "Kids dress", regular: 5.0, express: 7.5 },
    { name: "Drapes", es: "Cortinas", regular: 15.0, express: 17.0 },
    { name: "Double drapes", regular: 25.0 }, // TODO: express shows $23 in CleanCloud (below regular) – confirm
    { name: "Tablecloth – Small", es: "Mantel", regular: 8.0, express: 10.0 },
    { name: "Tablecloth – Medium", regular: 10.0, express: 12.0 },
    { name: "Tablecloth – Large", regular: 14.0, express: 16.0 },
    { name: "Pillow case – Regular", regular: 4.0, express: 5.5 },
    { name: "Pillow case – Large", regular: 5.0, express: 7.0 },
  ],
};

export const ironing: PriceGroup = {
  id: "ironing",
  title: "Ironing & pressing",
  description: "Pressing only – no cleaning. Bring clean garments.",
  showExpress: true,
  items: [
    { name: "Press only – shirt or blouse", es: "Planchado – camisa/blusa", regular: 2.5, express: 3.5 },
    { name: "Press only – other garments", es: "Planchado", regular: 3.0, express: 4.75 },
    { name: "Press only – dress", es: "Planchado – vestido", regular: 4.0, express: 5.75 },
    { name: "Hand ironing", es: "Planchado a mano", regular: 3.5, express: 5.5 },
  ],
};

export const allPriceGroups: PriceGroup[] = [
  selfServe,
  washFold,
  comfortersWash,
  comfortersDryClean,
  bulky,
  dryCleaning,
  ironing,
];

export function formatPrice(item: Pick<PriceItem, "regular" | "unit" | "priceLabel">, value = item.regular): string {
  if (item.priceLabel && value === item.regular) return item.priceLabel;
  const amount = `$${value.toFixed(2)}`;
  return item.unit === "lb" ? `${amount}/lb` : amount;
}

export function lowestPrice(group: PriceGroup): number {
  return Math.min(...group.items.map((i) => i.regular));
}
