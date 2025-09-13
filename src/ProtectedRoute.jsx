import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token"); // token opcional

  // ✅ Lógica simple:
  // - Si existe token → permitir acceso
  // - Si no hay token → bloquear acceso desde web
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
