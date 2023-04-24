import styled from "styled-components";
import ResponsivePagination from "react-responsive-pagination";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";
import { ArrowUpIcon } from "assets";
import { Link } from "react-router-dom";

const StyledPagination = styled.div`
  display: grid;
  grid-template-columns: 65px minmax(0, 450px) 65px;
  justify-content: space-between;
  position: relative;
  padding-top: 36px;
  border-top: 1px solid ${COLOR.GRAY};
  ${MEDIA.SM} {
    grid-template-columns: 100px minmax(0, 450px) 100px;
  }
  ${MEDIA.MD} {
    padding-top: 48px;
  }
`;

const ResponsivePaginationContainer = styled.div`
  width: 100%;
`;
const StyledResponsivePagination = styled(ResponsivePagination)`
  display: flex;
  justify-content: center;

  .page-item .page-link {
    position: relative;
    display: block;
    margin: 0 10px;
    ${TYPOGRAPHY.B2};
  }

  .page-item.active .page-link {
    ${TYPOGRAPHY.B1}
    font-weight: 600;
  }

  .page-item.disabled .page-link {
    ${TYPOGRAPHY.B2}
    pointer-events: none;
    cursor: auto;
  }
  .page-link:hover {
    ${TYPOGRAPHY.B1}
    font-weight: 600;
  }
`;

const PreviousPageLink = styled(Link)<{ $isActive: boolean }>`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  ${({ $isActive }) => ($isActive ? TYPOGRAPHY.B1 : TYPOGRAPHY.B2)};
  font-weight: 600;
  background: none;
  pointer-events: ${({ $isActive }) => !$isActive && "none"};
`;

const NextPageLink = styled(Link)<{ $isActive: boolean }>`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  ${({ $isActive }) => ($isActive ? TYPOGRAPHY.B1 : TYPOGRAPHY.B2)}
  font-weight: 600;
  background: none;
  pointer-events: ${({ $isActive }) => !$isActive && "none"};
`;

const ArrowLeft = styled(ArrowUpIcon)`
  padding: 4px 11px 5px 0;
  path {
    fill: ${COLOR.DARK};
  }
`;

const ArrowRight = styled(ArrowUpIcon)`
  padding: 4px 11px 5px 0;
  transform: rotate(180deg);
  path {
    fill: ${COLOR.DARK};
  }
`;

export {
  StyledPagination,
  ResponsivePaginationContainer,
  StyledResponsivePagination,
  PreviousPageLink,
  NextPageLink,
  ArrowLeft,
  ArrowRight,
};
