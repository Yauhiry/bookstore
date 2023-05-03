import { NewPasswordFormContainer, StyledNewPasswordForm } from "./styles";
import { Button, ErrorMessage, FormTitle, Input } from "components";
import { fetchNewPassword, selectUser, useAppDispatch, useAppSelector } from "store";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NewPasswordFormValue } from "types";
import { ROUTE } from "router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
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

export const NewPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationForm>({
    resolver: yupResolver(schema),
  });
  const { isLoading, errorMessage } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<NewPasswordFormValue> = async (PasswordResetFormValue) => {
    await dispatch(fetchNewPassword(PasswordResetFormValue)).unwrap();
    await navigate(ROUTE.SIGN_IN);
    await reset();
  };

  return (
    <StyledNewPasswordForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle text="reset password" />
      <NewPasswordFormContainer>
        <Input
          label="Password"
          id="password"
          name="newPassword"
          type="password"
          placeholder="Your password"
          register={register}
          error={errors.newPassword?.message}
        />
        <Input
          label="Confirm password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          register={register}
          error={errors.confirmPassword?.message}
        />
      </NewPasswordFormContainer>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      <Button type="submit" text="set password" loading={isLoading === "pending"} />
    </StyledNewPasswordForm>
  );
};
