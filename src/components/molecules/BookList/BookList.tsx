import { Book } from 'types';
import { BookItem } from '../BookItem/BookItem';
import { StyledBookList } from './styles';

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <StyledBookList>
      {books.map((book) => {
        return <BookItem book={book} key={book.isbn13} />;
      })}
    </StyledBookList>
  );
};
