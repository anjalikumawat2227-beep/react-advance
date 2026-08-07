import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainProtacted from './protacted/MainProtacted'
import PublicProtacted from './protacted/PublicProtacted'
import AuthLayout from '../app/layout/AuthLayout'
import MainLayout from '../app/layout/MainLayout'
import Login from "../feature/auth/ui/pages/Login"
import Register from "../feature/auth/ui/pages/Register"
import Product from '../feature/product/ui/pages/Product'
import Cart from "../feature/cart/ui/pages/Cart"
import Order from "../feature/order/ui/pages/Order"
import Home from "../shared/ui/pages/Home"
import { useDispatch } from 'react-redux'
import { hydrateUserAction } from '../feature/auth/state/authAction'

const AppRoute = () => {

 const dispatch =useDispatch()
    useEffect(()=>{
       (()=>{
        try {
           dispatch(hydrateUserAction())
        } catch (error) {
            console.log("error in hydration",error)
        }
       })()
       
    },[])
    const router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtacted/>,
            children:[
                {
                    path:"",
                    element:<AuthLayout/>,
                    children:[
                        {path:"",
                        element:<Login/>
                        },{
                            path:"register",
                            element:<Register/>
                        }
                    ]
                }
            ]
        },{
            path:"/main",
            element:<MainProtacted/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                        path:"",
                        element:<Home/>
                    },
                    {
                        path:"product",
                        element:<Product/>
                    },
                    {
                        path:"cart",
                        element:<Cart/>
                    },
                    {
                        path:"order",
                        element:<Order/>
                    }
                ]
                }
            ]
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRoute
