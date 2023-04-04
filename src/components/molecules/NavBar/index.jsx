import React, { useState } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import styled from "styled-components";
import {
  blackColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <BurgerIcon onClick={toggleMenu} />
      <CustomLinksList open={menuOpen}>
        <CloseIcon onClick={toggleMenu} />
        <CustomLink to={ROUTES.HOME}>Home</CustomLink>
        <CustomLink to={ROUTES.PRODUCTS}>Products</CustomLink>
        <CustomLink to={ROUTES.ABOUT}>About</CustomLink>
        <CustomLink to={ROUTES.CONTACTS}>Contacts</CustomLink>
      </CustomLinksList>
    </>
  );
};

export default NavBar;

const BurgerIcon = styled(MenuIcon)`
  cursor: pointer;

  @media (min-width: 769px) {
    display: none !important;
  }
`;

const CustomLinksList = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  background-color: ${whiteColor};
  height: 100%;
  width: 100%;
  padding-top: 80px;
  transition: all 0.3s ease-in-out;
  z-index: 100;

  & svg {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  @media (min-width: 769px) {
    position: static;
    flex-direction: row;
    height: auto;
    padding-top: 0;
    left: 0;
    width: auto;

    & svg {
      display: none;
    }
  }
`;

const CustomLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${blackColor};
  margin: 20px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${orangeColor};
  }
`;
