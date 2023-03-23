import * as React from "react";

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

const ProductCard = ({ name, image }) => (
  <CustomCard variant="outlined" sx={{ width: "100%", height: "100%" }}>
    <CardContainer>
      <CardMedia component="img" image={image} alt={name} />
      <CardInfo>
        <Title variant="button" component="h3">
          {name}
        </Title>
        <Text variant="body2" component="p">
          Text
        </Text>
      </CardInfo>
    </CardContainer>
  </CustomCard>
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
