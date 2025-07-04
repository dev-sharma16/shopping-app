import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, action)=>{
            state.data = action.payload;
        },
        removeUser: (state, action)=>{
            state.data = null;
        }
    }
});

export default userSlice.reducer;
export const { loadUser, removeUser } = userSlice.actions