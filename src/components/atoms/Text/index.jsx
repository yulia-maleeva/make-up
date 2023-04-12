import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Text = ({ children }) => <CustomText>{children}</CustomText>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;

const CustomText = styled.p`
  font-weight: 400;
  line-height: 30px;

  @media (max-width: 480px) {
    text-align: center;
  }
`;
