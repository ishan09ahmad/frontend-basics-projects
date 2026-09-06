import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../feature/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
  },
});

export default store;
