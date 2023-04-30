import { Button, Input } from "components";
import { Message, SignInFormContainer, StyledLink, StyledSignInForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue, SignInFormValues } from "types";
import { ROUTE } from "router";
import { fetchSignInUser, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage, passwordChanged } = useAppSelector(selectUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormValues> = async (SignInFormValues) => {
    await dispatch(fetchSignInUser(SignInFormValues)).unwrap();
    await reset();
    await navigate(ROUTE.HOME);
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      {passwordChanged && <Message>Your password has been changed !</Message>}
      <SignInFormContainer>
        <Input
          label="Email"
          id="signInEmail"
          name="email"
          type="email"
          placeholder="Your email"
          register={register}
        />
        <Input
          label="Password"
          id="signInPassword"
          name="password"
          type="password"
          placeholder="Your password"
          register={register}
        />
        <StyledLink to={ROUTE.PASSWORD_RESET}>Forgot password ?</StyledLink>
      </SignInFormContainer>
      <Button type="submit" text="sign in" loading={isLoading === "pending"} />
    </StyledSignInForm>
  );
};
