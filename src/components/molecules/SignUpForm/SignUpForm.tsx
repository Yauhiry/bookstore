import { Button, Input, Label } from "components";
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
        <Label id="signUpName" label="Name" />
        <Input
          id="signUpName"
          name="name"
          type="text"
          placeholder="Your name"
          register={register}
        />
        <Label id="signUpEmail" label="Email" />
        <Input
          id="signUpEmail"
          name="email"
          type="text"
          placeholder="Your email"
          register={register}
        />
        <Label id="signUpPassword" label="Password" />
        <Input
          id="signUpPassword"
          name="password"
          type="password"
          placeholder="Your password"
          register={register}
        />
        <Label id="signUpConfirmPassword" label="Confirm password" />
        <Input
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
