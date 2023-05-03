import { Button, Input, Modal } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue } from "types";
import { Text, Description, StyledSubscribeForm, Title } from "./styles";
import { useToggle } from "hooks";
import { useState } from "react";

export const SubscribeForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();
  const [isModalOpen, setIsModalOpen] = useToggle();
  const [isCurrentEmail, setCurrentEmail] = useState("");

  const onSubmit: SubmitHandler<FormValue> = ({ email }: FormValue) => {
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
      <Input name="email" type="email" placeholder="Your email" register={register} />
      <Button type={"submit"} text={"Subscribe"} />
    </StyledSubscribeForm>
  );
};
