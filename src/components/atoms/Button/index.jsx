import React from "react";
import Button from "@mui/material/Button";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const StyledButton = ({ text, onClick }) => (
  <CustomButton variant="outlined" onClick={onClick}>
    {text}
  </CustomButton>
);

export default StyledButton;

const CustomButton = styled(Button)`
  width: 150px;
  background-color: transparent !important;
  border-color: ${orangeColor} !important;
  color: ${orangeColor} !important;

  &:hover {
    background-color: ${orangeColor} !important;
    color: #ffffff !important;
  }
`;
