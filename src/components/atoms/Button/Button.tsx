import { ScaleLoader } from "react-spinners";
import { StyledButton } from "./styles";
import { COLOR } from "ui";

interface ButtonProps {
  className?: string;
  type: "button" | "submit";
  text: string;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({ className, type, text, loading, onClick }: ButtonProps) => {
  return (
    <StyledButton whileTap={{ scale: 0.96 }} className={className} onClick={onClick} type={type}>
      {text}{" "}
      <ScaleLoader color={`${COLOR.WHITE}`} loading={loading ?? false} height={18} width={2} />
    </StyledButton>
  );
};
