import newBooksReducer from './features/newBooksSlice';
import { store, RootState, AppDispatch } from './store';
import { fetchNewBooks } from './features/newBooksSlice';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { selectNewBooks } from './selectors/booksSelector';

export type { RootState, AppDispatch };

export { store, useAppDispatch, useAppSelector, newBooksReducer, fetchNewBooks, selectNewBooks };
