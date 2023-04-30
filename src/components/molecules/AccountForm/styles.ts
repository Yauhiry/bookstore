import { Button, FormTitle, Input } from "components";
import styled from "styled-components";
import { COLOR, MEDIA } from "ui";

const StyledAccountForm = styled.form`
  display: grid;
  grid-gap: 36px;
  ${MEDIA.MD} {
    grid-gap: 48px;
  }
  ${MEDIA.XL} {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledFormTitle = styled(FormTitle)`
  ${MEDIA.XL} {
    grid-area: 1/1/2/3;
  }
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-gap: 16px 32px;
  ${MEDIA.XL} {
    grid-area: 1/1/2/3;
    grid-template-columns: 1fr 1fr;
  }
`;

const PasswordContainer = styled.div`
  display: grid;
  grid-gap: 16px 32px;
  padding-bottom: 56px;
  border-bottom: 1px solid ${COLOR.GRAY};
  ${MEDIA.MD} {
    padding-bottom: 72px;
  }
  ${MEDIA.XL} {
    grid-area: 2/1/3/3;
    grid-template-columns: 1fr 1fr;
  }
`;

const NewPasswordlInput = styled(Input)`
  ${MEDIA.XL} {
    grid-area: 3/1/4/2;
  }
`;

const ConfirmNewPasswordlInput = styled(Input)`
  ${MEDIA.XL} {
    grid-area: 3/2/4/3;
  }
`;

const Control = styled.div`
  display: grid;
  grid-gap: 24px 31px;
  ${MEDIA.SM} {
    grid-template-columns: 1fr 1fr;
  }
  ${MEDIA.XL} {
    grid-area: 3/2/4/3;
  }
`;

const WhiteButton = styled(Button)`
  color: ${COLOR.DARK};
  background: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY};
  &:hover {
    background: ${COLOR.PRIMARY};
  }
`;

export {
  StyledAccountForm,
  StyledFormTitle,
  ProfileContainer,
  PasswordContainer,
  NewPasswordlInput,
  ConfirmNewPasswordlInput,
  Control,
  WhiteButton,
};
