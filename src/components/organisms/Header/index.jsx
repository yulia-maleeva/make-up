import React from "react";

import NavBar from "../../molecules/NavBar";
import Logo from "../../atoms/Logo";

import styled from "styled-components";

const Header = () => (
  <CustomHeader>
    <HeaderContainer>
      <Logo />
      <NavBar />
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
`;

const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
