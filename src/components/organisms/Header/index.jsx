import React from "react";

import Logo from "../../atoms/Logo";
import NavBar from "../../molecules/NavBar";
import SearchBar from "../../molecules/SearchBar";

import styled from "styled-components";

const Header = () => (
  <CustomHeader>
    <HeaderContainer>
      <Logo />
      <NavBar />
      <SearchBar />
    </HeaderContainer>
  </CustomHeader>
);

export default Header;

const CustomHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 769px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    gap: 20px;
  }
`;
