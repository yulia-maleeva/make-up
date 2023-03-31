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
    <CreditCardsImage src="assets/images/credit-cards.png" alt="Credit Cards" />
  </CustomFooterPanel>
);

export default FooterPanel;

const CustomFooterPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  line-height: 26px;
`;

const CreditCardsImage = styled.img`
  width: 200px;
`;
