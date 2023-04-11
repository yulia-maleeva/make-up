import React from "react";

import styled from "styled-components";

const Logo = () => <CustomLogo src="/assets/svg/logo.svg" alt="logo" />;

export default Logo;

const CustomLogo = styled.img`
  width: 200px;

  @media (max-width: 480px) {
    width: 150px;
  }
`;
