import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const { isLoading, employee } = useSelector((store) => store.auth);
  if (isLoading) return <h1>Loading....</h1>;
  if (employee) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PublicRoute;
