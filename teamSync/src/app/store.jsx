import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth/authSlice";
import themeReducer from "../shared/state/themeSlice"

export const store = new configureStore({
  reducer: {
    auth: authReducer,
    theme:themeReducer
  },
});
