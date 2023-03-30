import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {
  AccountPage,
  BookPage,
  CartPage,
  FavoritesPage,
  HomePage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "pages";
import { MainTemplate } from "templates";
import { ROUTE } from "router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      <Route path={ROUTE.BOOK} element={<BookPage />} />
      <Route path={ROUTE.CART} element={<CartPage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
    </Route>,
  ),
  { basename: "/bookstore" },
);
