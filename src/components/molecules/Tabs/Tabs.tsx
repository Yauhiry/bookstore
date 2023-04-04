import { TabSelector } from "components";
import { NavTabs, StyledTabPanel, StyledTabs, TabPanels } from "./styles";
import { useTabs } from "react-headless-tabs";

interface TabsProps {
  description: string;
  authors: string;
}

export const Tabs = ({ description, authors }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useTabs(["description", "authors"]);

  return (
    <StyledTabs>
      <NavTabs>
        <TabSelector
          isActive={selectedTab === "description"}
          onClick={() => setSelectedTab("description")}
        >
          Description
        </TabSelector>
        <TabSelector isActive={selectedTab === "authors"} onClick={() => setSelectedTab("authors")}>
          Authors
        </TabSelector>
      </NavTabs>
      <TabPanels>
        <StyledTabPanel
          hidden={selectedTab !== "description"}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <StyledTabPanel hidden={selectedTab !== "authors"}>{authors}</StyledTabPanel>
      </TabPanels>
    </StyledTabs>
  );
};
