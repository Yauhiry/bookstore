import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { Book } from "types";
import { StyledBookItem, StyledLink, Image, Title, Subtitle, Price } from "./styles";

interface BookItemProps {
  book: Book;
}

export const BookItem = ({ book: { image, title, subtitle, price, isbn13 } }: BookItemProps) => {
  return (
    <StyledBookItem>
      <StyledLink to={generatePath(ROUTE.BOOK, { isbn13 })}>
        <Image src={image} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Price>{price === "$0.00" ? "free" : price}</Price>
      </StyledLink>
    </StyledBookItem>
  );
};
