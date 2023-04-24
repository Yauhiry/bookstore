import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookDetails } from "types/types";

interface FavoritesState {
  favorites: BookDetails[];
  isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  isLoading: "idle",
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorite(state, { payload }: PayloadAction<BookDetails>) {
      const isAdded = state.favorites.find((item) => item.isbn13 === payload.isbn13);
      !isAdded && state.favorites.push(payload);

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite: (state, { payload }: PayloadAction<string>) => {
      const itemIsbn13 = payload;
      state.favorites = state.favorites.filter((item) => item.isbn13 !== itemIsbn13);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { removeFavorite, setFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
