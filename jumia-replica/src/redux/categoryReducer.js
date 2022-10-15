import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    error: false,
    categories: [],
  },
  reducers: {
    fetchCategoryStart: (state) => {
      state.loading = false;
    },
    fetchCategorySuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoryFailure: (state) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFailure,
} = categorySlice.actions;
export default categorySlice.reducer;
