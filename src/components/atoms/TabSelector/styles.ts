import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledTabSelector = styled.button<{ $isActive: boolean }>`
  padding: 0 24px 24px;
  ${TYPOGRAPHY.B2}
  background: none;
  ${MEDIA.MD} {
    padding: 0 40px 24px;
  }
  color: ${({ $isActive }) => $isActive && `${COLOR.DARK}`};
  box-shadow: ${({ $isActive }) => $isActive && `0px 2px 0px 0px ${COLOR.DARK}`};
`;

export { StyledTabSelector };
