import { Button, ErrorMessage, Input } from "components";
import { Message, SignInFormContainer, StyledLink, StyledSignInForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInFormValues } from "types";
import { ROUTE } from "router";
import { fetchSignInUser, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Email is a required field").email("Email is not valid!"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters!")
      .required("Password is a required field"),
  })
  .required();
type ValidationForm = yup.InferType<typeof schema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationForm>({
    resolver: yupResolver(schema),
  });
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
          type="text"
          placeholder="Your email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          id="signInPassword"
          name="password"
          type="password"
          placeholder="Your password"
          register={register}
          error={errors.password?.message}
        />
        <StyledLink to={ROUTE.PASSWORD_RESET}>Forgot password ?</StyledLink>
      </SignInFormContainer>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      <Button type="submit" text="sign in" loading={isLoading === "pending"} />
    </StyledSignInForm>
  );
};
