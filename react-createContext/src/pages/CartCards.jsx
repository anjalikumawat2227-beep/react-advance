function CartCard({ item }) {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 bg-white rounded-xl shadow-md border">
      
      {/* Product Image */}
      <div className="w-full md:w-40 h-40 flex justify-center items-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">
          {item.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {item.category}
        </p>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">⭐</span>
          <span>{item.rating.rate}</span>
          <span className="text-gray-500">
            ({item.rating.count} Reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <h3 className="text-2xl font-bold text-green-600">
            ${item.price}
          </h3>

          <div className="flex items-center gap-3">
            <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-300">
              -
            </button>

            <span className="font-semibold text-black">
              {item.quantity}
            </span>

            <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-300">
              +
            </button>
          </div>
        </div>

        <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;