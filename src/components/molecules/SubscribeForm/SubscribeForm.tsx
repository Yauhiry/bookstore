import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue } from "types";
import { Text, Description, StyledSubscribeForm, Title } from "./styles";

export const SubscribeForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = ({ subscribeEmail }: FormValue) => {
    alert(`${subscribeEmail} successfully subscribed`);
    reset();
  };

  return (
    <StyledSubscribeForm onSubmit={handleSubmit(onSubmit)}>
      <Text>
        <Title>Subscribe to Newsletter</Title>
        <Description>
          Be the first to know about new IT books, upcoming releases, exclusive offers and more.
        </Description>
      </Text>
      <Input name="subscribeEmail" type="email" placeholder="Your email" register={register} />
      <Button type={"submit"} text={"Subscribe"} />
    </StyledSubscribeForm>
  );
};
