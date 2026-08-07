import React, { useEffect } from "react";
import {lazy} from "react"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { addUser } from "../features/AuthSlice";
const AuthRouter = lazy(()=>import("../router/protacted/AuthRouter"))
const MainRouter = lazy(()=> import("../router/protacted/MainRouter"))
const AuthLayout = lazy(()=> import("../layouts/AuthLayout"))
const MainLayout = lazy(()=> import("../layouts/MainLayout"))
const Login = lazy(()=>import("../pages/Login"))
const Register= lazy(()=>import("../pages/Register"))
const Home = lazy(()=>import("../pages/Home"))
const About = lazy(()=>import("../pages/About"))
const Shop = lazy(()=>import("../pages/Shop"))



const AppRouter = () => {
const dispatch =  useDispatch()

const hydrateUser=()=>{
 let loggedInUser = JSON.parse( localStorage.getItem("loggedInUser"))

 if(!loggedInUser){
  toast.error("unAuthorised user")
  return 
 }
 dispatch(addUser(loggedInUser))
}
 useEffect(()=>{
  hydrateUser()
 },[]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthRouter />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainRouter />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "about",
              element: <About/>,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
