import { ROUTES } from "routes/constants/route";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";

// screen if you're not yet authenticated.
const PrivateRoute = ({ children, redirectPath }) => {
  const { session } = useAuth();

  if (!session) {
    return <Navigate to={redirectPath ? redirectPath : ROUTES.LOGIN} replace />;
  }

  return children;
};

export default PrivateRoute;
