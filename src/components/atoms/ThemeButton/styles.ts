import { MoonIcon, SunIcon } from "assets";
import styled from "styled-components";
import { COLOR } from "ui";

const StyledThemeButton = styled.button`
  display: grid;
  background: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledMoonIcon = styled(MoonIcon)`
  path {
    stroke: ${COLOR.DARK};
  }
`;

const StyledSunIcon = styled(SunIcon)`
  path {
    fill: ${COLOR.DARK};
  }
`;

export { StyledThemeButton, StyledMoonIcon, StyledSunIcon };
