import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";

 const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthanticate:false,
        isLoading:false
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUserAction.pending,(state)=>{
            state.isLoading = true
        }).addCase(loginUserAction.fulfilled,(state,action)=>{
             state.user = action.payload,
            state.isAuthanticate=true
            state.isLoading = false
        }).addCase(loginUserAction.rejected,(state)=>{
             state.user = null
            state.isAuthanticate=false
            state.isLoading = false
        })
        //hydaretion
        .addCase(hydrateUserAction.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(hydrateUserAction.fulfilled,(state,action)=>{
            state.isAuthanticate = true
            state.user = action.payload
            state.isLoading =false
        })
        .addCase(hydrateUserAction.rejected,(state)=>{
            state.isLoading = false
        })

    }
 })
 export const {addUser,removeUser} = authSlice.actions
 export default authSlice.reducer