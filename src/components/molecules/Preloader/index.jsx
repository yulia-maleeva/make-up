import React from "react";

import LinearProgress from "@mui/material/LinearProgress";

import styled from "styled-components";
import { lightGreyColor, orangeColor } from "../../../constants/colorPalette";

const Preloader = () => (
  <PreloaderContainer>
    <PreloaderTitle>Loading...</PreloaderTitle>
    <CustomPreloader />
  </PreloaderContainer>
);

export default Preloader;

const PreloaderContainer = styled.div`
  width: 80%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const PreloaderTitle = styled.p`
  font-size: 24px;
  text-transform: uppercase;
`;

const CustomPreloader = styled(LinearProgress)`
  width: 100%;
  height: 10px !important;

  .MuiLinearProgress-bar {
    background-color: ${orangeColor};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${lightGreyColor};
  }
`;
