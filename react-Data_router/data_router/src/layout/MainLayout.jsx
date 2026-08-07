import React from 'react'
import Navbar from "../components/Navbar.jsx"
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default MainLayout