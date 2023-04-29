import { ScaleLoader } from "react-spinners";
import { StyledButton } from "./styles";
import { COLOR } from "ui";

interface ButtonProps {
  type: "button" | "submit";
  text: string;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({ type, text, loading, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}{" "}
      <ScaleLoader color={`${COLOR.WHITE}`} loading={loading ?? false} height={18} width={2} />
    </StyledButton>
  );
};
