import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addItem } from "../../../store/actions/cart";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes/index.js";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import styled from "styled-components";
import {
  darkGreyColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette/index.js";

const ProductCard = ({ id, name, image, price, showenPrice }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = {
      id: id,
      image: image,
      name: name,
      price: price,
      displayPrice: `$${showenPrice}`,
      quantity: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <CustomLink to={`${ROUTES.PRODUCT}${id}`}>
      <CustomCard variant="outlined" sx={{ width: "100%", height: "100%" }}>
        <CardContainer>
          <CustomButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItemToCart();
            }}
          >
            Add to bag
          </CustomButton>
          <CardMedia component="img" image={image} alt={name} />
          <CardInfo>
            <Title variant="button" component="h3">
              {name}
            </Title>
            <Text variant="body2" component="p">
              ${showenPrice}
            </Text>
          </CardInfo>
        </CardContainer>
      </CustomCard>
    </CustomLink>
  );
};
ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductCard;

const CustomCard = styled(Card)`
  &:hover {
    border: 1px solid ${orangeColor} !important;
  }
`;

const CardContainer = styled(CardActionArea)`
  height: 100%;
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
`;

const CustomButton = styled.button`
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
