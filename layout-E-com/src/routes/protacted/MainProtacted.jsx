import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from "react-router"
const MainProtacted = () => {
let {isAuthanticate,isLoading} =  useSelector((store)=>store.auth)
if(isLoading) return <h1>Loading...</h1>
  if(!isAuthanticate){
 return <Navigate to ="/"/>
  }
  return <Outlet/>
}

export default MainProtacted
