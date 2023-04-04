import styled from "styled-components";
import { StarIcon } from "assets";
import { COLOR } from "ui";

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

export { StyledFillStarIcon, StyledEmptyStarIcon };
