import { AccountIcon, BurgerMenuIcon, CartIcon, DotBadge, FavoritesIcon, LogoIcon } from "assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA } from "ui";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  background: ${COLOR.WHITE};
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

const StyledLink = styled(Link)`
  position: relative;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
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

const AccountButton = styled.button`
  display: flex;
  transition: 0.2s;
  background: none;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledAccountIcon = styled(AccountIcon)`
  path {
    stroke: ${COLOR.DARK};
  }
`;

const StyledDotBadge = styled(DotBadge)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  circle {
    stroke: ${COLOR.WHITE};
  }
`;

const StyledBurgerMenuIcon = styled(BurgerMenuIcon)`
  cursor: pointer;
  path {
    fill: ${COLOR.DARK};
  }
`;

const AnimationBurgerMenu = styled(motion(BurgerMenu))``;

export {
  StyledNav,
  LinkGroup,
  StyledLink,
  AccountButton,
  StyledBurgerMenuIcon,
  StyledLogoIcon,
  StyledFavoritesIcon,
  StyledCartIcon,
  StyledAccountIcon,
  StyledDotBadge,
  AnimationBurgerMenu,
};
