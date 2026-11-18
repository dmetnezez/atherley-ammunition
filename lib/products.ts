import type { Product } from "./types";
import { localProducts } from "./local-products";
import { fetchShopifyProducts, shopifyEnabled } from "./shopify";

// The rest of the site only ever calls these two functions.
// Shopify turns on automatically when the env vars are set.

export async function getProducts(): Promise<Product[]> {
  if (shopifyEnabled) {
    try {
      return await fetchShopifyProducts();
    } catch (err) {
      console.error(err);
    }
  }
  return localProducts;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((p) => p.handle === handle);
}

export function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency }).format(amount);
}
