import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice';
import restaurantReucer from "./slices/restaurantSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        restaurant: restaurantReucer,
        cart: cartReducer
    }
})
