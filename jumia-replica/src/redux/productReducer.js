import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: false,
    errorMessage: "",
    successMessage: "",
  },

  reducers: {
    fetchProductStart(state, action) {
      state.loading = true;
    },
    fetchProductSucess(state, action) {
      state.loading = false;
      state.products.push(action.payload);
      state.error = false;
      state.successMessage = action.payload.successMessage;
    },
    fetchProductFailure(state, action) {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { fetchProductFailure, fetchProductStart, fetchProductSucess } =
  productSlice.actions;
export default productSlice.reducer;
