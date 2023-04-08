import React from "react";

import Layout from "../../pages/Layout";
import Title from "../../atoms/Title";
import Accordion from "../../molecules/Accordion";

import faq from "../../../constants/faq";

import styled from "styled-components";

const FAQ = () => {
  window.scroll(0, 0);
  return (
    <Layout>
      <FAQContainer>
        <Title title="FAQ" />
        {faq.map((item) => (
          <Accordion
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </FAQContainer>
    </Layout>
  );
};
export default FAQ;

const FAQContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;

  @media (max-width: 769px) {
    width: 90%;
    align-items: center;
    margin-top: 50px;
  }
`;
