import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../../services/productsService";

export const ProductSuccess = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    loadProduct();
  }, [id]);

  return (
    <section
      className="success-page"
      style={{
        maxWidth: "700px",
        margin: "3rem auto",
        textAlign: "center",
      }}
    >
      <div
        className="success-icon"
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
        }}
      >
        ✅
      </div>

      <h2>¡Producto agregado correctamente!</h2>

      <p>
        El producto ya forma parte del catálogo de{" "}
        <strong>Origen Coffee</strong>.
      </p>

      {product && (
        <>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              margin: "2rem auto 1rem",
              display: "block",
              border: "1px solid #ddd",
            }}
          />

          <h3>{product.name}</h3>

          <p>
            <strong>Categoría:</strong>{" "}
            {product.category === "coffee" ? "☕ Coffee" : "⚙ Accessories"}
          </p>

          <p>
            <strong>Precio:</strong> $
            {Number(product.price).toLocaleString("es-AR")}
          </p>
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        <Link className="btn bg-primary primary" to="/admin/products/new">
          ➕ Agregar otro
        </Link>

        <Link className="btn" to="/admin">
          📋 Volver al panel
        </Link>

        <Link className="btn bg-success primary" to="/">
          🛍 Ver catálogo
        </Link>
      </div>
    </section>
  );
};
