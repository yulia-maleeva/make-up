import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { darkGreyColor } from "../../../constants/colorPalette";

const Subtitle = ({ subtitle }) => <CustomSubtitle>{subtitle}</CustomSubtitle>;

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;

const CustomSubtitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: ${darkGreyColor};

  @media (max-width: 480px) {
    text-align: center;
  }
`;
