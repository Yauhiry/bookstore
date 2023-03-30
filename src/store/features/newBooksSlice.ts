import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Book, ResponseBooks } from "types";

interface NewBooksState {
  books: Book[];
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export const fetchNewBooks = createAsyncThunk<ResponseBooks, undefined, { rejectValue: string }>(
  "newBooks/fetchNewReleasesBooks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseBooks>("https://api.itbook.store/1.0/new");
      return data;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: NewBooksState = {
  books: [],
  isLoading: "idle",
  error: null,
};
const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.pending, (state) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
      }
    });
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      if (state.isLoading === "pending") {
        state.isLoading = "succeeded";
        state.books.push(...payload.books);
      }
    });
    builder.addCase(fetchNewBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.error = payload;
      }
    });
  },
});

export default newBooksSlice.reducer;
