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
  top: 16px;
  right: 16px;
  background: none;
  color: ${COLOR.DARK};
`;

const StyledSearchIcon = styled(SearchIcon)`
  path {
    fill: ${COLOR.DARK};
  }
`;

export { StyledSearchForm, SearchButton, StyledSearchIcon };
