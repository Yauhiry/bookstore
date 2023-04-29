import { Button, Input, Label } from "components";
import { SignInFormContainer, StyledLink, StyledSignInForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue, SignInFormValues } from "types";
import { ROUTE } from "router";
import { fetchSignInUser, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector(selectUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormValues> = async (SignInFormValues) => {
    await dispatch(fetchSignInUser(SignInFormValues)).unwrap();
    await reset();
    await navigate(-1);
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <SignInFormContainer>
        <Label id="signInEmail" label="Email" />
        <Input
          id="signInEmail"
          name="email"
          type="email"
          placeholder="Your email"
          register={register}
        />
        <Label id="signInPassword" label="Password" />
        <Input
          id="signInPassword"
          name="password"
          type="password"
          placeholder="Your password"
          register={register}
        />
        <StyledLink to={ROUTE.HOME}>Forgot password ?</StyledLink>
      </SignInFormContainer>
      <Button type="submit" text="sign in" loading={isLoading === "pending"} />
    </StyledSignInForm>
  );
};
