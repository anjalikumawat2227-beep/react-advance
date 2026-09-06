import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProduct } from "./api/productApi";
import ProductCard from "./component/Productcard";

const Pagination = () => {
  const [page, setPage] = useState(0);
  let limit = 10;
  const { data, isError, isPending, isPlaceholderData } = useQuery({
    queryKey: ["product", page],
    queryFn: () => getAllProduct(limit, page),
    placeholderData: keepPreviousData,
  });
  if (isPending) return <h1>loading...</h1>;
  if (isError) return <h1> somthing went wrong..</h1>;
  let totalpage = Math.ceil(data?.total / limit);
  return (
    <div className="flex p-5 flex-col gap-6 items-center">
      <div
        style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex gap-5">
        <button
          disabled={page === 0}
          onClick={() => setPage(page-1)}
        >
          prev
        </button>
        <span>
          {page + 1} of totalPage {totalpage}
        </span>
        <button
          disabled={page >= totalpage - 1}
          onClick={() => setPage(page+1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
