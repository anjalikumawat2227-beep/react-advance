import React, { useContext } from "react";
import { Navigate, Outlet,} from "react-router";
import { Auth } from "../myContext/AuthContext";

const ProtactedRouter = () => {
  const { logedInUser } = useContext(Auth);
  
  if (!logedInUser) {
    return <Navigate to={"/"}/>
  }

  return <Outlet/>;
};

export default ProtactedRouter;
