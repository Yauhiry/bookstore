import { ROUTE } from "router";
import { LogOutButton, StyledAccountMenu, StyledLink } from "./styles";
import { fetchSignOutUser, useAppDispatch } from "store";

interface AccountMenuProps {
  toggleAccountMenu: () => void;
  isAccountMenuOpen: boolean;
}

export const AccountMenu = ({ toggleAccountMenu }: AccountMenuProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchSignOutUser());
    toggleAccountMenu();
  };

  return (
    <StyledAccountMenu>
      <StyledLink to={ROUTE.ACCOUNT} onClick={toggleAccountMenu}>
        Account settings
      </StyledLink>
      <LogOutButton onClick={handleClick} type="button">
        Log out
      </LogOutButton>
    </StyledAccountMenu>
  );
};
