import {
  StyledCartItem,
  Image,
  Info,
  Title,
  StyledLink,
  Subtitle,
  Price,
  Counter,
  StyledMinusIcon,
  StyledPlusIcon,
  Amount,
  RemoveButton,
  StyledCrossIcon,
  CounterPlusButton,
  CounterMinusButton,
} from "./styles";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "store";
import { CartBook } from "types/types";

interface CartItemProps {
  book: CartBook;
}

export const CartItem = ({
  book: { image, title, subtitle, price, isbn13, amount },
}: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(isbn13));
  };
  const handleIncrease = () => {
    dispatch(increase({ isbn13 }));
  };
  const handleDecrease = () => {
    if (amount > 1) {
      dispatch(decrease({ isbn13 }));
    }
  };

  return (
    <StyledCartItem>
      <Image src={image} alt={title} />
      <Info>
        <Title>
          <StyledLink to={generatePath(ROUTE.BOOK, { isbn13 })}>{title}</StyledLink>
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Counter>
          <CounterMinusButton onClick={handleDecrease} $isDisabled={amount === 1}>
            <StyledMinusIcon $isDisabled={amount === 1} />
          </CounterMinusButton>
          <Amount>{amount}</Amount>
          <CounterPlusButton onClick={handleIncrease}>
            <StyledPlusIcon />
          </CounterPlusButton>
        </Counter>
        <Price>{price === "$0.00" ? "free" : price}</Price>
      </Info>
      <RemoveButton onClick={handleRemove}>
        <StyledCrossIcon />
      </RemoveButton>
    </StyledCartItem>
  );
};
