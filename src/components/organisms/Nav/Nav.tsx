import { AccountIcon, CartIcon, FavoritesIcon, LogoIcon } from 'assets';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../router/routes';
import { Input, LinkGroup, StyledNav } from './styles';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      <Input placeholder="Search" />
      <LinkGroup>
        <Link to={ROUTE.FAVORITES}>
          <FavoritesIcon />
        </Link>
        <Link to={ROUTE.CART}>
          <CartIcon />
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <AccountIcon />
        </Link>
      </LinkGroup>
    </StyledNav>
  );
};
