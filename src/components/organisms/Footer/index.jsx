import React from "react";

import Socials from "../Socials";
import Form from "../Form";
import Logo from "../../atoms/Logo";

import styled from "styled-components";
import { darkGreyColor, orangeColor } from "../../../constants/colorPalette";

const Footer = () => (
  <CustomFooter>
    <FooterContainer>
      <Container>
        <LogoContainer>
          <Logo />
          <p style={{ color: darkGreyColor }}>
            Looking for high-quality makeup without breaking the bank? Look no
            further.
          </p>
        </LogoContainer>
        <Form />
        <p>something</p>
      </Container>
      <Container>
        <Socials />
        <p>
          © 2023,
          <span style={{ color: orangeColor }}>MAKEUP</span>. Powered by Yulia
        </p>
      </Container>
    </FooterContainer>
  </CustomFooter>
);

export default Footer;

const CustomFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff8f6;
`;

const FooterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
