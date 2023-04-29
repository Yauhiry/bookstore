import styled from "styled-components";
import { TYPOGRAPHY } from "ui";

const StyledLabel = styled.label`
  padding: 16px 0 8px;
  ${TYPOGRAPHY.B1}
  font-weight: 600;
  &:first-child {
    padding: 0 0 8px;
  }
`;

export { StyledLabel };
