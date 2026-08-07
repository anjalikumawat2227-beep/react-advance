import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ProtactedRouter from "./ProtactedRouter.jsx";
import AuthRouter from "./AuthRouter.jsx";
import PublicRouter from "./publicRouter.jsx";
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Services from "../pages/Services.jsx"

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRouter />,
      children: [
        {
          path: "",
          element: <AuthRouter />,
          children: [
            { path: "", element: <Login /> },
            { path: "register", element: <Register /> },
          ],
        },
      ],
    },

    {
      path: "/main",
      element: <ProtactedRouter />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {path:"",element:<Home/>},
            {path:"about",element:<About/>},
            {path:"services",element:<Services/>}
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
