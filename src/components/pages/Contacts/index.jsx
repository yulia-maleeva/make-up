import React from "react";

import { Link } from "react-router-dom";

import Layout from "../Layout";
import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import Text from "../../atoms/Text";
import FeedBackForm from "../../organisms/FeedbackForm";
import Map from "../../molecules/Map";

import PhoneIcon from "@mui/icons-material/Phone";

import styled from "styled-components";
import { darkGreyColor, orangeColor } from "../../../constants/colorPalette";

const Contacts = () => (
  <Layout>
    <ContactsContainer>
      <FeedBackForm />
      <ContactContainer>
        <Title title="Call us" />
        <Subtitle subtitle="Sephora Customer Service is ready to assist you." />
        <Text>Representatives or Beauty Advisors are available:</Text>
        <Text>
          <BoldText>MON-FRI:</BoldText> 5am to 9pm
          <br />
          <BoldText>SAT-SUN:</BoldText> 6am to 9pm
        </Text>
        <Links>
          <CustomLink to="tel:1-877-737-4672">
            <PhoneIcon style={{ fontSize: "medium" }} />
            1-877-737-4672
          </CustomLink>
          <CustomLink to="tel:1-888-866-9845">
            <PhoneIcon style={{ fontSize: "medium" }} />
            1-888-866-9845
          </CustomLink>
        </Links>
      </ContactContainer>
    </ContactsContainer>
    <Map />
  </Layout>
);
export default Contacts;

const ContactsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-top: 100px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BoldText = styled.span`
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  color: ${darkGreyColor};

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${orangeColor};
  }
`;

const GoogleMapContainer = styled.div`
  background: aqua;
`;
