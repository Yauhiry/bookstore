import { configureStore } from "@reduxjs/toolkit";
import { bookDetailsReducer, newBooksReducer } from "store";

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
