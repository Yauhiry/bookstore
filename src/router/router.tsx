import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AccountPage } from '../pages/AccountPage';
import { BookPage } from '../pages/BookPage';
import { CartPage } from '../pages/CartPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { MainTemplate } from '../templates/MainTemplate';
import { ROUTE } from './routes';

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
    </Route>
  )
);
