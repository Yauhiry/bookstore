import { Button, CartItem, Header, Modal } from "components";
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
import { useToggle } from "hooks";

export const CartPage = () => {
  const { isAuth } = useAppSelector(selectUser);
  const { cartItems, sumTotal, vat, total } = useAppSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useToggle();

  const handleClick = () => {
    if (isAuth) {
      setIsModalOpen();
      dispatch(clearCart());
    } else {
      navigate(ROUTE.SIGN_IN);
    }
  };

  const handleClose = () => {
    setIsModalOpen();
    navigate(ROUTE.HOME);
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <StyledCartPage $isFilled={cartItems.length > 0}>
      {isModalOpen && (
        <Modal
          handleClose={handleClose}
          text="Your order accepted. Payment details will be sent to your email."
        />
      )}
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
