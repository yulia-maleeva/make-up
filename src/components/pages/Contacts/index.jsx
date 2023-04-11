import React from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import Layout from "../Layout";
import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import Text from "../../atoms/Text";
import FeedBackForm from "../../organisms/FeedbackForm";

import PhoneIcon from "@mui/icons-material/Phone";

import styled from "styled-components";
import { darkGreyColor, orangeColor } from "../../../constants/colorPalette";

const Contacts = () => {
  return (
    <Layout>
      <ContactsContainer>
        <ContactContainer>
          <Title title="Keep In Touch" />
          <Subtitle
            subtitle="Wondering about an order, membership perks or just want to leave a
            general feedback?"
          ></Subtitle>
          <Text>
            Fill in the form below, or check out our
            <FAQLink to={ROUTES.FAQ}> FAQs </FAQLink> — the answer might already
            be there!
          </Text>
          <FeedBackForm />
        </ContactContainer>
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
      <GoogleMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.455730769382!2d2.255342933864172!3d48.887651340367405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6656d780de7b9%3A0x81a2058c12e1c02b!2sSephora%20Headquarter%20France!5e0!3m2!1sru!2sua!4v1680363977127!5m2!1sru!2sua"
        width="50%"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></GoogleMap>
    </Layout>
  );
};
export default Contacts;

const ContactsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-top: 100px;

  @media (max-width: 769px) {
    width: 90%;
    gap: 50px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    text-align: center;
  }
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

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const FAQLink = styled(Link)`
  text-decoration: none;
`;

const GoogleMap = styled.iframe`
  width: 80%;

  @media (max-width: 769px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
