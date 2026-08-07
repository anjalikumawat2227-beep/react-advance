import { axiosInstense } from "../axiosInstense/axiosInstense"

export const getProductsFromApi = async()=>{
    try {
        let res = await axiosInstense.get("/products")
        return res.data 
    } catch (error) {
        console.log("product api error:",error)
    }
}
