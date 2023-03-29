import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<HTMLInputElement>;
  name: 'searchValue';
}

export const Input = ({ name, placeholder, type, register }: InputProps) => {
  return <StyledInput type={type} placeholder={placeholder} {...register(name)} />;
};
