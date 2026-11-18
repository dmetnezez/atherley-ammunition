import { notFound } from "next/navigation";
import { getProduct, formatPrice } from "@/lib/products";

export const revalidate = 60;

type Props = { params: Promise<{ handle: string }> };

export async function generateMetadata({ params }: Props) {
  const { handle } = await params;
  const product = await getProduct(handle);
  return { title: product?.title ?? "Product" };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  return (
    <section className="section">
      <div className="container detail">
        <div className="card-img">
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={product.image} alt={product.title} />
          ) : (
            <span>{product.caliber}</span>
          )}
        </div>
        <div>
          <span className="tag">{product.caliber}</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span className="price">{formatPrice(product.price, product.currency)}</span>
          {product.checkoutUrl ? (
            <a className="btn btn-green" href={product.checkoutUrl}>
              {product.available ? "Buy now" : "Out of stock"}
            </a>
          ) : (
            <a className="btn btn-green" href="/contact" aria-disabled={!product.available}>
              {product.available ? "Enquire to order" : "Out of stock"}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
