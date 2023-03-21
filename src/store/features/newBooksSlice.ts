import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Book } from 'types';

interface NewBooksState {
  books: Book[];
  isLoading: boolean;
  error: string | null;
}

export const fetchNewBooks = createAsyncThunk('newBooks/fetchNewReleasesBooks', async () => {
  const { data } = await axios.get('https://api.itbook.store/1.0/new');
  return data;
});

const initialState: NewBooksState = {
  books: [],
  isLoading: false,
  error: null,
};

const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books.push(...payload.books);
    });
    builder.addCase(fetchNewBooks.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default newBooksSlice.reducer;
