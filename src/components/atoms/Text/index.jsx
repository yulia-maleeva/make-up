import React from "react";

import styled from "styled-components";

const Text = ({ children }) => <CustomText>{children}</CustomText>;

export default Text;

const CustomText = styled.p`
  font-weight: 400;
  line-height: 30px;
`;
