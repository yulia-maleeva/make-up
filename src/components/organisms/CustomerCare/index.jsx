import React from "react";

import styled from "styled-components";
import { darkGreyColor } from "../../../constants/colorPalette";

const CustomerCare = () => (
  <CustomerCareContainer>
    <CustomerCareTitle>Customer Care</CustomerCareTitle>
    <FormDescription>FAQ</FormDescription>
    <FormDescription>Privacy Policy</FormDescription>
  </CustomerCareContainer>
);

export default CustomerCare;

const CustomerCareContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const CustomerCareTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

const FormDescription = styled.p`
  line-height: 26px;
  text-align: center;
  color: ${darkGreyColor};
`;
