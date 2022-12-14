import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: false,
  },

  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    fetchUserFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { fetchUserFailure, fetchUserStart, fetchUserSuccess, logOut } =
  productSlice.actions;
export default productSlice.reducer;
