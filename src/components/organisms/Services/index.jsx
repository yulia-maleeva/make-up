import React from "react";

import services from "../../../constants/services";

import styled from "styled-components";
import { lightGreyColor } from "../../../constants/colorPalette";

const Services = () => (
  <ServicesSection>
    {services.map((service) => (
      <ServiceContainer key={service.name}>
        {service.icon}
        <ServiceInfoContainer>
          <Title>{service.name}</Title>
          <Description>{service.description}</Description>
        </ServiceInfoContainer>
      </ServiceContainer>
    ))}
  </ServicesSection>
);

export default Services;

const ServicesSection = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ServiceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: ${lightGreyColor};
`;
