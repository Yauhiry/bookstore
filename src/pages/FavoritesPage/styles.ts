import styled from "styled-components";
import { MEDIA, TYPOGRAPHY } from "ui";

const StyledFavoritesPage = styled.div`
  display: grid;
  align-items: start;
  grid-gap: 56px;
  ${MEDIA.MD} {
    grid-gap: 72px;
  }
`;

const FavoritesContainer = styled.div<{ $isFilled: boolean }>`
  display: ${({ $isFilled }) => ($isFilled ? "grid" : "inline-block")};
  grid-gap: 36px;
  ${MEDIA.MD} {
    grid-gap: 48px;
  }
`;

const FavoritesEmpty = styled.p`
  padding-top: 8px;
  ${TYPOGRAPHY.B2}
  ${MEDIA.MD} {
    padding-top: 16px;
  }
`;

const FavoritesList = styled.ul`
  display: grid;
  grid-gap: 36px;
  ${MEDIA.MD} {
    grid-gap: 48px;
  }
`;

export { StyledFavoritesPage, FavoritesContainer, FavoritesEmpty, FavoritesList };
