import { StyledFormTitle } from "./styles";

interface FormTitleProps {
  text: string;
  className?: string;
}

export const FormTitle = ({ className, text }: FormTitleProps) => {
  return <StyledFormTitle className={className}>{text}</StyledFormTitle>;
};
