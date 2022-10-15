import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProductToCart(state, action) {},
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
