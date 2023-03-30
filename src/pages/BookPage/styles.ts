import styled from "styled-components";
import { COLOR } from "ui";

const StyledBookPage = styled.div``;

const BookDetails = styled.div`
  display: grid;
  grid-template-columns: 6.038fr 4.9723fr;
  grid-gap: 128px;
  padding-top: 48px;
`;

const Left = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 472px;
  object-fit: contain;
  background: ${COLOR.ORANGE};
`;

const BookInfo = styled.div`
  width: clamp(200px 100% 448px);
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
`;

export { StyledBookPage, BookDetails, Left, Image, BookInfo, Button };
