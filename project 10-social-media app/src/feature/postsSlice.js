import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Some error occurred");
  }

  return response.json();
});

const postsSlice = createSlice({
  name: "posts",

  initialState: {
    posts: [],
    loading: false,
    error: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })

      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default postsSlice.reducer;
