import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR, TYPOGRAPHY } from 'ui';

export const StyledBookItem = styled.li`
  max-width: 352px;
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
    box-shadow: 10px 10px 10px -10px #86878b;
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
`;

export const Image = styled.img`
  width: 100%;
  height: 254px;
  object-fit: contain;
  background: ${COLOR.BLUE};
`;

export const Title = styled.h3`
  ${TYPOGRAPHY.H3}
  display: -webkit-box;
  height: 84px;
  padding-top: 20px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Subtitle = styled.span`
  display: -webkit-box;
  ${TYPOGRAPHY.B2}
  height: 54px;
  padding-top: 8px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.span`
  ${TYPOGRAPHY.H3}
  padding-top: 16px;
`;
