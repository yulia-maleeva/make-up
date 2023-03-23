import React from "react";

import { PropTypes } from "prop-types";

import styled from "styled-components";

const Title = ({ title }) => <CustomTitle>{title}</CustomTitle>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

const CustomTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
`;
