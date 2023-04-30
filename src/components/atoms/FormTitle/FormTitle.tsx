import { StyledFormTitle } from "./styles";

interface FormTitleProps {
  text: string;
}

export const FormTitle = ({ text }: FormTitleProps) => {
  return <StyledFormTitle>{text}</StyledFormTitle>;
};
