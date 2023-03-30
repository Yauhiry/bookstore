import { BookList, PageTitle, SubscribeForm } from "components";
import { useEffect } from "react";
import { fetchNewBooks, selectNewBooks, useAppDispatch, useAppSelector } from "store";
import { Container, StyledHomePage } from "./styles";

export const HomePage = () => {
  const { books } = useAppSelector(selectNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <StyledHomePage>
      <PageTitle title="New Releases Books" />
      <Container>
        <BookList books={books} />
        <SubscribeForm />
      </Container>
    </StyledHomePage>
  );
};
