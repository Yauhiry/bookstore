import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Book, ResponseBooks } from "types";

interface SearchBooksState {
  books: Book[];
  page: string;
  total: string;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  searchValue: string;
}

export const fetchSearchBooks = createAsyncThunk<
  ResponseBooks,
  { searchValue: string; currentPage: string },
  { rejectValue: string }
>("searchBooks/fetchSearchBooks", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<ResponseBooks>(
      `https://api.itbook.store/1.0/search/${params.searchValue}/${params.currentPage}`,
    );
    return data;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: SearchBooksState = {
  books: [] as Book[],
  page: "1",
  total: "0",
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
        state.books = [];
        state.isLoading = "pending";
      }
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      if (state.isLoading === "pending") {
        state.isLoading = "succeeded";
        state.books.push(...payload.books);
        state.page = payload.page;
        state.total = payload.total;
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
