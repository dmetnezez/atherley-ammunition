import type { Product } from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

export const shopifyEnabled = Boolean(domain && token);

const QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      nodes {
        id
        handle
        title
        description
        onlineStoreUrl
        availableForSale
        productType
        featuredImage { url }
        priceRange { minVariantPrice { amount currencyCode } }
      }
    }
  }
`;

type ShopifyNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  onlineStoreUrl: string | null;
  availableForSale: boolean;
  productType: string;
  featuredImage: { url: string } | null;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
};

export async function fetchShopifyProducts(): Promise<Product[]> {
  const res = await fetch(`https://${domain}/api/2024-10/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token as string,
    },
    body: JSON.stringify({ query: QUERY, variables: { first: 50 } }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Shopify request failed: ${res.status}`);
  const json = await res.json();
  const nodes: ShopifyNode[] = json.data.products.nodes;

  return nodes.map((n) => ({
    id: n.id,
    handle: n.handle,
    title: n.title,
    description: n.description,
    caliber: n.productType || "Ammunition",
    price: parseFloat(n.priceRange.minVariantPrice.amount),
    currency: n.priceRange.minVariantPrice.currencyCode,
    available: n.availableForSale,
    image: n.featuredImage?.url,
    checkoutUrl: n.onlineStoreUrl ?? `https://${domain}/products/${n.handle}`,
  }));
}
