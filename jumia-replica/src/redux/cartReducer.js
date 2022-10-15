import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      state.products.push(action.payload.cart);
      state.quantity += 1;
      state.total += action.payload.price;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
