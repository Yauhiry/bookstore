import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Book, ResponseBooks } from "types";

interface SearchBooksState {
  books: Book[];
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  searchValue: string;
}

export const fetchSearchBooks = createAsyncThunk<ResponseBooks, string, { rejectValue: string }>(
  "searchBooks/fetchSearchBooks",
  async (searchValue, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseBooks>(
        `https://api.itbook.store/1.0/search/${searchValue}`,
      );
      return data;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: SearchBooksState = {
  books: [] as Book[],
  isLoading: "idle",
  error: null,
  searchValue: "",
};
const searchBooksSlice = createSlice({
  name: "searchBooks",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchBooks.pending, (state) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
      }
      if (state.isLoading === "succeeded") {
        state.books.length = 0;
        state.isLoading = "pending";
      }
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      if (state.isLoading === "pending") {
        state.isLoading = "succeeded";
        state.books.push(...payload.books);
      }
    });
    builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = "failed";
        state.error = payload;
      }
    });
  },
});

export const { setSearchValue } = searchBooksSlice.actions;
export default searchBooksSlice.reducer;
