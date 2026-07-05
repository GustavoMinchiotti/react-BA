import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { getProducts } from "../../../services/productsService";
import { ProductList } from "../ProductList/ProductList";
import "./Dashboard.css";
import { deleteProduct } from "../../../services/productsService";

export const Dashboard = () => {
  const { logout } = useAuth();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);

      loadProducts();
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el producto.");
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Panel de administración</h2>

        <div className="header-actions">
          <Link className="btn primary" to="/">
            Volver a la tienda
          </Link>

          <button className="btn bg-delete primary" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>

        <div className="actions-grid">
          <Link to="/admin/products/new" className="action-card">
            ➕ Nuevo producto
          </Link>
        </div>
      </section>

      <section className="dashboard-products">
        <h3>Productos</h3>

        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <ProductList products={products} onDelete={handleDelete} />
        )}
      </section>
    </div>
  );
};
