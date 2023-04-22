import styled from "styled-components";
import { MEDIA } from "ui";

const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  grid-gap: 36px;
  padding-top: 36px;
  ${MEDIA.MD} {
    padding-top: 48px;
  }
`;

export { StyledBookList };
