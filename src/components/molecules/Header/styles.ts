import { ArrowLeftIcon } from "assets";
import { motion } from "framer-motion";
import styled from "styled-components";
import { COLOR } from "ui";

const StyledHeader = styled.div`
  display: grid;
  grid-gap: 32px;
`;

const StyledArrowLeftIcon = styled(motion(ArrowLeftIcon))`
  padding: 5px 5px 5px 0;
  cursor: pointer;
  path {
    fill: ${COLOR.DARK};
  }
`;

export { StyledHeader, StyledArrowLeftIcon };
