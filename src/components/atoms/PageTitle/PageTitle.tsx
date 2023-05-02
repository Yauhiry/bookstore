import { StyledPageTitle } from "./styles";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <StyledPageTitle initial={{ y: "50%", opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      {title}
    </StyledPageTitle>
  );
};
