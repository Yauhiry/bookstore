import themeReducer from "./features/themeSlice";
import newBooksReducer from "./features/newBooksSlice";
import bookDetailsReducer from "./features/detailsBookSlice";
import { store, RootState, AppDispatch } from "./store";
import { fetchNewBooks } from "./features/newBooksSlice";
import { fetchBookDetails } from "./features/detailsBookSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectTheme } from "./selectors/themeSelector";
import { selectNewBooks } from "./selectors/newBooksSelector";
import { selectBookDetails } from "./selectors/bookDetailsSelector";
import { setTheme } from "./features/themeSlice";

export type { RootState, AppDispatch };

export {
  themeReducer,
  newBooksReducer,
  bookDetailsReducer,
  store,
  fetchNewBooks,
  fetchBookDetails,
  useAppDispatch,
  useAppSelector,
  selectTheme,
  selectNewBooks,
  selectBookDetails,
  setTheme,
};
