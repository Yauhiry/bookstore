import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 60px 14px 20px;
  ${TYPOGRAPHY.B1};
  background: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY};
  caret-color: ${COLOR.DARK};
  &::placeholder {
    ${TYPOGRAPHY.B2}
  }
  &:focus {
    outline: 1px solid ${COLOR.GRAY};
  }
  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px ${COLOR.WHITE} !important;
    -webkit-text-fill-color: ${COLOR.DARK} !important;
  }
`;

export { StyledInput };
