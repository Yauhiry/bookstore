import { Email, Message, StyledPasswordResetForm } from "./styles";
import { Button, FormTitle, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordResetFormValue } from "types";
import { useState } from "react";
import { fetchResetUserPassword, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Email is a required field").email("Email is not valid!"),
  })
  .required();
type ValidationForm = yup.InferType<typeof schema>;

export const PasswordResetForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationForm>({
    resolver: yupResolver(schema),
  });
  const [sentEmail, setSentEmail] = useState("");
  const { isLoading } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<PasswordResetFormValue> = async (PasswordResetFormValue) => {
    await dispatch(fetchResetUserPassword(PasswordResetFormValue)).unwrap();
    await setSentEmail(PasswordResetFormValue.email);
  };

  const handleClick = () => {
    navigate(ROUTE.HOME);
    reset();
  };

  return (
    <StyledPasswordResetForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle text="reset password" />
      {sentEmail && (
        <Message>
          You will receive an email <Email>{sentEmail}</Email> with a link to reset your password!
        </Message>
      )}
      <Input
        label="Email"
        id="email"
        name="email"
        type="text"
        placeholder="Your email"
        register={register}
        error={errors.email?.message}
      />
      {sentEmail ? (
        <Button type="button" text="go to home" onClick={handleClick} />
      ) : (
        <Button type="submit" text="reset" loading={isLoading === "pending"} />
      )}
    </StyledPasswordResetForm>
  );
};
