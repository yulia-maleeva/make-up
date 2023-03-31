import React from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const NavBar = () => {
  return (
    <CustomLinksList>
      <CustomLink to={ROUTES.HOME}>Home</CustomLink>
      <CustomLink to={ROUTES.PRODUCTS}>Products</CustomLink>
      <CustomLink to={ROUTES.ABOUT}>About</CustomLink>
      <CustomLink to={ROUTES.CONTACTS}>Contacts</CustomLink>
    </CustomLinksList>
  );
};

export default NavBar;

const CustomLinksList = styled.nav`
  display: flex;
  gap: 50px;
`;

const CustomLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${orangeColor};
  }
`;
