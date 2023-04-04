import styled from "styled-components";
import { MEDIA, TYPOGRAPHY } from "ui";

const StyledDetailItem = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  gap: 0 50px;
  padding-bottom: 4px;
  ${MEDIA.SM} {
    grid-template-columns: repeat(2, auto);
  }
`;

const DetailName = styled.span`
  ${TYPOGRAPHY.B2}
`;

const DetailValue = styled.span`
  display: -webkit-box;
  ${TYPOGRAPHY.B1}
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export { StyledDetailItem, DetailName, DetailValue };
