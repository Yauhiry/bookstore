import { AccountForm, Header } from "components";
import { StyledAccountPage } from "./styles";

export const AccountPage = () => {
  return (
    <StyledAccountPage>
      <Header title="Account" />
      <AccountForm />
    </StyledAccountPage>
  );
};
