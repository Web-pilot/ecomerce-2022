import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchProducts: [],
    searchTerm: "",
    loading: false,
    error: false,
  },

  reducers: {
    fetchProductStart(state) {
      state.loading = true;
    },
    fetchProductSucess(state, action) {
      state.loading = false;
      state.products = action.payload;
      state.searchProducts = state.products;
      state.error = false;
    },
    fetchProductFailure(state) {
      state.loading = false;
      state.error = true;
    },
    searchProduct(state, action) {
      state.searchTerm = action.payload.searchTerm
    if(!state.searchTerm) {
      state.searchProducts = state.products
    } else {
      state.searchProducts = state.products.filter((item) =>
      Object.values(item)
        .join("")
        .toString()
        .includes(state.searchTerm)
    );
    }
    },
  },
});

export const {
  searchProduct,
  fetchProductFailure,
  fetchProductStart,
  fetchProductSucess,
} = productSlice.actions;
export default productSlice.reducer;
