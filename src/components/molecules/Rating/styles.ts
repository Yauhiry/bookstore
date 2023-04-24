import styled from "styled-components";
import { StarIcon } from "assets";
import { COLOR } from "ui";
import { Rating } from "react-simple-star-rating";

const StyledRating = styled(Rating)`
  svg {
    padding: 6px 5px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

const StyledFillStarIcon = styled(StarIcon)`
  path {
    fill: ${COLOR.DARK};
  }
`;

const StyledEmptyStarIcon = styled(StarIcon)`
  path {
    fill: ${COLOR.LIGHT};
  }
`;

export { StyledFillStarIcon, StyledEmptyStarIcon, StyledRating };
