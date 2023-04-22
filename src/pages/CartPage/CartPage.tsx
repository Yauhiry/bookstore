import { Button, Header } from "components";
import {
  StyledCartPage,
  CartEmpty,
  CartContent,
  CartList,
  TotalContainer,
  Check,
  Summary,
  SummaryTitle,
  SummaryPrice,
  Total,
  TotalTitle,
  TotalPrice,
} from "./styles";
import { calculateTotals, clearCart, selectCart, useAppSelector } from "store";
import { CartItem } from "components/molecules/CartItem/CartItem";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const CartPage = () => {
  const { cartItems, sumTotal, vat, total } = useAppSelector(selectCart);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <StyledCartPage $isFilled={cartItems.length > 0}>
      <Header title="Your cart" />
      {!cartItems.length ? (
        <CartEmpty>is currently empty</CartEmpty>
      ) : (
        <CartContent>
          <CartList>
            {cartItems.map((book) => {
              return <CartItem key={book.isbn13} book={book} />;
            })}
          </CartList>
          <TotalContainer>
            <Check>
              <Summary>
                <SummaryTitle>Sum total</SummaryTitle>
                <SummaryPrice>$ {sumTotal.toFixed(2)}</SummaryPrice>
              </Summary>
              <Summary>
                <SummaryTitle>VAT</SummaryTitle>
                <SummaryPrice>$ {vat.toFixed(2)}</SummaryPrice>
              </Summary>
            </Check>
            <Total>
              <TotalTitle>Total</TotalTitle>
              <TotalPrice>$ {total.toFixed(2)}</TotalPrice>
            </Total>
            <Button type="button" text="Check out" onClick={handleClear} />
          </TotalContainer>
        </CartContent>
      )}
    </StyledCartPage>
  );
};
