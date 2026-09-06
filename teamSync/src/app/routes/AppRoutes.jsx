
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../../features/auth/ui/pages/Register";
import Login from "../../features/auth/ui/pages/Login";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Home from "../../features/dashBoard/ui/pages/Home";
import PublicRoute from "../protactedRoutes/PublicRoute";
import ProtectedRoute from "../protactedRoutes/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";
import { commanRoutes } from "./commanRoutes";
import { adminRoutes } from "./adminRoutes";
import RoleBaseRoute from "../protactedRoutes/RoleBaseRoute";
import { employeeRoutes } from "./employeeRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    (()=>{
      dispatch(currentLoggedEmployee())
    })()
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
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
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashBoardLayout />,
          children:[
            ...commanRoutes,
          {
            element:<RoleBaseRoute allowedRoles={"admin"}/>,
            children:adminRoutes,
          },
          {
            element:<RoleBaseRoute allowedRoles={"employee"}/>,
            children:employeeRoutes,
          }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
