import axios from "axios"
import { useEffect, useState } from "react"
import type { Product } from "./global"
import ProductCard from "./component/ProductCard"

const App = () => {
  const [product,setProduct] = useState<Product[]>([])

  const getAllProduct=async()=>{
    const res = await axios.get<Product[]>("https://fakestoreapi.com/products")
    setProduct(res.data)
  }
  useEffect(()=>{
    getAllProduct()
  },[])


  return (
    <div className="flex flex-wrap gap-4 justify-center my-5">
      {
        product.map((val)=> <ProductCard key={val.id} product={val}/> )
      }
    </div>
  )
}

export default App



