import React from "react";

import Layout from "../../pages/Layout";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import VideoPlayer from "../../molecules/VideoPlayer";

import styled from "styled-components";

const About = () => (
  <Layout>
    <AboutContainer>
      <Title title="About us" />
      <Text>
        We are a global beauty retailer that offers a wide selection of makeup,
        skincare, haircare, fragrance, and beauty tools and accessories from
        over 300 brands. With over 2,600 stores in 35 countries, including the
        United States, Canada, Mexico, China, and Australia, our mission is to
        inspire and empower our customers to explore and express their beauty
        through a carefully curated selection of products and expert advice from
        our team of beauty advisors.
      </Text>
      <Text>
        We take pride in our online shopping experience through our website and
        mobile app, where customers can shop, browse reviews, and receive
        personalized recommendations based on their individual beauty
        preferences and concerns. We also offer a range of beauty services,
        including makeup and skincare consultations, makeovers, and classes,
        both in-store and online.
      </Text>
      <Text>
        Our signature Beauty Insider loyalty program rewards our customers with
        points for every purchase, which can be redeemed for rewards, discounts,
        and exclusive experiences. At Sephora, we are committed to inclusivity
        and diversity, offering a wide range of products and shade ranges for
        all skin tones and types.
      </Text>
      <Text>
        We are also dedicated to supporting and uplifting underrepresented
        communities through our "We Belong to Something Beautiful" campaign and
        our "15% Pledge" commitment to increase our assortment of Black-owned
        brands. At Sephora, we are more than just a beauty retailer - we are a
        community that celebrates individuality, creativity, and
        self-expression.
      </Text>
      <VideoPlayer />
    </AboutContainer>
  </Layout>
);

export default About;

const AboutContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
`;
