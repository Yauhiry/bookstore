import { configureStore } from "@reduxjs/toolkit";
import {
  themeReducer,
  bookDetailsReducer,
  newBooksReducer,
  searchBooksReducer,
  cartReducer,
  favoritesReducer,
  userReducer,
} from "store";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
    searchBooks: searchBooksReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
