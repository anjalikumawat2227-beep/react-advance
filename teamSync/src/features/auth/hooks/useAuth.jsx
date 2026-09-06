import {useForm} from "react-hook-form"
import {useNavigate} from "react-router"
import {useDispatch} from "react-redux"
import { loginEmployee } from "../state/auth/authAction"

export const useAuth =()=>{
let navigate = useNavigate()
let dispatch = useDispatch()
const {reset,register,handleSubmit,formState:{errors}} = useForm()

const onRegisterSubmit =(data)=>{
console.log(data)
}

const onLoginSubmit =(data)=>{
dispatch(loginEmployee(data))
}

    return {
        reset,register,handleSubmit,errors,onRegisterSubmit,navigate,onLoginSubmit
    }
}