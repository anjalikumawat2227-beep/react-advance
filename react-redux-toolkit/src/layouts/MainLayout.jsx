import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='min-h-screen bg-black text-white p-4'>
    <Navbar/>
    <Outlet/>  
    </div>
  )
}

export default MainLayout
