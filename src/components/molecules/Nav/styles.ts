import styled from 'styled-components';
import { COLOR } from 'ui';

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 184px 1fr 184px;
  align-items: center;
  grid-gap: 40px;
  padding: 24px 0;
  border-bottom: 1px solid ${COLOR.GRAY};
`;

export const LinkGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-self: right;
  grid-gap: 40px;
  padding: 16px;
`;

export const Input = styled.input`
  justify-self: center;
  width: clamp(200px, 100%, 542px);
  padding: 10px 20px;
  font-size: 16px;
  line-height: 32px;
`;
