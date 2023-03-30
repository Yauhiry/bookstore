import { StyledButton } from "./styles";

interface ButtonProps {
  type: "button" | "submit";
  text: string;
}

export const Button = ({ type, text }: ButtonProps) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};
