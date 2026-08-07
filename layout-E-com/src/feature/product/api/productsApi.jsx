import { api } from "../../../cofigure/api"
export const getAllProductsApi = async(search,limit,skip)=>{
    let url =  search ? `/products/search?q=${search}&limit=${limit}&skip=${skip}`:`/products?limit=${limit}&skip=${skip}`
    try {
        const res = await api.get(url)
        return res.data
    } catch (error) {
       console.log("Products api error:",error) 
    }
}

export const  allProductCategories =async()=>{ 
    try {
        const res = await api.get("/products/categories")
        return res.data
    } catch (error) {
       console.log("error in getting all products api:",error) 
    }
}

export const getAllCategoryProducts =async(category)=>{
      try {
        const res = await api.get(`/products/category/${category}`)
        return res.data
    } catch (error) {
       console.log("error in getting all products api:",error) 
    }
}
export const getProducts = async(limit, skip) => {
     try {
        const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
        return res.data
    } catch (error) {
       console.log("error in getting all products api:",error) 
    }
}