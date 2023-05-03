import { Button, ErrorMessage, Input } from "components";
import { SignUpFormContainer, StyledSignUpForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormValues } from "types";
import { fetchSignUpUser, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field").email("Email is not valid!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Password must be match")
      .required("Confirm password is a required field"),
    newPassword: yup
      .string()
      .required("New password is a required field")
      .min(6, "Password must be at least 6 characters!"),
  })
  .required();
type ValidationForm = yup.InferType<typeof schema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationForm>({
    resolver: yupResolver(schema),
  });
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
          error={errors.name?.message}
        />
        <Input
          label="Email"
          id="signUpEmail"
          name="email"
          type="text"
          placeholder="Your email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          id="signUpPassword"
          name="newPassword"
          type="password"
          placeholder="Your password"
          register={register}
          error={errors.newPassword?.message}
        />
        <Input
          label="Confirm password"
          id="signUpConfirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          register={register}
          error={errors.confirmPassword?.message}
        />
      </SignUpFormContainer>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      <Button type="submit" text="sign up" loading={isLoading === "pending"} />
    </StyledSignUpForm>
  );
};
