import { StyledErrorMessage } from "./styles";

interface ErrorMessageProps {
  errorMessage: string;
}

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <StyledErrorMessage>{errorMessage}</StyledErrorMessage>;
};
