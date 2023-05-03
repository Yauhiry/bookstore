import { Button, Input } from "components";
import {
  Control,
  PasswordContainer,
  ProfileContainer,
  StyledAccountForm,
  NewPasswordlInput,
  StyledFormTitle,
  WhiteButton,
  ConfirmNewPasswordlInput,
} from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountFormValue } from "types";
import { fetchAccountUpdate, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field").email("Email is not valid!"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters!")
      .required("Password is a required field"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Password must be match")
      .required("Confirm password is a required field"),
    newPassword: yup
      .string()
      .min(6, "Password must be at least 6 characters!")
      .required("New password is a required field"),
  })
  .required();
type ValidationForm = yup.InferType<typeof schema>;

export const AccountForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationForm>({
    resolver: yupResolver(schema),
  });
  const { userName, userEmail, isLoading } = useAppSelector(selectUser);

  const onSubmit: SubmitHandler<AccountFormValue> = async (AccountFormValue) => {
    await dispatch(fetchAccountUpdate(AccountFormValue)).unwrap();
    await reset();
  };

  const handleClick = () => {
    navigate(-1);
    reset();
  };

  return (
    <StyledAccountForm onSubmit={handleSubmit(onSubmit)}>
      <ProfileContainer>
        <StyledFormTitle text="profile" />
        <Input
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          defaultValue={userName as string}
          register={register}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="Your email"
          defaultValue={userEmail as string}
          register={register}
          error={errors.email?.message}
        />
      </ProfileContainer>
      <PasswordContainer>
        <StyledFormTitle text="password" />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Your password"
          register={register}
          error={errors.password?.message}
        />
        <NewPasswordlInput
          label="New password"
          id="newPassword"
          name="newPassword"
          type="password"
          placeholder="New password"
          register={register}
          error={errors.newPassword?.message}
        />
        <ConfirmNewPasswordlInput
          label="Confirm new password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          register={register}
          error={errors.confirmPassword?.message}
        />
      </PasswordContainer>
      <Control>
        <Button text="Save changes" type="submit" loading={isLoading === "pending"} />
        <WhiteButton text="Cancel" type="button" onClick={handleClick} />
      </Control>
    </StyledAccountForm>
  );
};
