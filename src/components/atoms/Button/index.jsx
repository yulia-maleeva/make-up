import React from "react";

import Button from "@mui/material/Button";

import styled from "styled-components";

const MyBtn = () => <CustomButton variant="outlined">Outlined</CustomButton>;

export default MyBtn;

const CustomButton = styled(Button)`
  background-color: white !important;
  &:hover {
    background-color: orange !important;
  }
`;
