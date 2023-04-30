import styled from "styled-components";
import { COLOR, MEDIA, TYPOGRAPHY } from "ui";

const StyledPasswordResetForm = styled.form`
  display: grid;
  grid-gap: 40px;
  width: clamp(270px, 100%, 544px);
  padding: 40px 32px;
  ${MEDIA.SM} {
    border: 1px solid ${COLOR.GRAY};
  }
`;

const Message = styled.p`
  padding: 20px;
  ${TYPOGRAPHY.B1}
  background: ${COLOR.PRIMARY};
`;

const Email = styled.span`
  ${TYPOGRAPHY.B1}
  font-weight: 700;
`;

const PasswordResetFormContainer = styled.div`
  display: grid;
`;

export { StyledPasswordResetForm, Message, Email, PasswordResetFormContainer };
