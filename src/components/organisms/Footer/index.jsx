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
        <p>Something</p>
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
`;

const FooterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FooterInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 150px;
`;

const LogoBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const LogoBlockDescription = styled.p`
  line-height: 26px;
  color: ${darkGreyColor};
`;
