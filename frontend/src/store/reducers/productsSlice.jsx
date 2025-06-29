import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        loadProducts: (state, action)=>{
            state.data = action.payload;
        } 
    }
});

export default productsSlice.reducer;
export const { loadProducts } = productsSlice.actions