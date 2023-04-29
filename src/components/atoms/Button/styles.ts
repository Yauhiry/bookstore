import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 16px 0;
  ${TYPOGRAPHY.S1}
  background-color: ${COLOR.DARK};
  transition: 0.2s;
  &:hover {
    background-color: ${COLOR.MEDIUM};
  }
`;

export { StyledButton };
