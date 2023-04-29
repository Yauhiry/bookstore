import { ScaleLoader } from "react-spinners";
import { StyledPageLoader } from "./styles";
import { COLOR } from "ui";

export const PageLoader = () => {
  return (
    <StyledPageLoader>
      <ScaleLoader loading={true} color={`${COLOR.DARK}`} width={5} height={60} margin={4} />
    </StyledPageLoader>
  );
};
