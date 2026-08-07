import { createContext, useState } from "react";

export const MyStore = createContext()

export const MyStoreProvider=({children})=>{

const [toggle,setToggle]= useState(true)
const [cartitem ,setCartItem] = useState([])

const increment =(id)=>{
  setCartItem((prev)=>{
    return prev.map((elem)=>{
        return elem.id === id ? {...elem , quantity:elem.quantity + 1} : elem
    })
  })
}
const decrement =(id)=>{
  setCartItem((prev)=>{
    return prev.map((elem)=>{
        return elem.id === id ? {...elem , quantity:elem.quantity - 1} : elem
    })
  })
}

return <MyStore.Provider value={{toggle,setToggle ,cartitem,setCartItem,increment ,decrement}}>{children}</MyStore.Provider>
 }














