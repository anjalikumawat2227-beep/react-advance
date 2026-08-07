import axios from "axios"

export const getAllProduct =async(limit,page)=>{
    try {
    //    let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`)
       let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page*limit}`)
       return res.data
    } catch (error) {
        console.log("product api error",error)
    }
}