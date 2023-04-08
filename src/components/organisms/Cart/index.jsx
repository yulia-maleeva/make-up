import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../../../store/actions/cart";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import Button from "../../atoms/Button";

import { Avatar } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import styled from "styled-components";
import {
  whiteColor,
  lightGreyColor,
  orangeColor,
} from "../../../constants/colorPalette";

const Cart = () => {
  const dispatch = useDispatch();

  const toggle = useSelector((state) => state.cart.isCartOpen);
  const cartProducts = useSelector((state) => state.cart.cart);

  const getTotalPrice = () => {
    let totalPrice = 0;

    let itemTotalPrice = 0;

    cartProducts.forEach((item) => {
      const itemPrice = item.price / 100;
      itemTotalPrice += itemPrice * item.quantity;
    });

    totalPrice += itemTotalPrice;

    return totalPrice;
  };

  if (toggle) {
    return (
      <CartContainer>
        <Container>
          <CartTitle>Cart</CartTitle>
          <CloseIcon onClick={() => dispatch(toggleCart(false))} />
        </Container>
        {cartProducts.length > 0 ? (
          <CartItems>
            {cartProducts.map((product) => (
              <CartItem>
                <MainInfo>
                  <Avatar
                    src={product.image}
                    alt={product.name}
                    variant="rounded"
                  />
                  <ProductInfo>
                    <ProductDescription>{product.name}</ProductDescription>
                    <ProductDescription>
                      {product.displayPrice}
                    </ProductDescription>
                    <PriceDescription>
                      {product.quantity} x {product.displayPrice} = $
                      {product.quantity * (product.price / 100)}
                    </PriceDescription>
                    <Quantity>
                      <QuantityContainer>
                        <WhiteRemoveIcon
                          fontSize="small"
                          onClick={() => dispatch(decrementItem(product.id))}
                        />
                      </QuantityContainer>
                      <ProductDescription>
                        {product.quantity}
                      </ProductDescription>
                      <QuantityContainer>
                        <WhiteAddIcon
                          fontSize="small"
                          onClick={() => dispatch(incrementItem(product.id))}
                        />
                      </QuantityContainer>
                    </Quantity>
                  </ProductInfo>
                </MainInfo>

                <CustomDeleteIcon
                  onClick={() => dispatch(removeItem(product.id))}
                />
              </CartItem>
            ))}
          </CartItems>
        ) : (
          <ProductDescription>Your cart is empty</ProductDescription>
        )}
        {getTotalPrice() > 0 && (
          <Container>
            <CartTitle>Total</CartTitle>
            <CartTitle>${getTotalPrice()}</CartTitle>
          </Container>
        )}

        {cartProducts.length > 0 && (
          <CustomLink to={ROUTES.CHECKOUT}>
            <Button text="Confirm & Buy" />
          </CustomLink>
        )}
      </CartContainer>
    );
  }
};

export default Cart;

const CartContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border-left: 1px solid ${lightGreyColor};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  background-color: ${whiteColor};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    cursor: pointer;
  }
`;

const CartTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px solid ${lightGreyColor};
  border-bottom: 1px solid ${lightGreyColor};
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${orangeColor};
  cursor: pointer;
`;

const CustomDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
`;

const WhiteAddIcon = styled(AddIcon)`
  color: white;
`;

const WhiteRemoveIcon = styled(RemoveIcon)`
  color: white;
`;

const PriceDescription = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

const CustomLink = styled(Link)`
  display: flex;
  justify-content: end;
  text-decoration: none;
`;

const MainInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
`;
