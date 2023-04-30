import { AccountMenu, SearchForm, ThemeButton } from "components";
import { useToggle, useWindowSize } from "hooks";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import {
  AccountButton,
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
import { selectCart, selectFavorites, selectUser, useAppSelector } from "store";

interface NavProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Nav = ({ theme, toggleTheme }: NavProps) => {
  const { width = 0 } = useWindowSize();
  const mediaSize = width >= 992;
  const { cartItems } = useAppSelector(selectCart);
  const { favorites } = useAppSelector(selectFavorites);
  const { isAuth } = useAppSelector(selectUser);
  const [isAccountMenuOpen, toggleAccountMenu] = useToggle();
  const navigate = useNavigate();

  const handleAccountMenu = () => {
    isAuth ? toggleAccountMenu() : navigate(ROUTE.SIGN_IN);
  };

  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <StyledLogoIcon />
      </Link>
      {mediaSize && <SearchForm />}
      <LinkGroup>
        {mediaSize && <ThemeButton theme={theme} toggleTheme={toggleTheme} />}
        {mediaSize && isAuth && (
          <StyledLink to={ROUTE.FAVORITES}>
            <StyledFavoritesIcon />
            {favorites.length > 0 && <StyledDotBadge />}
          </StyledLink>
        )}
        <StyledLink to={ROUTE.CART}>
          <StyledCartIcon />
          {cartItems.length > 0 && <StyledDotBadge />}
        </StyledLink>
        {mediaSize && (
          <AccountButton onClick={handleAccountMenu}>
            <StyledAccountIcon />
          </AccountButton>
        )}
        {!mediaSize && <StyledBurgerMenuIcon />}
      </LinkGroup>
      {isAccountMenuOpen && (
        <AccountMenu isAccountMenuOpen={isAccountMenuOpen} toggleAccountMenu={toggleAccountMenu} />
      )}
    </StyledNav>
  );
};
