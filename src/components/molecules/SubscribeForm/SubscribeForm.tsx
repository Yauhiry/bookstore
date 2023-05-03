import { Button, Input, Modal } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { SubscribeValue } from "types";
import { Text, Description, StyledSubscribeForm, Title } from "./styles";
import { useToggle } from "hooks";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Email is a required field").email("Email is not valid!"),
  })
  .required();

type ValidationForm = yup.InferType<typeof schema>;

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationForm>({
    resolver: yupResolver(schema),
  });
  const [isModalOpen, setIsModalOpen] = useToggle();
  const [isCurrentEmail, setCurrentEmail] = useState("");

  const onSubmit: SubmitHandler<SubscribeValue> = ({ email }) => {
    setCurrentEmail(email);
    setIsModalOpen();
    reset();
  };

  return (
    <StyledSubscribeForm onSubmit={handleSubmit(onSubmit)}>
      {isModalOpen && (
        <Modal handleClose={setIsModalOpen} text={`${isCurrentEmail} successfully subscribed!`} />
      )}
      <Text>
        <Title>Subscribe to Newsletter</Title>
        <Description>
          Be the first to know about new IT books, upcoming releases, exclusive offers and more.
        </Description>
      </Text>
      <Input
        name="email"
        type="text"
        placeholder="Your email"
        register={register}
        error={errors.email?.message}
      />
      <Button type={"submit"} text={"Subscribe"} />
    </StyledSubscribeForm>
  );
};
