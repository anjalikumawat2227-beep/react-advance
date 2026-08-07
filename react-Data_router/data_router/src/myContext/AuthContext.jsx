import { createContext, useState } from "react";

export const Auth = createContext()

 export const AuthContextProvider = ({children})=>{
  const [registers ,setRegisters] = useState(JSON.parse(localStorage.getItem("register")) || [])
  
  const [logedInUser ,setLogedInUser] = useState(() => {
  const user = localStorage.getItem("user");
  if (!user || user === "undefined") {
    return null;
  }
  return JSON.parse(user);} )

  return <Auth.Provider value={{registers,setRegisters,logedInUser,setLogedInUser}}>{children}</Auth.Provider>
}