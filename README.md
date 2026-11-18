# Atherley Ammunition

Next.js site with a forest green theme, ready for Vercel.

## Run locally

    npm install
    npm run dev

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, click Add New > Project and import the repo.
3. Leave the defaults and deploy.

## Adding Shopify later

Products come from `lib/products.ts`. It uses the placeholder list in
`lib/local-products.ts` until these two env vars exist:

- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_TOKEN`

Add them in Vercel under Project Settings > Environment Variables, redeploy,
and the shop pages pull live products from Shopify. "Buy now" then sends
customers to your Shopify checkout. No page code needs to change.

To get a token: in Shopify admin, create a custom app, enable the Storefront API
with product read access, and copy the Storefront access token.

## Before you go live

Ammunition sales are regulated and payment processors and Shopify have their own
rules for it. Check Shopify's and your payment provider's policies, and add your
own licensing, shipping and age verification terms.
