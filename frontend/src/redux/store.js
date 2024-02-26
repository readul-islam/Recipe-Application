import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import {baseApi} from "./api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});
