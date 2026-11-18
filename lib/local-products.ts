import type { Product } from "./types";

// Placeholder catalogue. Replace with your real products and pricing,
// or set the Shopify env vars and this file is no longer used.
export const localProducts: Product[] = [
  {
    id: "local-1",
    handle: "9mm-fmj-50",
    title: "9mm FMJ, 115 gr",
    description: "Range-grade full metal jacket. Box of 50.",
    caliber: "9mm",
    price: 24.99,
    currency: "CAD",
    available: true,
  },
  {
    id: "local-2",
    handle: "223-rem-fmj-20",
    title: ".223 Rem FMJ, 55 gr",
    description: "Consistent, clean-burning target ammunition. Box of 20.",
    caliber: ".223 Rem",
    price: 21.99,
    currency: "CAD",
    available: true,
  },
  {
    id: "local-3",
    handle: "12ga-birdshot-25",
    title: "12 Gauge Birdshot, #7.5",
    description: "2 3/4 inch field load for clays and small game. Box of 25.",
    caliber: "12 gauge",
    price: 17.99,
    currency: "CAD",
    available: false,
  },
  {
    id: "local-4",
    handle: "308-win-soft-point-20",
    title: ".308 Win Soft Point, 150 gr",
    description: "Dependable hunting load. Box of 20.",
    caliber: ".308 Win",
    price: 39.99,
    currency: "CAD",
    available: true,
  },
];
