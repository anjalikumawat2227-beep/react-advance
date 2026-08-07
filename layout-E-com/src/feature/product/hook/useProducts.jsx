import { useQuery } from "@tanstack/react-query";
import {
  allProductCategories,
  getAllCategoryProducts,
  getAllProductsApi,
} from "../api/productsApi";
import { useEffect, useState } from "react";

export const useProduct = (page,search) => {
  const [debounceSearch, setDebounceSearch] = useState(null);

  const limit = 20;
  const skip = (page - 1) * 20;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  const { data, isPending} = useQuery({
    queryKey: ["product", debounceSearch, page],
    queryFn: () => getAllProductsApi(debounceSearch, limit, skip),
  });

  return {
    data,
    isPending,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: allProductCategories,
  });
};

export const useProductsByCategories = (search) => {
  const [category, setCategory] = useState(null);

  const { data } = useQuery({
    queryKey: ["categoryProducts", category],
    queryFn: () => getAllCategoryProducts(category),
     enabled: !!category,
  });

  const filteredProducts = data?.products?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  )||[]



  return {category, setCategory, filteredProducts};
};
