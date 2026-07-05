import { useState } from "react";
import { Link } from "react-router-dom";

import { ConfirmModal } from "../../common/ConfirmModal/ConfirmModal";

export const ProductCard = ({ product, onDelete }) => {
  const [openModal, setOpenModal] = useState(false);

  const categoryLabel =
    product.category === "coffee" ? "☕ Coffee" : "⚙ Accessories";

  const handleDelete = () => {
    onDelete(product.id);
    setOpenModal(false);
  };

  return (
    <>
      <article className="admin-product-card">
        <img
          className="admin-product-image"
          src={product.image}
          alt={product.name}
        />

        <div className="admin-product-info">
          <h4>{product.name}</h4>

          <p>{categoryLabel}</p>

          <p>
            <strong>${Number(product.price).toLocaleString("es-AR")}</strong>
          </p>
        </div>

        <div className="admin-product-actions">
          <Link
            to={`/admin/products/edit/${product.id}`}
            className="btn primary"
          >
            ✏️ Editar
          </Link>

          <button
            className="btn bg-delete primary"
            onClick={() => setOpenModal(true)}
          >
            🗑 Eliminar
          </button>
        </div>
      </article>

      <ConfirmModal
        open={openModal}
        title="Eliminar producto"
        message={`¿Está seguro de eliminar "${product.name}"? Esta acción no se puede deshacer.`}
        onConfirm={handleDelete}
        onCancel={() => setOpenModal(false)}
      />
    </>
  );
};
