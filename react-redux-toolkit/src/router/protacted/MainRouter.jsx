import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router'

const MainRouter = () => {
 const {user}= useSelector((store)=>store.auth)
 
 if(!user){
  return <Navigate to={"/"}/>
 }
  return   <Outlet/>
}

export default MainRouter
