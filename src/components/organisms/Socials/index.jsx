import React from "react";

import { Link } from "react-router-dom";

import socials from "../../../constants/socials";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const Socials = () => (
  <SocialsWrapper>
    {socials.map((social) => (
      <CustomLink to={social.url} target="_blank" key={social.url}>
        {social.icon}
      </CustomLink>
    ))}
  </SocialsWrapper>
);

export default Socials;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const CustomLink = styled(Link)`
  &:focus {
    outline: none;
  }

  svg {
    &:hover {
      fill: ${orangeColor};
    }
  }
`;
