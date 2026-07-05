import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);

        const product = await getProductById(id);

        setItemDetail(product);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  if (!itemDetail) return <p>Producto no encontrado.</p>;

  return (
    <section>
      <h1>Detalles del producto</h1>

      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};
