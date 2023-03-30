import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValue } from "types";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FormValue>;
  name: "searchValue" | "subscribeEmail";
}

export const Input = ({ name, placeholder, type, register }: InputProps) => {
  return <StyledInput type={type} placeholder={placeholder} {...register(name)} />;
};
