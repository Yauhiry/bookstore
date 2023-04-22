import styled from "styled-components";
import { COLOR, MEDIA } from "ui";

const StyledMainTemplate = styled.div`
  display: grid;
  justify-items: center;
  background: ${COLOR.WHITE};
`;

const Container = styled.div`
  display: grid;
  grid-gap: 56px;
  grid-template-rows: auto 1fr auto;
  width: clamp(320px, 100%, 1200px);
  min-height: 100vh;
  padding: 0 24px;
  ${MEDIA.MD} {
    grid-gap: 72px;
    padding: 0 40px;
  }
`;

export { StyledMainTemplate, Container };
