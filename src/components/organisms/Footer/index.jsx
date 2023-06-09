import React from "react";

import Logo from "../../atoms/Logo";
import CustomerCare from "../CustomerCare";
import FooterPanel from "../FooterPanel";

import { Box } from "@mui/material";

import styled from "styled-components";
import { darkGreyColor } from "../../../constants/colorPalette";

const Footer = () => (
  <CustomFooter>
    <FooterContainer>
      <FooterInfoBlock>
        <LogoBlock>
          <Logo />
          <LogoBlockDescription>
            Looking for high-quality makeup without breaking the bank?
            <br />
            Look no further.
          </LogoBlockDescription>
        </LogoBlock>
        <QRCodeBlock>
          <QRCodeTitle>Get the App</QRCodeTitle>
          <QRCodeImage src="/assets/images/qr.png" alt="QR-Code" />
        </QRCodeBlock>
        <CustomerCare />
      </FooterInfoBlock>
      <Box>
        <hr></hr>
      </Box>
      <FooterPanel />
    </FooterContainer>
  </CustomFooter>
);

export default Footer;

const CustomFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding: 50px 0;
  background-color: #fff8f6;

  @media (max-width: 769px) {
    margin-top: 50px;
  }
`;

const FooterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 769px) {
    width: 90%;
  }
`;

const FooterInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 150px;

  @media (max-width: 769px) {
    gap: 50px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const LogoBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const LogoBlockDescription = styled.p`
  line-height: 26px;
  color: ${darkGreyColor};

  @media (max-width: 769px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;

const QRCodeBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const QRCodeTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

const QRCodeImage = styled.img`
  width: 40%;
  height: auto;
`;
