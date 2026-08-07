import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/authAction";

export const useAuth=()=>{
  const navigate =  useNavigate()
 const dispatch = useDispatch()
    const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerForm =(data)=>{
    console.log(data)
    reset()
  }

  const loginForm = async(data)=>{
    try {
      await dispatch(loginUserAction(data))   
        reset()     
    } catch (error) {
        console.log("form api error",error)
    }
  }
 return {
    register,handleSubmit,errors,registerForm,loginForm,navigate
 }

}