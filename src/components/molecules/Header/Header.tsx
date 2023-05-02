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
      <StyledArrowLeftIcon
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        onClick={handleBack}
      />
      <PageTitle title={title} />
    </StyledHeader>
  );
};
