import { CrossIcon, DotBadge } from "assets";
import { Button } from "components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledBurgerMenu = styled(motion.div)`
  position: absolute;
  top: 105px;
  left: -24px;
  z-index: 98;
  display: flex;
  justify-content: end;
  width: calc(100% + 48px);
  height: calc(100vh - 105px);
  background: ${COLOR.OPACITY};
  ${MEDIA.SM} {
    height: 100vh;
    top: 0;
  }
  ${MEDIA.MD} {
    left: -40px;
    width: calc(100% + 80px);
  }
`;

const Container = styled(motion.div)`
  z-index: 99;
  display: grid;
  align-content: start;
  grid-template-rows: 1fr;
  grid-gap: 56px;
  background: ${COLOR.WHITE};
  padding: 24px 24px 56px 24px;
  width: 100%;
  ${MEDIA.SM} {
    width: 368px;
    grid-template-rows: auto 1fr;
  }
  ${MEDIA.MD} {
    padding: 24px 40px 56px 40px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: end;
  grid-gap: 8px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${COLOR.GRAY};
`;

const CloseButton = styled.button`
  padding: 16px;
  background: none;
`;

const StyledCrossIcon = styled(CrossIcon)`
  path {
    fill: ${COLOR.DARK};
  }
`;

const Content = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: auto 1fr;
`;

const LinkGroup = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  grid-gap: 36px;
  ${MEDIA.SM} {
    grid-gap: 48px;
  }
`;

const CustomLink = styled(motion(Link))`
  ${TYPOGRAPHY.H3}
`;

const StyledDotBadge = styled(DotBadge)`
  position: absolute;
  top: 0;
  right: -7px;
  circle {
    stroke: ${COLOR.WHITE};
  }
`;

const StyledButton = styled(Button)`
  align-self: end;
`;

export {
  StyledBurgerMenu,
  Container,
  Head,
  CloseButton,
  StyledCrossIcon,
  Content,
  LinkGroup,
  CustomLink,
  StyledDotBadge,
  StyledButton,
};
