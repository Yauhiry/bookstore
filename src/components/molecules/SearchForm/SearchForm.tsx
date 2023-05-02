import { Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchButton, StyledSearchForm, StyledSearchIcon } from "./styles";
import { FormValue } from "types";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { setSearchValue, useAppDispatch } from "store";

interface SearchFormProps {
  isBurgerOpen?: boolean;
  toggleBurger: () => void;
}

export const SearchForm = ({ isBurgerOpen, toggleBurger }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<FormValue>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = ({ searchValue }: FormValue) => {
    if (searchValue) {
      navigate(generatePath(ROUTE.SEARCH, { searchValue, currentPage: "1" }));
      dispatch(setSearchValue(searchValue));
      isBurgerOpen && toggleBurger();
    }
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      <Input name="searchValue" type="text" placeholder="Search" register={register} />
      <SearchButton type="submit">
        <StyledSearchIcon />
      </SearchButton>
    </StyledSearchForm>
  );
};
