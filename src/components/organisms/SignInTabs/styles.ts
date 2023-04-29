import styled from "styled-components";
import { TabPanel } from "react-headless-tabs";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";
import { TabSelector } from "components";

const StyledTabs = styled.div`
  width: clamp(270px, 100%, 544px);
  ${MEDIA.SM} {
    border: 1px solid ${COLOR.GRAY};
  }
`;

const NavTabs = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 45.6%);
  justify-content: space-between;
  ${MEDIA.SM} {
    padding: 26px 32px 0;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SignInTabSelector = styled(TabSelector)`
  font-family: "Bebas Neue";
  text-transform: uppercase;
  font-size: 24px;
`;

const TabPanels = styled.div`
  padding-top: 32px;
  border-top: 1px solid ${COLOR.GRAY};
  ${MEDIA.SM} {
    padding: 32px 32px 40px;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  ${TYPOGRAPHY.B1}
`;

export { StyledTabs, NavTabs, SignInTabSelector, TabPanels, StyledTabPanel };
