import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledErrorMessage = styled.p`
  width: 100%;
  padding: 16px;
  ${TYPOGRAPHY.B1}
  text-align: center;
  color: #ffffff;
  background: ${COLOR.RED};
`;

export { StyledErrorMessage };
