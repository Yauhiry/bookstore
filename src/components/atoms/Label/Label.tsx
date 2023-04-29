import { StyledLabel } from "./styles";

interface LabelProps {
  id: string;
  label: string;
}

export const Label = ({ id, label }: LabelProps) => {
  return <StyledLabel htmlFor={id}>{label}</StyledLabel>;
};
