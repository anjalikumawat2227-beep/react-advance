import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosIntance";

export const loginEmployee = createAsyncThunk(
  "/auth/login",
  async (Credential, thunkApi) => {
    try {
      let res = await axiosInstance.post("/auth/login", Credential);
      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const currentLoggedEmployee = createAsyncThunk("/auth/me",
  async (Credential, thunkApi) => {
    try {
      let res = await axiosInstance.get("/auth/me", Credential);
      return res.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);














// export let currentLoggedEmployee = createAsyncThunk("/auth/me",async(_,thunkapi)=>{
//   try {
//     let res= await axiosInstance.get("/auth/me")
//     return res.data.user
//   } catch (error) {
//     return thunkapi.rejectWithValue(error)
//   }
// })
