import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

function ProductCards({ product ,isInCart}) {
 const { setCartItem , increment , decrement} = useContext(MyStore)

  return (
    <div className="overflow-hidden rounded-2xl border bg-gray-600 shadow-md transition hover:shadow-xl">
      
      {/* Product Image */}
      <div className="h-50 bg-gray-600 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-lg font-semibold text-black">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm text-gray-900">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium">{product.rating.rate}</span>
          <span className="text-sm text-gray-900">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-2xl font-bold text-green-600">
            ${product.price}
          </p>
           {
            isInCart ? 
            <button className='w-25 bg-black rounded flex justify-center items-center gap-2'>
              <span onClick={()=>decrement(product.id)}  className='text-2xl'>-</span>
              <span  className='text-2xl'>{isInCart.quantity}</span>
               <span onClick={()=>increment(product.id)}  className='text-2xl'>+</span>
            </button>:
      
          <button onClick={()=> setCartItem((prev)=>[...prev , {...product , quantity:1 }])} className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
}
        </div>
      </div>
    </div>
  );
}

export default ProductCards;


