import themeReducer from "./features/themeSlice";
import newBooksReducer from "./features/newBooksSlice";
import bookDetailsReducer from "./features/detailsBookSlice";
import searchBooksReducer from "./features/searchBooksSlice";
import { store, RootState, AppDispatch } from "./store";
import { fetchNewBooks } from "./features/newBooksSlice";
import { fetchBookDetails } from "./features/detailsBookSlice";
import { fetchSearchBooks } from "./features/searchBooksSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectTheme } from "./selectors/themeSelector";
import { selectNewBooks } from "./selectors/newBooksSelector";
import { selectBookDetails } from "./selectors/bookDetailsSelector";
import { selectSearchBooks } from "./selectors/searchBooksSelector";
import { setTheme } from "./features/themeSlice";
import { setSearchValue } from "./features/searchBooksSlice";

export type { RootState, AppDispatch };

export {
  themeReducer,
  newBooksReducer,
  bookDetailsReducer,
  searchBooksReducer,
  store,
  fetchNewBooks,
  fetchBookDetails,
  fetchSearchBooks,
  useAppDispatch,
  useAppSelector,
  selectTheme,
  selectNewBooks,
  selectBookDetails,
  selectSearchBooks,
  setTheme,
  setSearchValue,
};
