import styled from "styled-components";
import { MEDIA, TYPOGRAPHY } from "ui";

const StyledCartPage = styled.div<{ $isFilled: boolean }>`
  display: ${({ $isFilled }) => ($isFilled ? "grid" : "block")};
  grid-gap: 36px;
  align-content: start;
  ${MEDIA.MD} {
    grid-gap: 48px;
  }
`;

const CartEmpty = styled.p`
  padding-top: 8px;
  ${TYPOGRAPHY.B2}
  ${MEDIA.MD} {
    padding-top: 16px;
  }
`;

const CartContent = styled.div`
  display: grid;
  grid-gap: 36px;
  ${MEDIA.MD} {
    grid-gap: 48px;
  }
`;

const CartList = styled.ul`
  display: grid;
  grid-gap: 36px;
  ${MEDIA.MD} {
    grid-gap: 48px;
  }
`;

const TotalContainer = styled.div`
  justify-self: end;
  display: grid;
  grid-gap: 24px;
  width: 100%;
  ${MEDIA.SM} {
    width: clamp(272px, 100%, 328px);
  }
`;

const Check = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SummaryTitle = styled.span`
  ${TYPOGRAPHY.B2}
`;

const SummaryPrice = styled.span`
  ${TYPOGRAPHY.B1}
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalTitle = styled.span`
  ${TYPOGRAPHY.H2}
`;

const TotalPrice = styled.span`
  ${TYPOGRAPHY.H2}
`;

export {
  StyledCartPage,
  CartEmpty,
  CartContent,
  CartList,
  TotalContainer,
  Check,
  Summary,
  SummaryTitle,
  SummaryPrice,
  Total,
  TotalTitle,
  TotalPrice,
};
