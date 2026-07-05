import { ProductCard } from "./ProductCard";
import "./ProductList.css";

export const ProductList = ({ products, onDelete }) => {
  if (!products.length) {
    return <p>No hay productos.</p>;
  }

  return (
    <section className="admin-products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </section>
  );
};
