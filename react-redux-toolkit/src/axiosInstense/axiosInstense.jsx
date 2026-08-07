import axios from "axios"

export const axiosInstense = axios.create({
    baseURL:"https://fakestoreapi.com",
})