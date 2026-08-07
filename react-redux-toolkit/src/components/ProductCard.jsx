import { Star, Minus, Plus, ShoppingCart } from "lucide-react";


const ProductCard = ({ product }) => {
 
  return (
    <div className="max-w-sm rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Image */}
      <div className="bg-white h-72 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain transition duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <span className="inline-block bg-lime-500/20 text-lime-400 text-xs px-3 py-1 rounded-full mb-3 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-white text-xl font-bold line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-sm mt-3 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <Star
              className="fill-yellow-400 text-yellow-400"
              size={18}
            />
            <span className="text-white font-semibold">
              {product.rating.rate}
            </span>
            <span className="text-zinc-500">
              ({product.rating.count} Reviews)
            </span>
          </div>

          <h3 className="text-2xl font-bold text-lime-400">
            ${product.price}
          </h3>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between mt-6">

          <div className="flex items-center border border-zinc-700 rounded-xl overflow-hidden">

            <button
            
              className="w-10 h-10 flex items-center justify-center hover:bg-zinc-800 transition"
            >
              <Minus size={18} />
            </button>

            <span className="w-12 text-center text-white font-semibold">
            1
            </span>

            <button
            
              className="w-10 h-10 flex items-center justify-center hover:bg-zinc-800 transition"
            >
              <Plus size={18} />
            </button>

          </div>

          <button className="flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-semibold px-5 py-3 rounded-xl transition">
            <ShoppingCart size={18} />
            Add
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;