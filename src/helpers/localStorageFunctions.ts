import { CartBook } from "types/types";

export const setLocalStorage = (key: string, value: CartBook[]) =>
  localStorage.setItem(key, JSON.stringify(value));
export const getLocalStorage = (key: string): CartBook[] | [] =>
  JSON.parse(localStorage.getItem(key) || "[]");
