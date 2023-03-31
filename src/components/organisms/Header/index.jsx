import React, { useState } from "react";

import Logo from "../../atoms/Logo";
import NavBar from "../../molecules/NavBar";
import SearchBar from "../../molecules/SearchBar";

import { Avatar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styled from "styled-components";

import { useSelector } from "react-redux";

const Header = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const [showCartItems, setShowCartItems] = useState(false);
  console.log(cartProducts);

  return (
    <CustomHeader>
      <HeaderContainer>
        <Logo />
        <NavBar />
        <SearchBar />
        <div>
          <CartIconContainer
            onMouseEnter={() => setShowCartItems(true)}
            onMouseLeave={() => setShowCartItems(false)}
          >
            <ShoppingCartIcon />
            {cartProducts.length > 0 && (
              <CartIconCount>{cartProducts.length}</CartIconCount>
            )}
          </CartIconContainer>
          {showCartItems && cartProducts.length > 0 && (
            <CartItems>
              {cartProducts.map((item) => (
                <CartItem key={item.name}>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    variant="rounded"
                    sx={{ width: 25, height: 25 }}
                  />
                  <ProductDescription>{item.name}</ProductDescription>
                  <ProductDescription>{item.price}</ProductDescription>
                </CartItem>
              ))}
            </CartItems>
          )}
        </div>
      </HeaderContainer>
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIconCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 12px;
`;

const CartItems = styled.div`
  width: 200px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  overflow: auto;
  position: absolute;
  rigth: 0;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #000000;
`;
