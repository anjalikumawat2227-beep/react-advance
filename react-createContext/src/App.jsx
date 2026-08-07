import React, { useContext, useEffect, useState } from 'react'
import Navbar from './componants/Navbar'
import { MyStore } from './context/MyContext'

import Cart from './componants/cart'
import axios from 'axios'
import ProductCards from './componants/ProductCards'

const App = () => {
  const { toggle ,cartitem} = useContext(MyStore)
  const [allproducts, setAllProducts] = useState([])

  
  
  const getAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      setAllProducts(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className='bg-gray-800 text-white p-4 flex flex-col gap-4'>
      <Navbar />
      {
        toggle ?

        <div className='grid grid-cols-4 gap-4'>
            {
              allproducts.map((elem)=>{
               let isInCart = cartitem.find((val)=> val.id===elem.id)
                return <ProductCards key={elem.id}  product={elem} isInCart={isInCart}/>
              })
            }
        </div>
          :
            <div className="bg-gray-800 text-white p-4 ">
              <Cart />
          </div>
      }

    </div>
  )
}

export default App
