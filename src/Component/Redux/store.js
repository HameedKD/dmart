import { combineReducers,configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import laptopSlice from "./slices/laptop.slice";

const config = {
    key : "root",
    storage
}

const slices = combineReducers({
    laptopSlice
});

const store = configureStore({
    reducer : persistReducer(config,slices),
    devTools : true,
})

export default store;