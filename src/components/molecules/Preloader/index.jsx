import React from "react";

import LinearProgress from "@mui/material/LinearProgress";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const Preloader = () => (
  <ProgressBar>
    <ProgressTitle>Loading...</ProgressTitle>
    <Progress />
  </ProgressBar>
);

export default Preloader;

const ProgressBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 100px 0;
`;

const ProgressTitle = styled.p`
  font-size: 24px;
`;

const Progress = styled(LinearProgress)`
  width: 50%;
  height: 10px !important;
`;
