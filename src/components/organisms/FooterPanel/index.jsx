import React from "react";

import Socials from "../Socials";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const FooterPanel = () => (
  <CustomFooterPanel>
    <Socials />
    <Copyright>
      © 2023,
      <span style={{ color: orangeColor }}> MAKEUP</span>. Powered by Yulia
    </Copyright>
    <CreditCardsImage src="/assets/images/credits.png" alt="Credit Cards" />
  </CustomFooterPanel>
);

export default FooterPanel;

const CustomFooterPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 820px) {
    gap: 50px;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Copyright = styled.p`
  line-height: 26px;

  @media (max-width: 769px) {
    font-size: 12px;
    text-align: center;
  }
`;

const CreditCardsImage = styled.img`
  width: 200px;
`;
