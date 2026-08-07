const ProductSkeleton = () => {
  return (
    <div className="max-w-sm rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden animate-pulse">

      {/* Image */}
      <div className="h-72 bg-zinc-800"></div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <div className="h-5 w-24 rounded-full bg-zinc-800 mb-4"></div>

        {/* Title */}
        <div className="h-6 w-full rounded bg-zinc-800 mb-3"></div>
        <div className="h-6 w-3/4 rounded bg-zinc-800 mb-5"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 rounded bg-zinc-800"></div>
          <div className="h-4 rounded bg-zinc-800"></div>
          <div className="h-4 w-4/5 rounded bg-zinc-800"></div>
        </div>

        {/* Rating & Price */}
        <div className="flex justify-between items-center mt-6">
          <div className="h-5 w-28 rounded bg-zinc-800"></div>
          <div className="h-7 w-16 rounded bg-zinc-800"></div>
        </div>

        {/* Quantity & Button */}
        <div className="flex justify-between items-center mt-6">

          <div className="h-11 w-32 rounded-xl bg-zinc-800"></div>

          <div className="h-11 w-32 rounded-xl bg-zinc-800"></div>

        </div>

      </div>
    </div>
  );
};

export default ProductSkeleton;