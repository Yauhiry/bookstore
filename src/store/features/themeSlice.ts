import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme } from "types";

const getTheme = () => {
  const userTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (userTheme.matches) return "dark";

  return "light";
};

const initialState: Theme = getTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => (state = payload),
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
