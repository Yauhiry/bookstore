import styled from 'styled-components';
import { COLOR } from 'ui';

export const StyledBookPage = styled.div``;

export const BookDetails = styled.div`
  display: grid;
  grid-template-columns: 6.038fr 4.9723fr;
  grid-gap: 128px;
  padding-top: 48px;
`;

export const Left = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 472px;
  object-fit: contain;
  background: ${COLOR.ORANGE};
`;

export const BookInfo = styled.div`
  width: clamp(200px 100% 448px);
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
`;
