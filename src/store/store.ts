import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, bookDetailsReducer, newBooksReducer, searchBooksReducer } from "store";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
    searchBooks: searchBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
