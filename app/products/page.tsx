import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export const metadata = { title: "Shop" };
export const revalidate = 60;

export default async function Shop() {
  const products = await getProducts();
  return (
    <section className="section">
      <div className="container">
        <h2>Shop</h2>
        <p className="lede">Browse all available loads.</p>
        <div className="grid">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
