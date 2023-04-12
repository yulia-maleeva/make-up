import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import Logo from "../../atoms/Logo";
import NavBar from "../../molecules/NavBar";
import SearchBar from "../../molecules/SearchBar";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../store/actions/cart";

import styled from "styled-components";
import { whiteColor, orangeColor } from "../../../constants/colorPalette";

const Header = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    localStorage.setItem("price", JSON.stringify(totalPrice));
  }, [cartProducts, totalPrice]);

  const ProductsQuantity = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <CustomHeader>
      <HeaderContainer>
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
        <NavBar />
        <SearchBar />
        <Badge
          badgeContent={ProductsQuantity}
          sx={{
            "& .MuiBadge-badge": {
              color: `${whiteColor}`,
              backgroundColor: `${orangeColor}`,
            },
          }}
        >
          <CustomIconCart onClick={() => dispatch(toggleCart(true))} />
        </Badge>
      </HeaderContainer>
      <ResponsiveHeaderContainer>
        <ResponsiveBlock>
          <NavBar />
          <Link to={ROUTES.HOME}>
            <Logo />
          </Link>
          <Badge
            badgeContent={ProductsQuantity}
            sx={{
              "& .MuiBadge-badge": {
                color: `${whiteColor}`,
                backgroundColor: `${orangeColor}`,
              },
            }}
          >
            <CustomIconCart onClick={() => dispatch(toggleCart(true))} />
          </Badge>
        </ResponsiveBlock>
        <SearchBar />
      </ResponsiveHeaderContainer>
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

  @media (max-width: 769px) {
    height: 150px;
  }
`;

const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 769px) {
    display: none;
  }
`;

const CustomIconCart = styled(ShoppingCartIcon)`
  cursor: pointer;
`;

const ResponsiveHeaderContainer = styled.div`
  display: none;

  @media (max-width: 769px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const ResponsiveBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
