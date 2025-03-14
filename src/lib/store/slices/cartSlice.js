import { act } from "react";

const { createSlice } = require("@reduxjs/toolkit");

const findItem = (state, dishId) => state.find((item) => item.dishId === dishId);
const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = findItem(state, action.payload.dishId);
            if (existingItem) {
                // Increment count if the item already exists
                existingItem.count = (existingItem.count || 1) + 1;
            } else {
                // Add new item with an initial count
                state.push({ ...action.payload, count: 1 });
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.dishId !== action.payload);
        },
        incrementCount: (state, action) => {
            const item = state.find((item) => item.dishId === action.payload);
            if (item) {
                item.count = (item.count || 1) + 1; // Incrementing item count
            }
        },
        decrementCount: (state, action) => {
            const itemIndex = state.findIndex((item) => item.dishId === action.payload);
            if (itemIndex !== -1) {
                const item = state[itemIndex];
                if (item.count === 1) {
                    state.splice(itemIndex, 1); // Remove the item if count is 1
                } else {
                    item.count -= 1; // Decrement the count
                }
            }
        },
        setCart: (state, action) => {
            return action.payload; // Replace the current state with the new cart
        },
        emptyCart: () => []
    }
});

export const { addItem, removeItem, incrementCount, decrementCount, setCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
