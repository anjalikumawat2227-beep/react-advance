import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/state/authSlice"


export const store =new configureStore({
    reducer:{
        auth:authReducer
    }
})