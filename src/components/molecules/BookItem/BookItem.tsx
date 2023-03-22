import { ROUTE } from 'router';
import { Book } from 'types';
import { StyledBookItem, StyledLink, Image, Title, Subtitle, Price } from './styles';

interface BookItemProps {
  book: Book;
}

export const BookItem = ({ book: { image, title, subtitle, price, url } }: BookItemProps) => {
  return (
    <StyledBookItem>
      <StyledLink to={ROUTE.BOOK}>
        <Image src={image} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Price>{price}</Price>
      </StyledLink>
    </StyledBookItem>
  );
};
