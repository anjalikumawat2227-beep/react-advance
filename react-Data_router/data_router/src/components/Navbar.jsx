import React from 'react'
import {NavLink} from "react-router"

const Navbar = () => {
  return (
    <nav className='flex gap-6 m-5'>
       <NavLink className={({isActive})=> isActive ? "font-bold text-red-600" :"text-black"} end to="/main">Home</NavLink>  
       <NavLink className={({isActive})=> isActive ? "font-bold text-red-600" :"text-black"} to="/main/about">About</NavLink> 
       <NavLink className={({isActive})=> isActive ? "font-bold text-red-600" :"text-black"} to="/main/services">Services</NavLink> 
    </nav>
  )
}

export default Navbar