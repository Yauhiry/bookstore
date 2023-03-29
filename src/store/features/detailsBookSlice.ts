import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BookDetails, ResponseBooks } from 'types';

interface BookDetailsState {
  book: BookDetails;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchBookDetails = createAsyncThunk<
  BookDetails,
  { isbn13: string },
  { rejectValue: string }
>('book/fetchBookDetails', async ({ isbn13 }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<BookDetails>(`https://api.itbook.store/1.0/books/${isbn13}`);
    return data;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: BookDetailsState = {
  book: {} as BookDetails,
  isLoading: 'idle',
  error: null,
};
const bookDetailsSlice = createSlice({
  name: 'detailsBook',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookDetails.pending, (state) => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending';
      }
      if (state.isLoading === 'succeeded') {
        state.book = {} as BookDetails;
        state.isLoading = 'pending';
      }
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, { payload }) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'succeeded';
        state.book = payload;
      }
    });
    builder.addCase(fetchBookDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = 'failed';
        state.error = payload;
      }
    });
  },
});

export default bookDetailsSlice.reducer;
