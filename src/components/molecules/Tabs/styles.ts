import styled from "styled-components";
import { TabPanel } from "react-headless-tabs";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledTabs = styled.div``;

const NavTabs = styled.nav``;

const TabPanels = styled.div`
  padding-top: 48px;
  border-top: 1px solid ${COLOR.GRAY};
`;

const StyledTabPanel = styled(TabPanel)`
  ${TYPOGRAPHY.B1}
`;

export { StyledTabs, NavTabs, TabPanels, StyledTabPanel };
