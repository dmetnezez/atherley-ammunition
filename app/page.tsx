import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = (await getProducts()).slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Atherley Ammunition</div>
          <h1>Built for the range. Ready for the field.</h1>
          <p>Consistent, dependable ammunition for shooters who care about what they put downrange.</p>
          <Link href="/products" className="btn btn-brass">Shop ammunition</Link>
          <Link href="/about" className="btn btn-ghost">Our story</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured</h2>
          <p className="lede">A few of our most popular loads.</p>
          <div className="grid">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2>Why Atherley</h2>
          <p className="lede">Three things we will not compromise on.</p>
          <div className="values">
            <div className="value"><h3>Consistency</h3><p>Every box performs like the last one.</p></div>
            <div className="value"><h3>Quality control</h3><p>Components and finished rounds are inspected before they ship.</p></div>
            <div className="value"><h3>Straight answers</h3><p>Clear specs, honest pricing, and real people when you need help.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
