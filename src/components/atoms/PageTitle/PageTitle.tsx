import { StyledPageTitle } from "./temp";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return <StyledPageTitle>{title}</StyledPageTitle>;
};
