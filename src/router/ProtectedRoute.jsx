import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useUserDetails } from "../store/selectorHook";

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useUserDetails();

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate("/dashboard");
    } else if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [location.pathname]);

  return <>{isAuthenticated ? element : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
