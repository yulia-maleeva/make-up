import React from "react";

import Layout from "../Layout";

import Swiper from "../../organisms/Swiper";
import Services from "../../organisms/Services";
import BestBrands from "../../organisms/BestBrands";

import styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <Swiper />
      <MainWrapper>
        <MainContainer>
          <Services />
          <BestBrands />
        </MainContainer>
      </MainWrapper>
    </Layout>
  );
};
export default Home;

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;

const MainContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 130px;
`;
