import { MoonIcon, SunIcon } from "assets";
import styled from "styled-components";
import { COLOR } from "ui";

const StyledThemeButton = styled.button`
  display: grid;
  background: none;
  cursor: pointer;
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
