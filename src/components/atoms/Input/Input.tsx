import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValue } from "types";
import { InputContainer, Label, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FormValue>;
  name: "name" | "email" | "password" | "searchValue" | "confirmPassword" | "newPassword";
  label?: string;
  className?: string;
}

export const Input = ({
  className,
  id,
  name,
  placeholder,
  type,
  label,
  defaultValue,
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
    </InputContainer>
  );
};
