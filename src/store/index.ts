import newBooksReducer from "./features/newBooksSlice";
import bookDetailsReducer from "./features/detailsBookSlice";
import { store, RootState, AppDispatch } from "./store";
import { fetchNewBooks } from "./features/newBooksSlice";
import { fetchBookDetails } from "./features/detailsBookSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectNewBooks } from "./selectors/newBooksSelector";
import { selectBookDetails } from "./selectors/bookDetailsSelector";

export type { RootState, AppDispatch };

export {
  newBooksReducer,
  bookDetailsReducer,
  store,
  fetchNewBooks,
  fetchBookDetails,
  useAppDispatch,
  useAppSelector,
  selectNewBooks,
  selectBookDetails,
};
