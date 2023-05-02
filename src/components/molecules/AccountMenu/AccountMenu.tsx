import { ROUTE } from "router";
import { LogOutButton, StyledAccountMenu, StyledLink } from "./styles";
import { fetchSignOutUser, useAppDispatch } from "store";
import { AnimatePresence } from "framer-motion";

interface AccountMenuProps {
  toggleAccountMenu: () => void;
  isAccountMenuOpen: boolean;
}

const container = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: 1 } },
};

const item = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: { y: "-100%", opacity: 0 },
};

export const AccountMenu = ({ isAccountMenuOpen, toggleAccountMenu }: AccountMenuProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchSignOutUser());
    toggleAccountMenu();
  };

  return (
    <AnimatePresence>
      {isAccountMenuOpen && (
        <StyledAccountMenu
          initial="hidden"
          animate={isAccountMenuOpen ? "visible" : "exit"}
          exit="exit"
          variants={container}
        >
          <StyledLink variants={item} to={ROUTE.ACCOUNT} onClick={toggleAccountMenu}>
            Account settings
          </StyledLink>
          <LogOutButton variants={item} onClick={handleClick} type="button">
            Log out
          </LogOutButton>
        </StyledAccountMenu>
      )}
    </AnimatePresence>
  );
};
