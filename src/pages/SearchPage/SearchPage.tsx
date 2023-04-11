import { BookList, PageTitle, Pagination } from "components";
import { Content, StyledSearchPage } from "./styles";
import { fetchSearchBooks, selectSearchBooks, useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const SearchPage = () => {
  const { searchValue, books, total, page } = useAppSelector(selectSearchBooks);
  const { currentPage } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    currentPage && dispatch(fetchSearchBooks({ searchValue, currentPage }));
  }, [dispatch, searchValue, currentPage]);

  return (
    <StyledSearchPage>
      <PageTitle
        title={books.length > 0 ? `‘${searchValue}’ Search results` : "No Search results"}
      />
      <Content>
        {books.length > 0 && <BookList books={books} />}
        {+total > 10 && <Pagination page={page} total={total} />}
      </Content>
    </StyledSearchPage>
  );
};
