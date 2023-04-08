import React from "react";

import Layout from "../../pages/Layout";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";

import styled from "styled-components";

const ShippingAndDelivery = () => {
  return (
    <Layout>
      <ShippingAndDeliveryContainer>
        <Title title="Shipping & Delivery" />
        <Text>
          Hello, We would like to offer you our shipping and delivery services
          for your online makeup store. Our company provides reliable and
          efficient shipping services to ensure that your customers receive
          their purchases in a timely manner. Our shipping options include
          standard, expedited, and overnight delivery, depending on your
          customers' needs. We also offer international shipping, which allows
          you to expand your customer base beyond the local market. We provide
          real-time tracking and delivery notifications to keep your customers
          updated on the status of their orders. Our team of customer service
          representatives is available 24/7 to assist with any inquiries or
          concerns. Additionally, we offer hassle-free returns and exchanges for
          any damaged or defective products, providing your customers with peace
          of mind when making their purchases. Our shipping rates are
          competitive and can be customized based on your business needs. We
          also offer bulk shipping discounts for larger orders. We look forward
          to the opportunity to partner with you and provide exceptional
          shipping and delivery services for your online makeup store. Please
          let us know if you have any questions or would like to learn more
          about our services. Best regards, MAKEUP.
        </Text>
      </ShippingAndDeliveryContainer>
    </Layout>
  );
};

export default ShippingAndDelivery;

const ShippingAndDeliveryContainer = styled.div`
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
