import { AccountForm, Button, Header } from "components";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchSignOutUser, useAppDispatch } from "store";
import { StyledAccountPage } from "./styles";

export const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    navigate(ROUTE.SIGN_IN);
  };

  const handleClick = () => {
    dispatch(fetchSignOutUser());
  };

  return (
    <StyledAccountPage>
      <Header title="Account" />
      <AccountForm />
      <Button onClick={handleNavigate} text="sign in" type="button" />
      <Button onClick={handleClick} text="exit" type="button" />
    </StyledAccountPage>
  );
};
