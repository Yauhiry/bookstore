import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 60px 10px 20px;
  ${TYPOGRAPHY.B1};
  background: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY};
  &::placeholder {
    ${TYPOGRAPHY.B2}
  }
  &:focus {
    outline: 1px solid ${COLOR.GRAY};
  }
`;

export { StyledInput };
