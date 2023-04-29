import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValue } from "types";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FormValue>;
  name: "name" | "email" | "password" | "searchValue" | "confirmPassword";
}

export const Input = ({ id, name, placeholder, type, register }: InputProps) => {
  return <StyledInput id={id} type={type} placeholder={placeholder} {...register(name)} />;
};
