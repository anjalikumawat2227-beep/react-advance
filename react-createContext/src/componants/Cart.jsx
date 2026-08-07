import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import CartCard from '../pages/CartCards'

const Cart = () => {
  const {cartitem }= useContext(MyStore)
  return  (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>
      
      <div className="grid grid-cols-3 gap-4">
        {cartitem.map((item) => (
          <CartCard key={item.id} item={item}/>
        ))}
      </div>
   

    </div>
  );
 
}

export default Cart
