import React from "react";

import styled from "styled-components";
import { darkGreyColor } from "../../../constants/colorPalette";

const Subtitle = ({ subtitle }) => <CustomSubtitle>{subtitle}</CustomSubtitle>;

export default Subtitle;

const CustomSubtitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: ${darkGreyColor};
`;
