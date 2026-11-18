import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = (await getProducts()).slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Proudly made in Canada</div>
          <h1>Canadian-made 9mm and 5.56 ammunition.</h1>
          <p>
            Made in Canada for Canadian shooters. Consistent, dependable 9mm and 5.56 ammunition
            for the range.
          </p>
          <Link href="/products" className="btn btn-brass">Shop ammunition</Link>
          <Link href="/about" className="btn btn-ghost">Our story</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Shop by caliber</h2>
          <p className="lede">Two calibers, done well.</p>
          <div className="grid">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2>Why Apex</h2>
          <p className="lede">Three things we will not compromise on.</p>
          <div className="values">
            <div className="value"><h3>Made in Canada</h3><p>Manufactured here at home, by Canadians, for Canadian shooters.</p></div>
            <div className="value"><h3>Consistency</h3><p>Every box performs like the last one.</p></div>
            <div className="value"><h3>Straight answers</h3><p>Clear specs, honest pricing, and real people when you need help.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
