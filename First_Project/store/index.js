import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const reducers = combineReducers({
    auth:authSlice
})

export const store = configureStore({
    reducer:reducers


})