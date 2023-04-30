import styled from "styled-components";
import { MEDIA } from "ui";

const StyledAccountPage = styled.div`
  display: grid;
  align-content: start;
  grid-gap: 36px;
  ${MEDIA.MD} {
    grid-gap: 48px;
  }
`;

export { StyledAccountPage };
