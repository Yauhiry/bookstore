import { PageTitle } from 'components';
import { useEffect } from 'react';
import { selectNewBooks } from 'selectors';
import { fetchNewBooks, useAppDispatch, useAppSelector } from 'store';

export const HomePage = () => {
  const { books } = useAppSelector(selectNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <div>
      <PageTitle text="New Releases Books" />
    </div>
  );
};
