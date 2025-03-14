import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    searchQuery: "",
    showSearcBarhMobile: false,
    openCart: false,
    cartCount: 0
}

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        toogleCart: () => {
            state.openCart = !state.openCart;
        },
        toogleSearchBarMobile: () => {
            state.showSearcBarhMobile = !state.showSearcBarhMobile;
        }
    }
})

export const { toogleCart, toogleSearchBarMobile } = navSlice.actions;
export default navSlice.reducer;