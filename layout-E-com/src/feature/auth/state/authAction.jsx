import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../cofigure/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk("auth/login",async(credentials,thunkApi)=>{
     try {
        let res = await api.post("/auth/login", credentials);
        toast.success("user logged in")
        localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
        return res.data;
      } catch(error) {
          toast.error("login failed")
      return  thunkApi.rejectWithValue("login failed")
      }
})

export const hydrateUserAction = createAsyncThunk("auth/me",async(_,thunkApi)=>{
     let token = JSON.parse(localStorage.getItem("accessToken"));
    try {
        let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
      },
    });
    return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue("UnAuthorizied user")
    }
})