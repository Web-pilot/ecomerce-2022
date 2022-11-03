import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchOrderStart(state) {
      state.loading = true;
    },
    fetchOrderSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
      state.error = false;
    },
    fetchOrderFailure(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchOrderFailure, fetchOrderStart, fetchOrderSuccess } =
  orderSlice.actions;
export default orderSlice.reducer;
