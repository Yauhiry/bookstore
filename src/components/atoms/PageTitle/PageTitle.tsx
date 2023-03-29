import { StyledPageTitle } from './styles';

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return <StyledPageTitle>{title}</StyledPageTitle>;
};
