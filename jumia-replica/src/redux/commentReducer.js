import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchCommentsStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
    },
    fetchCommentsFailure: (state) => {
      state.error = false;
    },
  },
});

export const {
  fetchCommentsStart,
  fetchCommentsFailure,
  fetchCommentsSuccess,
} = commentSlice.actions;
export default commentSlice.reducer;
