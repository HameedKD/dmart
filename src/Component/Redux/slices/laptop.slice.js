import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const laptopSlice = createSlice({
    name : "laptop",
    initialState,
    reducers : {
       
        setData(state,action){
           state.push(action.payload)
        },
        removeCart(state,action){
            state.splice(action.payload,1)
        },
        removeAllCart(state){
            return state = initialState
        }
        
    }
})

export const {setData,removeCart,removeAllCart} = laptopSlice.actions;
export default laptopSlice.reducer;