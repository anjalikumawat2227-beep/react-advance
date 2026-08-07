import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProduct } from './api/productApi'
import ProductCard from './component/Productcard'

const InfinitePageScroll = () => {
let limit = 20
  const {data,isPending,hasNextPage,isFetchingNextPage,fetchNextPage} = useInfiniteQuery({
    queryKey:["project"],
    queryFn:({pageParam})=>getAllProduct(limit,pageParam),
    initialPageParam:0,
    getNextPageParam:(lastPage,allPages)=>{
      let loadedData = allPages.length * limit
    if(loadedData < lastPage.total) return loadedData  
      return undefined;
    }
  })
  if(isPending) return  <h1>loading....</h1>

let  allProducts = data?.pages?.flatMap((val)=> val.products)?? []

  return (
    <div className="flex p-5 flex-col gap-6 items-center">
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {
        hasNextPage && 
       ( <button onClick={()=>fetchNextPage()}>
          {isFetchingNextPage?"loading...":"load more"}
        </button>)
      }
    </div>
  )
}

export default InfinitePageScroll
