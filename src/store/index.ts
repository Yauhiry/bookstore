import themeReducer from "./features/themeSlice";
import newBooksReducer from "./features/newBooksSlice";
import bookDetailsReducer from "./features/detailsBookSlice";
import searchBooksReducer from "./features/searchBooksSlice";
import cartReducer from "./features/cartSlice";
import favoritesReducer from "./features/favoritesSlice";
import userReducer from "./features/userSlice";
import { store, RootState, AppDispatch } from "./store";
import { fetchNewBooks } from "./features/newBooksSlice";
import { fetchBookDetails } from "./features/detailsBookSlice";
import { fetchSearchBooks } from "./features/searchBooksSlice";
import { fetchSignUpUser } from "./features/userSlice";
import { fetchSignInUser } from "./features/userSlice";
import { fetchSignOutUser } from "./features/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectTheme } from "./selectors/themeSelector";
import { selectNewBooks } from "./selectors/newBooksSelector";
import { selectBookDetails } from "./selectors/bookDetailsSelector";
import { selectSearchBooks } from "./selectors/searchBooksSelector";
import { selectCart } from "./selectors/cartSelector";
import { selectFavorites } from "./selectors/favoritesSelector";
import { selectUser } from "./selectors/userSelector";
import { setTheme } from "./features/themeSlice";
import { setSearchValue } from "./features/searchBooksSlice";
import { setUserAuth } from "./features/userSlice";
import {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  setCartItem,
} from "./features/cartSlice";

export type { RootState, AppDispatch };

export {
  themeReducer,
  newBooksReducer,
  bookDetailsReducer,
  searchBooksReducer,
  cartReducer,
  favoritesReducer,
  userReducer,
  store,
  fetchNewBooks,
  fetchBookDetails,
  fetchSearchBooks,
  fetchSignUpUser,
  fetchSignInUser,
  fetchSignOutUser,
  useAppDispatch,
  useAppSelector,
  selectTheme,
  selectNewBooks,
  selectBookDetails,
  selectSearchBooks,
  selectCart,
  selectFavorites,
  selectUser,
  setTheme,
  setSearchValue,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  setCartItem,
  setUserAuth,
};
