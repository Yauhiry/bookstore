import { Button, Input } from "components";
import { SignUpFormContainer, StyledSignUpForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue, SignUpFormValues } from "types";
import { fetchSignUpUser, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector(selectUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (SignUpFormValues) => {
    await dispatch(fetchSignUpUser(SignUpFormValues)).unwrap();
    await reset();
    await navigate("/");
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpFormContainer>
        <Input
          label="Name"
          id="signUpName"
          name="name"
          type="text"
          placeholder="Your name"
          register={register}
        />
        <Input
          label="Email"
          id="signUpEmail"
          name="email"
          type="text"
          placeholder="Your email"
          register={register}
        />
        <Input
          label="Password"
          id="signUpPassword"
          name="password"
          type="password"
          placeholder="Your password"
          register={register}
        />
        <Input
          label="Confirm password"
          id="signUpConfirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          register={register}
        />
      </SignUpFormContainer>
      <Button type="submit" text="sign up" loading={isLoading === "pending"} />
    </StyledSignUpForm>
  );
};
