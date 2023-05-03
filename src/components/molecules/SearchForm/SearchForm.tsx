import { Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchButton, StyledSearchForm, StyledSearchIcon } from "./styles";
import { SearchValue } from "types";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { setSearchValue, useAppDispatch } from "store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    searchValue: yup.string().required(),
  })
  .required();
type ValidationForm = yup.InferType<typeof schema>;

interface SearchFormProps {
  isBurgerOpen?: boolean;
  toggleBurger: () => void;
}

export const SearchForm = ({ isBurgerOpen, toggleBurger }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<ValidationForm>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SearchValue> = ({ searchValue }) => {
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
