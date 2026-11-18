import type { Product } from "./types";

// Placeholder catalogue (9mm and 5.56 only).
// To change a price, edit the `price` number below, commit, and Vercel redeploys.
// Once Shopify is connected, prices come from Shopify instead and this file is unused.
export const localProducts: Product[] = [
  {
    id: "local-1",
    handle: "9mm-fmj-115-50",
    title: "9mm FMJ, 115 gr, 50 rounds",
    description: "Range-grade full metal jacket. Made in Canada.",
    caliber: "9mm",
    price: 24.99,
    currency: "CAD",
    available: true,
  },
  {
    id: "local-2",
    handle: "9mm-fmj-115-250",
    title: "9mm FMJ, 115 gr, 250 rounds",
    description: "Bulk pack for the range. Made in Canada.",
    caliber: "9mm",
    price: 114.99,
    currency: "CAD",
    available: true,
  },
  {
    id: "local-3",
    handle: "556-fmj-55-20",
    title: "5.56 FMJ, 55 gr, 20 rounds",
    description: "Consistent, clean-burning target ammunition. Made in Canada.",
    caliber: "5.56",
    price: 21.99,
    currency: "CAD",
    available: true,
  },
  {
    id: "local-4",
    handle: "556-fmj-55-100",
    title: "5.56 FMJ, 55 gr, 100 rounds",
    description: "Value pack for regular shooters. Made in Canada.",
    caliber: "5.56",
    price: 99.99,
    currency: "CAD",
    available: true,
  },
];
