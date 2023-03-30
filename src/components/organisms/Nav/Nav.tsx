import { AccountIcon, BurgerMenuIcon, CartIcon, FavoritesIcon, LogoIcon, MoonIcon } from "assets";
import { SearchForm } from "components";
import { useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { LinkGroup, StyledNav } from "./styles";

export const Nav = () => {
  const { width = 0 } = useWindowSize();
  const mediaSize = width > 992;

  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      {mediaSize && <SearchForm />}
      <LinkGroup>
        {mediaSize && (
          <Link to={ROUTE.FAVORITES}>
            <FavoritesIcon />
          </Link>
        )}
        {mediaSize && (
          <Link to={ROUTE.CART}>
            <CartIcon />
          </Link>
        )}
        <Link to={ROUTE.ACCOUNT}>
          <AccountIcon />
        </Link>
        {mediaSize && <MoonIcon />}
        {!mediaSize && <BurgerMenuIcon />}
      </LinkGroup>
    </StyledNav>
  );
};
