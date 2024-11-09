import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useUserDetails } from "../store/redux/selectorHook";

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate("/dashboard");
    }
  }, [location.pathname]);

  const { isAuthenticated } = useUserDetails();

  return <>{isAuthenticated ? element : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
