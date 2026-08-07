import { useQuery } from "@tanstack/react-query";
import { getProductsFromApi } from "../api/productApi";
import { useState } from "react";

export const useProduct = () => {
  const [search, setSearch] = useState("");

  let { data, isPending, error } = useQuery({
    queryKey: ["product"],
    queryFn: getProductsFromApi,
  });

  let filteredProduct = data?.filter((val) =>
    val.title.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    data,
    error,
    isPending,
    filteredProduct,
    setSearch,
  };
};
