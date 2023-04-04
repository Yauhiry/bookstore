import { PageTitle } from "components";

import { StyledArrowLeftIcon, StyledHeader } from "./styles";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <StyledHeader>
      <StyledArrowLeftIcon onClick={handleBack} />
      <PageTitle title={title} />
    </StyledHeader>
  );
};
