import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    loading: false,
    error: false,
  },
  reducers: {
    addProductToCartStart: (state) => {
      state.loading = false;
      state.error = false;
    },
    addProductToCartSuccess: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += parseInt(action.payload.price);
      state.loading = false;
    },
    addProductToCartFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    fetchCartProductStart: (state) => {
      state.loading = false;
      state.error = false;
    },
    fetchCartProductSuccess: (state, action) => {
      state.products = action.payload;
      state.quantity = state.products.map((item) => (item += item.quantity));
      state.total = state.products.map(
        (item) => (item += item.price * item.quantity)
      );
      state.loading = false;
    },
    fetchCartProductFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  addProductToCartFailure,
  addProductToCartStart,
  addProductToCartSuccess,
  fetchCartProductFailure,
  fetchCartProductStart,
  fetchCartProductSuccess,
} = cartSlice.actions;
export default cartSlice.reducer;
