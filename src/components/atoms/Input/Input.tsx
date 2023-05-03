import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { ErrorMessage, InputContainer, Label, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<HTMLInputElement>;
  name: "name" | "email" | "password" | "searchValue" | "confirmPassword" | "newPassword";
  label?: string;
  className?: string;
  error?: string;
}

export const Input = ({
  className,
  id,
  name,
  placeholder,
  type,
  label,
  defaultValue,
  error,
  register,
}: InputProps) => {
  return (
    <InputContainer className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
