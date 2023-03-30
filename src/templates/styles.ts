import styled from "styled-components";

const StyledMainTemplate = styled.div`
  display: grid;
  justify-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 72px;
  grid-template-rows: auto 1fr auto;
  width: clamp(320px, 100%, 1200px);
  min-height: 100vh;
  padding: 0 40px;
`;

export { StyledMainTemplate, Container };
