import React from 'react'

const SearchFilter = ({setSearch}) => {

  return (
     <section className="w-[100%] mx-auto mb-10">
    
      <div
        className="
        mt-8
        border
        border-zinc-700
        rounded-3xl
        p-5
        flex
        flex-col
        lg:flex-row
        gap-4
      "
      >
        {/* Search */}

        <div className="relative flex-1">

          <input
            type="text"
            placeholder="Search products..."
            className="
            w-full
            bg-[#1a1a1a]
            border
            border-zinc-700
            rounded-2xl
            pl-11
            pr-4
            py-3
            text-white
            outline-none
            focus:border-lime-400
          "
          onChange={(e)=>setSearch(e.target.value)}
          
          />
        </div>

        {/* Category */}

        <select
       
          className="
          bg-[#1a1a1a]
          border
          border-zinc-700
          rounded-2xl
          px-5
          py-3
          text-white
          outline-none
          focus:border-lime-400
        "
        >
          <option  value="all">All Categories</option>
          <option  value="all">electronics</option>
          <option  value="all">men's clothing</option>
          <option  value="all">women's clothing</option>
        </select>

        {/* Sort */}

        <select
          className="bg-[#1a1a1a] border
          border-zinc-700
          rounded-2xl
          px-5
          py-3
          text-white
          outline-none
          focus:border-lime-400
        "
          
        >
          <option value="featured">Featured</option>
          <option value="lowToHigh">Price:Low to High</option>
          <option value="highToLow">Price:High to Low</option>
          <option value="lowRate">Lowest Rated</option>
          <option value="highRate">Highest Rated</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
