import React, { useContext } from 'react'
import { Auth } from '../myContext/AuthContext';
import { Navigate, Outlet } from 'react-router';

const PublicRouter = () => {
const { logedInUser } = useContext(Auth);
  if (logedInUser) {
    return <Navigate to={"/main"}/>
  }
  return <Outlet/>;
}

export default PublicRouter