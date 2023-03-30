import { SearchIcon } from "assets";
import { Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchButton, StyledSearchForm } from "./styles";
import { FormValue } from "types";

export const SearchForm = () => {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = ({ searchValue }: FormValue) => {};

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      <Input name="searchValue" type="text" placeholder="Search" register={register} />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </StyledSearchForm>
  );
};
