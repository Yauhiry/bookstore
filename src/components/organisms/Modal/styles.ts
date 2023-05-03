import { CrossIcon } from "assets";
import { motion } from "framer-motion";
import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background: ${COLOR.OPACITY};
  padding: 24px;
`;

const ModalContainer = styled.div`
  position: relative;
  padding: 24px;
  background: ${COLOR.WHITE};
  width: clamp(280px, 100%, 550px);
  ${MEDIA.MD} {
    padding: 40px;
  }
`;

const Head = styled.div`
  display: flex;
  grid-gap: 8px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${COLOR.GRAY};
`;

const Title = styled.h3`
  ${TYPOGRAPHY.H3}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  background: none;
`;

const StyledCrossIcon = styled(CrossIcon)`
  path {
    fill: ${COLOR.DARK};
  }
  &:hover {
    path {
      fill: ${COLOR.RED};
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 40px;
  padding-top: 24px;
  ${MEDIA.MD} {
    padding-top: 32px;
  }
`;

const Message = styled.p`
  padding: 20px;
  ${TYPOGRAPHY.B1}
  background: ${COLOR.PRIMARY};
`;

export { StyledModal, ModalContainer, Head, Title, CloseButton, StyledCrossIcon, Content, Message };
