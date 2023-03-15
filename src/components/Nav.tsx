import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../router/routes';

export const Nav = () => {
  return (
    <nav>
      <Link to={ROUTE.HOME}>Home</Link>
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
      <Link to={ROUTE.CART}>Cart</Link>
      <Link to={ROUTE.ACCOUNT}>Account</Link>
    </nav>
  );
};
