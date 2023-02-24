import { configureStore } from "@reduxjs/toolkit";
import { githubAPI } from "./api/github";

export const store = configureStore({
    reducer: {
        [githubAPI.reducerPath]: githubAPI.reducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubAPI.middleware),
});
