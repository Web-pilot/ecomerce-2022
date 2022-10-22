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
      state.products.push(action.payload.item);
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
      state.products = [];
      state.products = action.payload;
      let total = 0;
      let quantity = 0;
      state.quantity = state.products.map(
        (item) => (quantity += parseInt(item.quantity))
      );
      state.products.map(
        (item) => (total += parseInt(item.price) * item.quantity)
      );
      state.total = total;
      state.quantity = quantity;
      state.loading = false;
    },
    fetchCartProductFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    increementQuantity: (state, action) => {
      state.products.find(
        (item) => item._id === action.payload.id
      ).quantity += 1;
      let total = 0;
      state.products.map(
        (item) => (total += parseInt(item.price) * item.quantity)
      );
      state.total = total;
    },
    decreementQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload.id
      );
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
      let total = 0;
      let quantity = 0;
      state.quantity = state.products.map(
        (item) => (quantity += parseInt(item.quantity))
      );
      state.products.map(
        (item) => (total += parseInt(item.price) * item.quantity)
      );
      state.total = total;
      state.quantity = quantity;
    },
    deleteCartStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteCartSuccess: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1
      );
      let total = 0;
      let quantity = 0;
      state.quantity = state.products.map(
        (item) => (quantity += parseInt(item.quantity))
      );
      state.products.map(
        (item) => (total += parseInt(item.price) * item.quantity)
      );
      state.total = total;
      state.quantity = quantity;
      state.loading = false;
    },
    deleteCartFailure: (state) => {
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
  increementQuantity,
  decreementQuantity,
  deleteCartStart,
  deleteCartFailure,
  deleteCartSuccess,
} = cartSlice.actions;
export default cartSlice.reducer;
