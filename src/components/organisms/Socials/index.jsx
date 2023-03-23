import React from "react";

import socials from "../../../constants/socials";

import styled from "styled-components";

const Socials = () => (
  <SocialsWrapper>
    {socials.map((social) => (
      <li key={social.url}>
        <a href={social.url} target="_blank">
          {social.icon}
        </a>
      </li>
    ))}
  </SocialsWrapper>
);

export default Socials;

const SocialsWrapper = styled.ul`
  display: flex;
  gap: 20px;
`;
