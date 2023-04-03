import { SearchForm, ThemeButton } from "components";
import { useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import {
  LinkGroup,
  StyledAccountIcon,
  StyledBurgerMenuIcon,
  StyledCartIcon,
  StyledFavoritesIcon,
  StyledLogoIcon,
  StyledNav,
} from "./styles";

interface NavProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Nav = ({ theme, toggleTheme }: NavProps) => {
  const { width = 0 } = useWindowSize();
  const mediaSize = width >= 992;

  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <StyledLogoIcon />
      </Link>
      {mediaSize && <SearchForm />}
      <LinkGroup>
        {mediaSize && (
          <Link to={ROUTE.FAVORITES}>
            <StyledFavoritesIcon />
          </Link>
        )}
        {mediaSize && (
          <Link to={ROUTE.CART}>
            <StyledCartIcon />
          </Link>
        )}
        <Link to={ROUTE.ACCOUNT}>
          <StyledAccountIcon />
        </Link>
        {mediaSize && <ThemeButton theme={theme} toggleTheme={toggleTheme} />}
        {!mediaSize && <StyledBurgerMenuIcon />}
      </LinkGroup>
    </StyledNav>
  );
};
