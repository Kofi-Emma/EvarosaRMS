import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/Authentication/AuthContext";

import React from "react";

const PrivateRoutes = () => {
  const { user } = useAuthContext();

  const loggedInUser = localStorage.getItem("user");
  let foundUser = null;

  if (loggedInUser) {
    foundUser = JSON.parse(loggedInUser);
  }

  const theUser = user || foundUser;

  return theUser ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoutes;
