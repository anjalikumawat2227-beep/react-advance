import {useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch} from "react-redux";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
  const navigate = useNavigate();
 const [users,setUsers] = useState(JSON.parse(localStorage.getItem("registerUsers"))||[])
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

const dispatch =useDispatch()
 //register from
  const registerData = (data) => {
     let arr = [...users,data];
     setUsers(arr)
     localStorage.setItem("registerUsers",JSON.stringify(arr))
     reset()
     toast.success("user registered")
   };
   
   //login from
   const loginData = (data) => {
    const user = users.find((user)=>{
      return user.email === data.email && user.password === data.password
    }) 

    if(!user){
      return toast.error("invaild user")
    }
    dispatch(addUser(user))
    localStorage.setItem("loggedInUser",JSON.stringify(user))
    toast.success("user login succcessfully")
     reset()
   };

  return {
    navigate,
    register,
    reset,
    handleSubmit,
    errors,
    loginData,
    registerData,
  };
};
