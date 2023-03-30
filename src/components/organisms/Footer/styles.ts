import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 0 35px;
  border-top: 1px solid ${COLOR.GRAY};
`;

const Text = styled.span`
  ${TYPOGRAPHY.B2}
`;

export { StyledFooter, Text };
