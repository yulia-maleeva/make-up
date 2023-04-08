import React from "react";

import Layout from "../../pages/Layout";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";

import styled from "styled-components";

const Offer = () => {
  return (
    <Layout>
      <OfferContainer>
        <Title title="Offer" />
        <Text>
          Dear client, We are thrilled to offer our expertise in creating a
          beautiful and user-friendly makeup online store that will help you
          grow your business and reach a wider audience. Our team of experienced
          developers and designers will work closely with you to ensure that
          your vision is brought to life. Our services include: Custom Design:
          We will create a custom design for your makeup online store that
          aligns with your brand identity and reflects your products and
          services. Responsive Website: We will ensure that your makeup online
          store is fully responsive, providing a seamless shopping experience
          for your customers on all devices. E-commerce Integration: We will
          integrate your makeup online store with e-commerce functionality,
          allowing your customers to easily browse and purchase your products.
          Product Catalog Management: We will help you manage your product
          catalog, ensuring that your makeup online store is up-to-date and
          showcasing the latest and greatest products. Payment Gateway
          Integration: We will integrate your makeup online store with secure
          payment gateways, making it easy for your customers to complete
          transactions. SEO Optimization: We will optimize your makeup online
          store for search engines, ensuring that your store is easily found by
          potential customers. Analytics Tracking: We will implement analytics
          tracking on your makeup online store, giving you valuable insights
          into your customers' behavior and preferences. Our goal is to provide
          you with a high-quality, comprehensive solution that will help you
          achieve your business goals. We are committed to delivering your
          makeup online store on time and within budget, and to providing you
          with ongoing support and maintenance. Please do not hesitate to
          contact us if you have any questions or would like to discuss your
          project further. We look forward to hearing from you. Best regards,
          MAKEUP.
        </Text>
      </OfferContainer>
    </Layout>
  );
};

export default Offer;

const OfferContainer = styled.div`
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
