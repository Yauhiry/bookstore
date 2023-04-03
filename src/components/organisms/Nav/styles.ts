import { AccountIcon, BurgerMenuIcon, CartIcon, FavoritesIcon, LogoIcon } from "assets";
import styled from "styled-components";
import { COLOR, MEDIA } from "ui";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid ${COLOR.GRAY};
  ${MEDIA.XL} {
    grid-template-columns: 248px 1fr 248px;
    grid-gap: 40px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: end;
  justify-self: right;
  gap: 30px;
  padding: 16px;
  ${MEDIA.SM} {
    grid-gap: 40px;
  }
`;

const StyledLogoIcon = styled(LogoIcon)`
  path {
    fill: ${COLOR.DARK};
  }
`;
const StyledFavoritesIcon = styled(FavoritesIcon)`
  path {
    stroke: ${COLOR.DARK};
  }
`;
const StyledCartIcon = styled(CartIcon)`
  path {
    stroke: ${COLOR.DARK};
  }
`;
const StyledAccountIcon = styled(AccountIcon)`
  path {
    stroke: ${COLOR.DARK};
  }
`;

const StyledBurgerMenuIcon = styled(BurgerMenuIcon)`
  cursor: pointer;
  path {
    fill: ${COLOR.DARK};
  }
`;

export {
  StyledNav,
  LinkGroup,
  StyledBurgerMenuIcon,
  StyledLogoIcon,
  StyledFavoritesIcon,
  StyledCartIcon,
  StyledAccountIcon,
};
