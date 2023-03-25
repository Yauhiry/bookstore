import styled from 'styled-components';
import { COLOR, TYPOGRAPHY } from 'ui';

export const StyledSearchForm = styled.form`
  position: relative;
  justify-self: center;
  width: clamp(200px, 100%, 542px);
`;
export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 60px 10px 20px;
  ${TYPOGRAPHY.B1};
  border: 1px solid ${COLOR.GRAY};
  &::placeholder {
    ${TYPOGRAPHY.B2}
  }
  &:focus {
    outline: 1px solid ${COLOR.GRAY};
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 32px;
`;
