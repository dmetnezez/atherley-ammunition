import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.handle}`} className="card">
      <div className="card-img">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image} alt={product.title} />
        ) : (
          <span>{product.caliber}</span>
        )}
      </div>
      <div className="card-body">
        <span className="tag">{product.caliber}</span>
        <h3>{product.title}</h3>
        {!product.available && <span className="soldout">Out of stock</span>}
        <span className="price">{formatPrice(product.price, product.currency)}</span>
      </div>
    </Link>
  );
}
