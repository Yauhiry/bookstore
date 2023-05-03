import styled from "styled-components";
import { SearchIcon } from "assets";
import { COLOR } from "ui";

const StyledSearchForm = styled.form`
  position: relative;
  justify-self: center;
  width: clamp(200px, 100%, 542px);
  background: ${COLOR.WHITE};
`;

const SearchButton = styled.button`
  position: absolute;
  display: flex;
  padding: 16px;
  top: 0;
  right: 0;
  background: none;
  color: ${COLOR.DARK};
`;

const StyledSearchIcon = styled(SearchIcon)`
  path {
    fill: ${COLOR.DARK};
  }
`;

export { StyledSearchForm, SearchButton, StyledSearchIcon };
