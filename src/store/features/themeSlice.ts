import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ThemeState = "light" | "dark";

const getTheme = () => {
  const userTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (userTheme.matches) return "dark";

  return "light";
};

const initialState: ThemeState = getTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
