import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "helpers";
import { BookDetails, CartBook } from "types/types";

interface CartState {
  cartItems: CartBook[];
  sumTotal: number;
  vat: number;
  total: number;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: CartState = {
  cartItems: getLocalStorage("cartItems"),
  vat: 0,
  sumTotal: 0,
  total: 0,
  isLoading: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem(state, { payload }: PayloadAction<BookDetails>) {
      const isAdded = state.cartItems.find((item) => item.isbn13 === payload.isbn13) as CartBook;
      isAdded
        ? (isAdded.amount = isAdded.amount + 1)
        : state.cartItems.push({ ...payload, amount: 1 });

      setLocalStorage("cartItems", state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      setLocalStorage("cartItems", state.cartItems);
    },
    removeItem: (state, { payload }: PayloadAction<string>) => {
      const itemIsbn13 = payload;
      state.cartItems = state.cartItems.filter((item) => item.isbn13 !== itemIsbn13);
      setLocalStorage("cartItems", state.cartItems);
    },
    increase: (state, { payload }: PayloadAction<{ isbn13: string }>) => {
      const cartItem = state.cartItems.find((item) => item.isbn13 === payload.isbn13) as CartBook;
      cartItem.amount = cartItem.amount + 1;
      setLocalStorage("cartItems", state.cartItems);
    },

    decrease: (state, { payload }: PayloadAction<{ isbn13: string }>) => {
      const cartItem = state.cartItems.find((item) => item.isbn13 === payload.isbn13) as CartBook;
      cartItem.amount = cartItem.amount - 1;
      setLocalStorage("cartItems", state.cartItems);
    },
    calculateTotals: (state) => {
      state.sumTotal = 0;
      state.cartItems.forEach((item) => {
        state.sumTotal += item.amount * Number(item.price.slice(1));
      });
      state.vat = (state.sumTotal / 100) * 5;
      state.total = state.sumTotal + state.vat;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals, setCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
