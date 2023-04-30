import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledAccountMenu = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  grid-gap: 8px;
  top: 121px;
  right: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid ${COLOR.GRAY};
`;

const StyledLink = styled(Link)`
  ${TYPOGRAPHY.H3}
`;

const LogOutButton = styled.button`
  display: grid;
  place-items: center;
  padding: 0 40px;
  ${TYPOGRAPHY.H3};
  color: ${COLOR.WHITE};
  background: ${COLOR.DARK};
`;

export { StyledAccountMenu, StyledLink, LogOutButton };
