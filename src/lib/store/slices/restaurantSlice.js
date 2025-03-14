import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    restaurants: [],
    selectedRestaurant: {}
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        selectRestaurant: (state, action) => {
            state.selectedRestaurant = action.payload;
        },
        setRestaurants: (state, action) => {
            state.restaurants = [...action.payload]
        },
        findRestaurant: (state, action) => {
            if (state.restaurants.length === 0) {
                console.warn("Restaurants data is empty. Make sure it's loaded before calling findRestaurant.");
                return;
            }
            let res = state.restaurants.find((resto) => resto.restoId == action.payload);
            if (!res) {
                console.warn(`Restaurant with ID ${action.payload} not found.`);
                return;
            }
            state.selectedRestaurant = res;
        }
    }
})

export const { selectRestaurant, setRestaurants, findRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;