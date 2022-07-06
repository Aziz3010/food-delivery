import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    cartIsVisible: false
};

const CartUiSlice = createSlice({
    name: 'CartUi',
    initialState: initialState,

    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const CartUiActions = CartUiSlice.actions;
export default CartUiSlice;