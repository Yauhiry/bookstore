import { ArrowLeftIcon } from "assets";
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "./styles";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <StyledBackButton onClick={handleBack}>
      <ArrowLeftIcon />
    </StyledBackButton>
  );
};
