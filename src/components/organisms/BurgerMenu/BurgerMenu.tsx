import { ROUTE } from "router";
import {
  CloseButton,
  Container,
  Content,
  CustomLink,
  Head,
  LinkGroup,
  StyledBurgerMenu,
  StyledButton,
  StyledCrossIcon,
  StyledDotBadge,
} from "./styles";
import { SearchForm } from "components";
import { useBodyScrollLock } from "hooks";
import {
  fetchSignOutUser,
  selectCart,
  selectFavorites,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "store";
import { useNavigate } from "react-router-dom";

interface BurgerMenuProps {
  isOpenMenu: boolean;
  toggleMenu: () => void;
  isTablet: boolean;
  isMobile: boolean;
}

const burgerMenu = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.1 } },
};

const container = {
  hidden: {
    opacity: 1,
    x: "100%",
  },
  visible: {
    x: 0,
    transition: { delay: 0.1, stragger: 1000, delayChildren: 0.1, staggerChildren: 0.2 },
  },
  exit: {
    opacity: 1,
    x: "100%",
    transition: { stragger: 1000 },
  },
};

const item = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: { opacity: 0 },
};

export const BurgerMenu = ({ isOpenMenu, toggleMenu, isMobile }: BurgerMenuProps) => {
  useBodyScrollLock();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cartItems } = useAppSelector(selectCart);
  const { favorites } = useAppSelector(selectFavorites);
  const { isAuth } = useAppSelector(selectUser);

  const handleClick = () => {
    toggleMenu();
    isAuth ? dispatch(fetchSignOutUser()) : navigate(ROUTE.SIGN_IN);
  };

  return (
    <StyledBurgerMenu
      initial="hidden"
      animate={isOpenMenu ? "visible" : "exit"}
      exit="exit"
      variants={burgerMenu}
    >
      <Container
        initial="hidden"
        animate={isOpenMenu ? "visible" : "exit"}
        exit="exit"
        variants={container}
      >
        {!isMobile && (
          <Head>
            <CloseButton onClick={toggleMenu}>
              <StyledCrossIcon />
            </CloseButton>
          </Head>
        )}
        <Content>
          <LinkGroup>
            <SearchForm isBurgerOpen={isOpenMenu} toggleBurger={toggleMenu} />
            {isAuth && (
              <CustomLink variants={item} to={ROUTE.FAVORITES} onClick={toggleMenu}>
                Favorites{favorites.length > 0 && <StyledDotBadge />}
              </CustomLink>
            )}
            <CustomLink variants={item} to={ROUTE.CART} onClick={toggleMenu}>
              Cart{cartItems.length > 0 && <StyledDotBadge />}
            </CustomLink>
          </LinkGroup>
        </Content>
        <StyledButton type="button" text={isAuth ? "Log out" : "Sign in"} onClick={handleClick} />
      </Container>
    </StyledBurgerMenu>
  );
};
