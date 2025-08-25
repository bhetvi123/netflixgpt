import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items=[];
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = userSlice.actions;

export default userSlice.reducer;