import styled from "styled-components";
import { MEDIA, TYPOGRAPHY } from "ui";

const StyledSearchPage = styled.div``;

const FoundCounter = styled.p`
  padding-top: 8px;
  ${TYPOGRAPHY.B2}
  ${MEDIA.MD} {
    padding-top: 16px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 56px;
`;

export { StyledSearchPage, FoundCounter, Content };
