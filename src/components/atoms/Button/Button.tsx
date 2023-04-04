import { StyledButton } from "./styles";

interface ButtonProps {
  type: "button" | "submit";
  text: string;
  onClick?: () => void;
}

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};
