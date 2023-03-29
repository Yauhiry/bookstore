import { Header } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectBookDetails, useAppDispatch, useAppSelector } from 'store';
import { fetchBookDetails } from 'store/features/detailsBookSlice';
import { BookDetails, StyledBookPage, Image, BookInfo, Button, Left } from './styles';

export const BookPage = () => {
  const { book } = useAppSelector(selectBookDetails);
  const { isbn13 } = useParams();
  const dispatch = useAppDispatch();

  const { title, image } = book;

  useEffect(() => {
    isbn13 && dispatch(fetchBookDetails({ isbn13 }));
  }, [dispatch, isbn13]);

  return (
    <StyledBookPage>
      <Header title={title} />
      <BookDetails>
        <Left>
          <Image src={image} />
        </Left>
        <BookInfo>
          <Button>Add to cart</Button>
        </BookInfo>
      </BookDetails>
    </StyledBookPage>
  );
};
