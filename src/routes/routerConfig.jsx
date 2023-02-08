import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "routes/constants/route";
import { NotFound } from "pages/NotFound";
import Home from "pages/Home";
import Login from "pages/Auth/Login";
import PrivateRoute from "./privateRoute";
import Register from "pages/Auth/Register";

export const RouterConfig = () => {
  return (
    <Routes>
      {/* List all public routes here */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />

      {/* List all private/auth routes here */}
      <Route
        path={ROUTES.ROOT}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}

      {/* List a generic 404-Not Found route here */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
