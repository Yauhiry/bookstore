import { BookList, PageTitle } from 'components';
import { useEffect } from 'react';
import { fetchNewBooks, selectNewBooks, useAppDispatch, useAppSelector } from 'store';

export const HomePage = () => {
  const { books } = useAppSelector(selectNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <div>
      <PageTitle title="New Releases Books" />
      <BookList books={books} />
    </div>
  );
};
