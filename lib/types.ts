export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  caliber: string;
  price: number;
  currency: string;
  available: boolean;
  image?: string;
  /** Shopify checkout or product URL. Empty while using local data. */
  checkoutUrl?: string;
};
