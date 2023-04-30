import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, TYPOGRAPHY } from "ui";

const StyledSignInForm = styled.form`
  display: grid;
  grid-gap: 40px;
`;

const Message = styled.p`
  padding: 20px;
  ${TYPOGRAPHY.B1}
  background: ${COLOR.PRIMARY};
`;

const SignInFormContainer = styled.div`
  display: grid;
`;

const StyledLink = styled(Link)`
  padding-top: 16px;
  ${TYPOGRAPHY.B1}
`;

export { StyledSignInForm, Message, SignInFormContainer, StyledLink };
