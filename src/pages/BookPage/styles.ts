import { DropdownChevronIcon } from "assets";
import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledBookPage = styled.div`
  display: grid;
  grid-gap: 48px;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 72px;
`;

const BookDetails = styled.div`
  display: grid;
  grid-gap: 48px 128px;
  ${MEDIA.XL} {
    grid-template-columns: 6.038fr 4.9723fr;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 472px;
  aspect-ratio: 1/1;
  object-fit: contain;
  background: ${COLOR.ORANGE};
`;

const BookInfo = styled.div`
  display: grid;
  flex-direction: column;
  align-content: space-between;
  grid-gap: 25px;
  width: clamp(200px 100% 448px);
  border-top: 1px solid ${COLOR.GRAY};
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 41px 0 24px;
`;

const Price = styled.span`
  ${TYPOGRAPHY.H2}
`;

const DetailsList = styled.div`
  display: grid;
`;

const MoreWrapper = styled.div`
  padding-top: 16px;
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  ${TYPOGRAPHY.B1}
  background: none;
  cursor: pointer;
`;

const StyledDropdownChevronIcon = styled(DropdownChevronIcon)`
  padding: 0 8px;
  path {
    stroke: ${COLOR.DARK};
  }
`;

export {
  StyledBookPage,
  Container,
  BookDetails,
  Image,
  PriceWrapper,
  Price,
  BookInfo,
  DetailsList,
  MoreWrapper,
  MoreButton,
  StyledDropdownChevronIcon,
};
