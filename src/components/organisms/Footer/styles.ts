import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledFooter = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 24px;
  padding: 40px 0;
  border-top: 1px solid ${COLOR.GRAY};
  ${MEDIA.SM} {
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 35px 0;
  }
`;

const Text = styled.span`
  ${TYPOGRAPHY.B2}
`;

export { StyledFooter, Text };
