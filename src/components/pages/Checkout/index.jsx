import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementItem,
  decrementItem,
} from "../../../store/actions/cart";

import Layout from "../Layout";
import Title from "../../atoms/Title";
import CheckoutForm from "../../organisms/CheckoutForm";

import { Avatar } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import styled from "styled-components";
import {
  whiteColor,
  lightGreyColor,
  orangeColor,
} from "../../../constants/colorPalette";

const Checkout = () => {
  window.scroll(0, 0);

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Layout>
      <CheckoutWrapper>
        <CheckoutContainer>
          <Title title="Checkout" />
          <CheckoutForm />
        </CheckoutContainer>
        <CheckoutContainer>
          <Title title="Your bag" />
          <CartContainer>
            {cartProducts.length > 0 ? (
              <CartItems>
                {cartProducts.map((product) => (
                  <CartItem key={product.name}>
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
                    <CustomDeleteIcon
                      onClick={() => dispatch(removeItem(product.id))}
                    />
                  </CartItem>
                ))}
              </CartItems>
            ) : (
              <ProductDescription style={{ textAlign: "center" }}>
                Your cart is empty
              </ProductDescription>
            )}
            {totalPrice > 0 && (
              <Container>
                <CartTitle>Total</CartTitle>
                <CartTitle>${totalPrice / 100}</CartTitle>
              </Container>
            )}
          </CartContainer>
        </CheckoutContainer>
      </CheckoutWrapper>
    </Layout>
  );
};
export default Checkout;

const CheckoutWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-top: 100px;

  @media (max-width: 769px) {
    width: 90%;
    gap: 50px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const CartContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px solid ${lightGreyColor};
  border-bottom: 1px solid ${lightGreyColor};
`;

const ProductInfo = styled.div`
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
