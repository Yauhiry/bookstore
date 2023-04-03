import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, bookDetailsReducer, newBooksReducer } from "store";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
