import { Button, CartItem, Header } from "components";
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
import { calculateTotals, clearCart, selectCart, selectUser, useAppSelector } from "store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const CartPage = () => {
  const { isAuth } = useAppSelector(selectUser);
  const { cartItems, sumTotal, vat, total } = useAppSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuth) {
      dispatch(clearCart());
      alert("OK");
    } else {
      navigate(ROUTE.SIGN_IN);
    }
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
            <Button type="button" text="Check out" onClick={handleClick} />
          </TotalContainer>
        </CartContent>
      )}
    </StyledCartPage>
  );
};
