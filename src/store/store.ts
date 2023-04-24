import { configureStore } from "@reduxjs/toolkit";
import {
  themeReducer,
  bookDetailsReducer,
  newBooksReducer,
  searchBooksReducer,
  cartReducer,
  favoritesReducer,
} from "store";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
    searchBooks: searchBooksReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
