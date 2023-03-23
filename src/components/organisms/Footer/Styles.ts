import styled from 'styled-components';
import { COLOR, TYPOGRAPHY } from 'ui';

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 0 35px;
  border-top: 1px solid ${COLOR.GRAY};
`;

export const Text = styled.span`
  ${TYPOGRAPHY.B2}
`;
