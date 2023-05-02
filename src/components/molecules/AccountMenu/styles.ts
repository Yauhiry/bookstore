import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";
import { motion } from "framer-motion";

const StyledAccountMenu = styled(motion.div)`
  position: absolute;
  display: grid;
  place-items: center;
  grid-gap: 8px;
  top: 121px;
  right: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid ${COLOR.GRAY};
  overflow: hidden;
`;

const StyledLink = styled(motion(Link))`
  ${TYPOGRAPHY.H3}
`;

const LogOutButton = styled(motion.button)`
  display: grid;
  place-items: center;
  padding: 0 40px;
  ${TYPOGRAPHY.H3};
  color: ${COLOR.WHITE};
  background: ${COLOR.DARK};
`;

export { StyledAccountMenu, StyledLink, LogOutButton };
