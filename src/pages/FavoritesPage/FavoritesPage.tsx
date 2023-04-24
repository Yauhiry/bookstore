import { FavoritesItem, Header } from "components";
import { FavoritesContainer, FavoritesEmpty, FavoritesList, StyledFavoritesPage } from "./styles";
import { selectFavorites, useAppSelector } from "store";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(selectFavorites);

  return (
    <StyledFavoritesPage>
      <FavoritesContainer $isFilled={favorites.length > 0}>
        <Header title="Favorites" />
        {!favorites.length ? (
          <FavoritesEmpty>is currently empty</FavoritesEmpty>
        ) : (
          <FavoritesList>
            {favorites.map((book) => {
              return <FavoritesItem key={book.isbn13} book={book} />;
            })}
          </FavoritesList>
        )}
      </FavoritesContainer>
    </StyledFavoritesPage>
  );
};
