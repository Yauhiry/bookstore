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
import { AccountFormValue, FormValue } from "types";
import { fetchAccountUpdate, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

export const AccountForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<FormValue>();
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
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="Your email"
          defaultValue={userEmail as string}
          register={register}
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
        />
        <NewPasswordlInput
          label="New password"
          id="newPassword"
          name="newPassword"
          type="password"
          placeholder="New password"
          register={register}
        />
        <ConfirmNewPasswordlInput
          label="Confirm new password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          register={register}
        />
      </PasswordContainer>
      <Control>
        <Button text="Save changes" type="submit" loading={isLoading === "pending"} />
        <WhiteButton text="Cancel" type="button" onClick={handleClick} />
      </Control>
    </StyledAccountForm>
  );
};
