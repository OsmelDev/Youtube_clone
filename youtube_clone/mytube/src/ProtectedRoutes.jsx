import React from "react";
import { useAuth } from "./context/UserProvide";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <Outlet/>;
};

export default ProtectedRoutes;
