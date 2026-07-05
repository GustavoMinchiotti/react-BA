import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Espera a que Firebase confirme el usuario
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Si no hay usuario → lo manda al login
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // Si está logueado → deja pasar
  return children;
};
