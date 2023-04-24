import { generatePath } from "react-router-dom";
import {
  StyledFavoriteItem,
  Image,
  Info,
  StyledLink,
  Title,
  Subtitle,
  Price,
  RemoveButton,
  StyledFavoritesIcon,
  PriceAndRatingWrapper,
} from "./styles";
import { ROUTE } from "router";
import { BookDetails } from "types";
import { StarsRating } from "components";
import { useAppDispatch } from "store";
import { removeFavorite } from "store/features/favoritesSlice";

interface FavoritesItemProps {
  book: BookDetails;
}

export const FavoritesItem = ({
  book: { image, title, subtitle, price, isbn13, rating },
}: FavoritesItemProps) => {
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeFavorite(isbn13));
  };

  return (
    <StyledFavoriteItem>
      <Image src={image} alt={title} />
      <Info>
        <Title>
          <StyledLink to={generatePath(ROUTE.BOOK, { isbn13 })}>{title}</StyledLink>
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <PriceAndRatingWrapper>
          <Price>{price === "$0.00" ? "free" : price}</Price>
          <StarsRating rating={rating} />
        </PriceAndRatingWrapper>
      </Info>
      <RemoveButton onClick={handleRemove}>
        <StyledFavoritesIcon />
      </RemoveButton>
    </StyledFavoriteItem>
  );
};
