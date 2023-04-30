import { NewPasswordFormContainer, StyledNewPasswordForm } from "./styles";
import { Button, FormTitle, Input, Label } from "components";
import { fetchNewPassword, selectUser, useAppDispatch, useAppSelector } from "store";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormValue, NewPasswordFormValue } from "types";
import { ROUTE } from "router";

export const NewPasswordForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();
  const { isLoading } = useAppSelector(selectUser);
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
        <Label id="password" label="Password" />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Your password"
          register={register}
        />
        <Label id="confirmPassword" label="Confirm password" />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          register={register}
        />
      </NewPasswordFormContainer>
      <Button type="submit" text="set password" loading={isLoading === "pending"} />
    </StyledNewPasswordForm>
  );
};
