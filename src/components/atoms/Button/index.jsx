import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";

import styled from "styled-components";
import { orangeColor, whiteColor } from "../../../constants/colorPalette";

const StyledButton = ({ text, onClick }) => (
  <CustomButton variant="outlined" onClick={onClick}>
    {text}
  </CustomButton>
);

StyledButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default StyledButton;

const CustomButton = styled(Button)`
  width: 150px;
  background-color: ${orangeColor} !important;
  color: ${whiteColor} !important;
  border: none !important;

  &:hover {
    background-color: ${whiteColor} !important;
    color: ${orangeColor} !important;
    border: 1px solid ${orangeColor} !important;
  }
`;
