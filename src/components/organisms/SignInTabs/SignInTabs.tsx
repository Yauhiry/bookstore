import { SignInForm, SignUpForm } from "components";
import { NavTabs, StyledTabPanel, SignInTabSelector, StyledTabs, TabPanels } from "./styles";
import { useTabs } from "react-headless-tabs";

export const SignInTabs = () => {
  const [selectedTab, setSelectedTab] = useTabs(["signIn", "signUp"]);

  return (
    <StyledTabs>
      <NavTabs>
        <SignInTabSelector
          isActive={selectedTab === "signIn"}
          onClick={() => setSelectedTab("signIn")}
        >
          Sign In
        </SignInTabSelector>
        <SignInTabSelector
          isActive={selectedTab === "signUp"}
          onClick={() => setSelectedTab("signUp")}
        >
          Sign Up
        </SignInTabSelector>
      </NavTabs>
      <TabPanels>
        <StyledTabPanel hidden={selectedTab !== "signIn"}>
          <SignInForm />
        </StyledTabPanel>
        <StyledTabPanel hidden={selectedTab !== "signUp"}>
          <SignUpForm />
        </StyledTabPanel>
      </TabPanels>
    </StyledTabs>
  );
};
