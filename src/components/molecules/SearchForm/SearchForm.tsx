import { SearchIcon } from 'assets';
import { SearchButton, SearchInput, StyledSearchForm } from './Styles';

export const SearchForm = () => {
  return (
    <StyledSearchForm>
      <SearchInput placeholder="Search" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </StyledSearchForm>
  );
};
