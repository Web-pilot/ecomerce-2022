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
      state.errorMessage = action.payload.errorMessage;
    },
    deleteProductStart: (state) => {
      state.loading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1
      );
      state.loading = false;
    },
    deleteProductFailure: (state) => {
      state.loading = false;
      state.error = false;
    },
    showDisplayItemStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    showDisplayItemSuccess: (state, action) => {
      state.loading = false;
      const filterItem = state.products.filter(
        (item) => item._id !== action.payload.id
      );
      state.products = [...filterItem, action.payload.item];
      state.loading = false;
    },
    showDisplayItemFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  showDisplayItemFailure,
  showDisplayItemStart,
  showDisplayItemSuccess,
  deleteProductFailure,
  deleteProductSuccess,
  deleteProductStart,
  fetchProductFailure,
  fetchProductStart,
  fetchProductSucess,
} = productSlice.actions;
export default productSlice.reducer;
