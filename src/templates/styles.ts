import styled from 'styled-components';

export const StyledMainTemplate = styled.div`
  display: grid;
  justify-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: clamp(320px, 100%, 1200px);
  min-height: 100vh;
  padding: 0 40px;
`;
