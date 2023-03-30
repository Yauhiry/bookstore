import styled from "styled-components";

const StyledSearchForm = styled.form`
  position: relative;
  justify-self: center;
  width: clamp(200px, 100%, 542px);
`;

const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
`;

export { StyledSearchForm, SearchButton };
