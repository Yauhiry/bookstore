import { useEffect } from 'react';
import { fetchNewBooks, useAppDispatch } from 'store';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return <div>HomePage</div>;
};
