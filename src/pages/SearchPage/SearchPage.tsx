import { BookList, PageTitle } from "components";
import { StyledSearchPage } from "./styles";
import { fetchSearchBooks, selectSearchBooks, useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";

export const SearchPage = () => {
  const { searchValue, books } = useAppSelector(selectSearchBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSearchBooks(searchValue));
  }, [dispatch, searchValue]);

  return (
    <StyledSearchPage>
      <PageTitle
        title={books.length > 0 ? `‘${searchValue}’ Search results` : "No Search results"}
      />
      <BookList books={books} />
    </StyledSearchPage>
  );
};
