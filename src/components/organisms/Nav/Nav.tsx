import { SearchForm, ThemeButton } from "components";
import { useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import {
  LinkGroup,
  StyledAccountIcon,
  StyledBurgerMenuIcon,
  StyledCartIcon,
  StyledDotBadge,
  StyledFavoritesIcon,
  StyledLink,
  StyledLogoIcon,
  StyledNav,
} from "./styles";
import { Theme } from "types";
import { selectCart, useAppSelector } from "store";

interface NavProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Nav = ({ theme, toggleTheme }: NavProps) => {
  const { width = 0 } = useWindowSize();
  const mediaSize = width >= 992;
  const { cartItems } = useAppSelector(selectCart);

  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <StyledLogoIcon />
      </Link>
      {mediaSize && <SearchForm />}
      <LinkGroup>
        {mediaSize && <ThemeButton theme={theme} toggleTheme={toggleTheme} />}
        {mediaSize && (
          <StyledLink to={ROUTE.FAVORITES}>
            <StyledFavoritesIcon />
          </StyledLink>
        )}
        {mediaSize && (
          <StyledLink to={ROUTE.CART}>
            <StyledCartIcon />
            {cartItems.length > 0 && <StyledDotBadge />}
          </StyledLink>
        )}
        <StyledLink to={ROUTE.ACCOUNT}>
          <StyledAccountIcon />
        </StyledLink>
        {!mediaSize && <StyledBurgerMenuIcon />}
      </LinkGroup>
    </StyledNav>
  );
};
