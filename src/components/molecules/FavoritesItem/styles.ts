import { FavoritesIcon } from "assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledFavoriteItem = styled.li`
  position: relative;
  display: grid;
  padding-bottom: 36px;
  border-bottom: 1px solid ${COLOR.GRAY};
  ${MEDIA.SM} {
    grid-template-columns: minmax(148px, 208px) minmax(285px, 1fr);
    padding-bottom: 48px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 254px;
  object-fit: contain;
  background: ${COLOR.BLUE};
  ${MEDIA.SM} {
    height: 174px;
  }
  ${MEDIA.LG} {
    height: 156px;
  }
`;

const Info = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  ${MEDIA.SM} {
    padding-left: 32px;
  }
  ${MEDIA.LG} {
    grid-template-columns: 352px 1fr;
    padding: 0 32px;
  }
`;

const StyledLink = styled(Link)`
  display: -webkit-box;
  ${TYPOGRAPHY.H3}
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${MEDIA.LG} {
    -webkit-line-clamp: 1;
  }
`;

const Title = styled.div`
  justify-self: start;
  grid-area: 1/1/2/3;
  height: 80px;
  padding-top: 20px;
  ${MEDIA.SM} {
    padding: 16px 64px 0 0;
  }
  ${MEDIA.LG} {
    padding-right: 30px;
    height: auto;
  }
`;

const Subtitle = styled.span`
  display: -webkit-box;
  grid-area: 2/1/3/3;
  height: 54px;
  ${TYPOGRAPHY.B2}
  padding-top: 8px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${MEDIA.LG} {
    padding-right: 30px;
  }
`;

const PriceAndRatingWrapper = styled.div`
  grid-area: 3/1/4/2;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  ${MEDIA.SM} {
    padding-top: 8px;
  }
`;

const Price = styled.span`
  grid-area: 3/1/4/2;
  justify-self: start;
  ${TYPOGRAPHY.H3}
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 16px;
  background: ${COLOR.DARK};
  transition: 0.2s;
  ${MEDIA.SM} {
    background: none;
  }
  ${MEDIA.LG} {
    top: 24%;
  }
`;

const StyledFavoritesIcon = styled(FavoritesIcon)`
  fill: ${COLOR.RED};
  path {
    stroke: ${COLOR.RED};
  }
  ${RemoveButton}:hover & {
    fill: none;
    path {
      stroke: ${COLOR.RED};
    }
  }
`;

export {
  StyledFavoriteItem,
  Image,
  Info,
  StyledLink,
  Title,
  Subtitle,
  PriceAndRatingWrapper,
  Price,
  RemoveButton,
  StyledFavoritesIcon,
};
