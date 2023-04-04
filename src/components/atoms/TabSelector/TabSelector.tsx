import { StyledTabSelector } from "./styles";

interface TabSelectorProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const TabSelector = ({ isActive, children, onClick }: TabSelectorProps) => (
  <StyledTabSelector onClick={onClick} $isActive={isActive}>
    {children}
  </StyledTabSelector>
);
