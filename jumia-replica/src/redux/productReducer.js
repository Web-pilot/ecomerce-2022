import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchProductStart(state, action) {
      state.loading = true;
    },
    fetchProductSucess(state, action) {
      state.loading = false;
      state.products = action.payload;
      state.error = false;
    },
    fetchProductFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchProductFailure, fetchProductStart, fetchProductSucess } =
  productSlice.actions;
export default productSlice.reducer;
