import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchSignOutUser, useAppDispatch } from "store";

export const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    return navigate(ROUTE.SIGN_IN);
  };

  const handleClick = () => {
    dispatch(fetchSignOutUser());
  };

  return (
    <div>
      <Button onClick={handleNavigate} text={"sign in"} type="button" />
      <Button onClick={handleClick} text="exit" type="button" />
    </div>
  );
};
