import { createSlice } from "@reduxjs/toolkit";

const dashboarSlice = createSlice({
  name: "dashboard",
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
    editProductStart(state, action) {
      state.loading = true;
    },
    editProductSuccess(state) {
      state.loading = false;
      state.error = false;
    },
    editProductFailure(state, action) {
      state.loading = false;
      state.error = true;
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
  editProductFailure,
  editProductStart,
  editProductSuccess,
} = dashboarSlice.actions;
export default dashboarSlice.reducer;
