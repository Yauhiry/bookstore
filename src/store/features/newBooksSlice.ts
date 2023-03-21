import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Book, ResponseBooks } from 'types';

interface NewBooksState {
  books: Book[];
  isLoading: boolean;
  error: string | null;
}

export const fetchNewBooks = createAsyncThunk<ResponseBooks, undefined, { rejectValue: string }>(
  'newBooks/fetchNewReleasesBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseBooks>('https://api.itbook.store/1.0/new');
      return data;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  }
);

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
    builder.addCase(fetchNewBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newBooksSlice.reducer;
