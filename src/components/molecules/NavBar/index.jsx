import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { useSelector } from "react-redux";

import { List, ListItemButton, Collapse } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import styled from "styled-components";
import {
  blackColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette";

const NavBar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const categories = useSelector((state) => state.categories.categories);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <BurgerIcon onClick={toggleMenu} />
      <CustomLinksList open={menuOpen}>
        <CloseIcon onClick={toggleMenu} />
        <CustomDesktopList>
          <CustomLink to={ROUTES.PRODUCTS}>Products</CustomLink>
          <CustomLink to={ROUTES.ABOUT}>About</CustomLink>
          <CustomLink to={ROUTES.CONTACTS}>Contacts</CustomLink>
        </CustomDesktopList>
        <CustomResponsiveList component="nav">
          <ListItemButton onClick={handleClick}>
            <CustomLink>Products</CustomLink>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <CustomLink to={ROUTES.PRODUCTS}>All</CustomLink>
              </ListItemButton>
              {categories &&
                categories.map((category) => (
                  <ListItemButton sx={{ pl: 4 }} key={category.id}>
                    <CustomLink
                      to={`${ROUTES.CATEGORY}${category.attributes["slug-url"]}`}
                    >
                      {category.attributes.label}
                    </CustomLink>
                  </ListItemButton>
                ))}
            </List>
          </Collapse>
          <ListItemButton>
            <CustomLink to={ROUTES.ABOUT}>About</CustomLink>
          </ListItemButton>
          <ListItemButton>
            <CustomLink to={ROUTES.CONTACTS}>Contacts</CustomLink>
          </ListItemButton>
        </CustomResponsiveList>
      </CustomLinksList>
    </>
  );
};

export default NavBar;

const BurgerIcon = styled(MenuIcon)`
  cursor: pointer;

  @media (min-width: 821px) {
    display: none !important;
  }
`;

const CustomLinksList = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  z-index: 100;
  padding-top: 80px;
  background-color: ${whiteColor};
  transition: all 0.3s ease-in-out;

  & svg {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  @media (min-width: 821px) {
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

const CustomDesktopList = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 821px) {
    display: none;
  }
`;

const CustomResponsiveList = styled(List)`
  display: none;

  @media (max-width: 821px) {
    display: block;
  }

  & .MuiList-root {
    padding-left: 0;
  }

  & .MuiListItemButton-root {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  & .MuiListItemText-root {
    margin-left: 16px;
  }

  & .MuiCollapse-wrapperInner {
    padding-left: 16px;
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

  @media (min-width: 821px) {
    &:hover {
      color: ${orangeColor};
    }
  }
`;
