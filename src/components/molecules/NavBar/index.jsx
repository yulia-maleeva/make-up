import React from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const NavBar = () => {
  return (
    <nav>
      <CustomLinksList>
        <li>
          <CustomLink to={ROUTES.HOME}>Home</CustomLink>
        </li>
        <li>
          <CustomLink to={ROUTES.PRODUCTS}>Products</CustomLink>
        </li>
        <li>
          <CustomLink to={ROUTES.ABOUT}>About</CustomLink>
        </li>
        <li>
          <CustomLink to={ROUTES.CONTACTS}>Contacts</CustomLink>
        </li>
      </CustomLinksList>
    </nav>
  );
};

export default NavBar;

const CustomLinksList = styled.ul`
  display: flex;
  gap: 50px;
`;

const CustomLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: ${orangeColor};
  }
`;
