import React from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import styled from "styled-components";
import { darkGreyColor, orangeColor } from "../../../constants/colorPalette";

const CustomerCare = () => (
  <CustomerCareContainer>
    <CustomerCareTitle>Customer Care</CustomerCareTitle>
    <CustomLink to={ROUTES.SHIPPING_AND_DELIVERY}>
      Shipping & Delivery
    </CustomLink>
    <CustomLink to={ROUTES.FAQ}>FAQ</CustomLink>
    <CustomLink to={ROUTES.PRIVACY_POLICY}>Privacy Policy</CustomLink>
    <CustomLink to={ROUTES.OFFER}>Offer</CustomLink>
  </CustomerCareContainer>
);

export default CustomerCare;

const CustomerCareContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: end;
  gap: 20px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const CustomerCareTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  line-height: 26px;
  text-align: center;
  color: ${darkGreyColor};

  &:hover {
    color: ${orangeColor};
  }
`;
