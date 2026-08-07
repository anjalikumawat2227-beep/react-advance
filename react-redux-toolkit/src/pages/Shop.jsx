
import ProductCard from "../components/Productcard";
import ProductSkeleton from "../components/ProductSkeleton";
import SearchFilter from "../components/SearchFilter";
import { useProduct } from "../hooks/productHook";

const Shop = () => {
  const {isPending,error,filteredProduct,setSearch}=useProduct()
 
  if(error) return <h1>{error.message}</h1>

  return (
    <>
    
    <SearchFilter setSearch={setSearch}/>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {isPending
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        : filteredProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
     </>
  );
};

export default Shop;
