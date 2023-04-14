import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "../../../store/actions/cart";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes/index.js";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styled from "styled-components";
import {
  darkGreyColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette/index.js";

const ProductCard = ({ id, name, image, price, shownPrice }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = {
      id,
      image,
      name,
      price,
      displayPrice: `$${shownPrice}`,
      quantity: 1,
    };
    dispatch(addItem(item));
    dispatch(toggleCart(true));
  };

  return (
    <CustomLink to={`${ROUTES.PRODUCT}${id}`}>
      <CustomCard variant="outlined" sx={{ width: "100%", height: "100%" }}>
        <CustomButton
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItemToCart();
          }}
        >
          <ShoppingCartIcon fontSize="small" />
          Add to cart
        </CustomButton>
        <CardMedia component="img" image={image} alt={name} />
        <CardInfo>
          <Title variant="button" component="h3">
            {name}
          </Title>
          <Text variant="body2" component="p">
            ${shownPrice}
          </Text>
        </CardInfo>
      </CustomCard>
    </CustomLink>
  );
};
ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  shownPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default ProductCard;

const CustomCard = styled(Card)`
  &:hover {
    border: 1px solid ${orangeColor} !important;
  }
`;

const CardInfo = styled(CardContent)`
  padding: 10px !important;
`;

const Title = styled(Typography)`
  font-size: 16px;
  text-align: center;
`;

const Text = styled(Typography)`
  text-align: center;
  color: ${darkGreyColor};
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  position: relative;
`;

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Jost";
  font-size: 12px;
  position: absolute;
  top: 5px;
  left: 5px;
  border: none;
  background-color: ${orangeColor};
  color: ${whiteColor};
  border-radius: 4px;
  padding: 5px;

  &:hover {
    opacity: 0.8;
  }
`;
