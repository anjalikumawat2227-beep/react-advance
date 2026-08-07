import { ShoppingCart } from 'lucide-react'
import React from 'react'
import {NavLink} from "react-router"
const Navbar = () => {
  return (
    <nav className='flex justify-between px-6 py-4'>
      <div>
 <h1>SkyMart</h1>
      </div>
      <div className="flex gap-5">
  <NavLink to="/main" end className={({isActive})=>isActive ? "text-yellow-500":"text-white"}>Home</NavLink>
  <NavLink to="/main/shop" className={({isActive})=> isActive?"text-yellow-500":"text-white"}>Shop</NavLink>
  <NavLink to="/main/about" className={({isActive})=> isActive? "text-yellow-500":"text-white"}>About</NavLink>
      </div>
      <div className='flex gap-4'>
        <h1>Hii</h1>
        <span className='font-bold'>Anjali</span>
      <ShoppingCart size={20}/>
      </div>
    </nav>
  )
}

export default Navbar
