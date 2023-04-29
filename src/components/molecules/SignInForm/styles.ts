import { Link } from "react-router-dom";
import styled from "styled-components";
import { TYPOGRAPHY } from "ui";

const StyledSignInForm = styled.form`
  display: grid;
  grid-gap: 40px;
`;

const SignInFormContainer = styled.div`
  display: grid;
`;

const StyledLink = styled(Link)`
  padding-top: 16px;
  ${TYPOGRAPHY.B1}
`;

export { StyledSignInForm, SignInFormContainer, StyledLink };
