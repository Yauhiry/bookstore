import styled from "styled-components";
import { MEDIA, TYPOGRAPHY } from "ui";

const StyledSearchPage = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-content: start;
`;

const FoundCounter = styled.p`
  padding-top: 8px;
  ${TYPOGRAPHY.B2}
  ${MEDIA.MD} {
    padding-top: 16px;
  }
`;

const Content = styled.div`
  display: grid;
  align-content: space-between;
  grid-gap: 56px;
  ${MEDIA.MD} {
    grid-gap: 72px;
  }
`;

export { StyledSearchPage, FoundCounter, Content };
