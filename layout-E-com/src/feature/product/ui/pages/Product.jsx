import React, { useState } from 'react'
import { useProduct, useProductsByCategories } from '../../hook/useProducts'
import ProductCard from "../components/ProductCard"
import Filter from '../components/Filter'
import Pagination from '../components/Pagination'

const Product = () => {
   const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const {data,isPending} = useProduct(page,search)
  const {category,setCategory,filteredProducts}=  useProductsByCategories(search)

  const products = category?filteredProducts: data?.products;
  if (isPending) return <h1>Loading categories..</h1>;

  return (
    <div>
      <Filter search={search} setSearch={setSearch} category={category} setCategory={setCategory}/>
     <div  className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
      products?.map((product)=>{
          return <ProductCard key={product.id} product={product}/>
        })
      } 
     
     </div>
     <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default Product
