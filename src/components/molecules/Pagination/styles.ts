import styled from "styled-components";
import ResponsivePagination from "react-responsive-pagination";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";
import { ArrowUpIcon } from "assets";
import { Link } from "react-router-dom";

const StyledPagination = styled.div`
  position: relative;
  padding-top: 36px;
  border-top: 1px solid ${COLOR.GRAY};
`;

const StyledResponsivePagination = styled(ResponsivePagination)`
  display: flex;
  justify-content: center;
  padding: 0 65px;
  ${MEDIA.SM} {
    padding: 0 100px;
  }

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
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
  }
`;

const PreviousPageLink = styled(Link)<{ $isActive: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  ${({ $isActive }) => ($isActive ? TYPOGRAPHY.B1 : TYPOGRAPHY.B2)};
  font-weight: 600;
  background: none;
  pointer-events: ${({ $isActive }) => !$isActive && "none"};
`;

const NextPageLink = styled(Link)<{ $isActive: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
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
  StyledResponsivePagination,
  PreviousPageLink,
  NextPageLink,
  ArrowLeft,
  ArrowRight,
};
