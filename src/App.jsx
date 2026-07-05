import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";

import { Login } from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import { ProductFormContainer } from "./components/adminComponents/ProductForm/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductForm/ProductSuccess";
import { ProductEditContainer } from "./components/adminComponents/ProductEdit/ProductEditContainer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {/* TIENDA */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />

          {/* LOGIN */}
          <Route path="/admin/login" element={<Login />} />

          {/* DASHBOARD */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* NUEVO PRODUCTO */}
          <Route
            path="/admin/products/new"
            element={
              <ProtectedRoute>
                <ProductFormContainer />
              </ProtectedRoute>
            }
          />

          {/* EDITAR PRODUCTO */}
          <Route
            path="/admin/products/edit/:id"
            element={
              <ProtectedRoute>
                <ProductEditContainer />
              </ProtectedRoute>
            }
          />

          {/* ALTA EXITOSA */}
          <Route
            path="/success/:id"
            element={
              <ProtectedRoute>
                <ProductSuccess />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
