import { Button, Portal, PortalTarget } from "components";
import {
  CloseButton,
  Content,
  Head,
  Message,
  ModalContainer,
  StyledCrossIcon,
  StyledModal,
  Title,
} from "./styles";
import { useBodyScrollLock } from "hooks";

interface ModalProps {
  text: string;
  handleClose: () => void;
}

export const Modal = ({ text, handleClose }: ModalProps) => {
  useBodyScrollLock();

  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledModal initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <ModalContainer>
          <Head>
            <Title>Success!</Title>
            <CloseButton onClick={handleClose}>
              <StyledCrossIcon />
            </CloseButton>
          </Head>
          <Content>
            <Message>{text}</Message>
            <Button text="Cancel" type="button" onClick={handleClose} />
          </Content>
        </ModalContainer>
      </StyledModal>
    </Portal>
  );
};
