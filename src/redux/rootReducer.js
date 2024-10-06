import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.js";

export const rootReducer = combineReducers({
    user: userReducer,
});