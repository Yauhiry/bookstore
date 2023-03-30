import styled from "styled-components";

const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  grid-gap: 36px;
  padding-top: 36px;
`;

export { StyledBookList };
