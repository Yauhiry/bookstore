import { StyledTabSelector } from "./styles";

interface TabSelectorProps {
  className?: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const TabSelector = ({ className, isActive, children, onClick }: TabSelectorProps) => (
  <StyledTabSelector className={className} onClick={onClick} $isActive={isActive}>
    {children}
  </StyledTabSelector>
);
