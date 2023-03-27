import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes/index.js";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import styled from "styled-components";
import {
  darkGreyColor,
  orangeColor,
} from "../../../constants/colorPalette/index.js";

const ProductCard = ({ id, name, image, price }) => (
  <Link to={`${ROUTES.PRODUCT}${id}`}>
    <CustomCard variant="outlined" sx={{ width: "100%", height: "100%" }}>
      <CardContainer>
        <CardMedia component="img" image={image} alt={name} />
        <CardInfo>
          <Title variant="button" component="h3">
            {name}
          </Title>
          <Text variant="body2" component="p">
            ${price}
          </Text>
        </CardInfo>
      </CardContainer>
    </CustomCard>
  </Link>
);

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
