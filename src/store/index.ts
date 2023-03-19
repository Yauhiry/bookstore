import { store, RootState, AppDispatch } from './store';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import newBooksReducer from './features/newBooksSlice';
import { fetchNewBooks } from './features/newBooksSlice';

export type { RootState, AppDispatch };

export { store, useAppDispatch, useAppSelector, newBooksReducer, fetchNewBooks };
