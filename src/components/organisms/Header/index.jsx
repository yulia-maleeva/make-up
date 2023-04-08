import React, { useEffect } from "react";

import Logo from "../../atoms/Logo";
import NavBar from "../../molecules/NavBar";
import SearchBar from "../../molecules/SearchBar";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../store/actions/cart";

import styled from "styled-components";

const Header = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const ProductsQuantity = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <CustomHeader>
      <HeaderContainer>
        <Logo />
        <NavBar />
        <SearchBar />
        <Badge badgeContent={ProductsQuantity} color="primary">
          <CustomIconCart onClick={() => dispatch(toggleCart(true))} />
        </Badge>
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

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 769px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    gap: 20px;
  }
`;

const CustomIconCart = styled(ShoppingCartIcon)`
  cursor: pointer;
`;
