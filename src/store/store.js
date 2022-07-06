import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import CartUiSlice from './shopping-cart/CartUiSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        CartUi: CartUiSlice.reducer
    }
});

export default store;