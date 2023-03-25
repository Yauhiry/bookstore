import { AccountIcon, CartIcon, FavoritesIcon, LogoIcon } from 'assets';
import { SearchForm } from 'components/molecules/SearchForm/SearchForm';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../router/routes';
import { LinkGroup, StyledNav } from './styles';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      <SearchForm />
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
