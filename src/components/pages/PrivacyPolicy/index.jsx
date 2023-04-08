import React from "react";

import Layout from "../../pages/Layout";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";

import styled from "styled-components";

const PrivacyPolicy = () => {
  window.scroll(0, 0);
  return (
    <Layout>
      <PrivacyPolicyContainer>
        <Title title="Privacy Policy" />
        <Text>Last updated and effective date: 13 February 2023</Text>

        <Text>
          This Privacy Policy describes how (a) Sephora Asia Pte Ltd (UEN
          200505470E); (b) Sephora Singapore Pte Ltd (UEN 200822866N); and (c)
          Sephora Digital SEA Pte. Ltd. (UEN 201111155N) (collectively and
          individually referred to as “Sephora”, "we", "our", "us"), collects,
          uses, shares and protects your Personal Data. It also tells you about
          the rights and choices you have with respect to your Personal Data,
          and how you can reach us to get answers to your questions.
        </Text>
        <Text> (1 ) What Our Privacy Policy Covers</Text>
        <Text>
          This Privacy Policy covers the Personal Data that Sephora obtains
          about you in various contexts, both online and in store, including
          when you visit, access and/or use our websites in both their web and
          mobile versions (such as “www.sephora.sg”), our “Sephora” mobile
          application(s) (both iOS and Android versions) as well as any other
          web or mobile platforms owned, operated or managed by Sephora (such
          mobile application(s) may be collectively or individually referred to
          as the “App”, and such App together with the websites may be
          collectively or individually referred to as the “Site”), visit us in
          our stores, use any of our services in our stores, communicate or
          interact with us, or participate in any of our promotions, programs or
          events. When we use the term “Personal Data” we are referring to all
          data, whether true or not, about an individual who can be identified
          from that data, or from that data and other information to which an
          organisation has or is likely to have access to, as well as any
          information for which the collection, disclosure, use or processing of
          is subject to data protection laws or regulations in any jurisdiction
          in which our stores and/or Sites are made available by us. Our Sites
          may include links to third party websites and/or applications. Please
          note that we have no control over the processing of Personal Data by
          websites or applications not owned by Sephora.
        </Text>
        <Text>
          This Privacy Policy shall be governed in accordance with the laws of
          the Republic of Singapore.
        </Text>
        <Text>
          This Privacy Policy complements and should be read together with the
          General Terms and Conditions of Sale and the Website Terms, as well as
          any documents or information notices referring to this Privacy Policy.
        </Text>
        <Text>(2 ) What We Collect</Text>
        <Text>
          You have no obligation to provide any of the Personal Data requested
          by us. However, depending on circumstances, it may be the case that if
          you do not provide the requested Personal Data, we may not be able to
          transact with you or otherwise provide you with certain products and
          services. The following are examples of the various ways in which we
          may interact with you, and some of the types of Personal Data that we
          will/may collect, use, disclose and/or process in connection with that
          interaction. The column ‘Examples of Some of the Personal Data or Data
          Collected’ does not purport to exhaustively state the types of
          Personal Data that may be collected from you corresponding to the
          specified activity/interaction.
        </Text>
        <Text>(3) How We Collect, Use, Disclose Your Personal Data</Text>
        <Text>
          We will/may collect, use, disclose and/or process your Personal Data
          for one or more of the following purposes: (a) administering,
          facilitating, processing and/or dealing in any matters relating to
          your use or access of the Sites. Without limiting the generality of
          the foregoing, if you:
        </Text>
      </PrivacyPolicyContainer>
    </Layout>
  );
};
export default PrivacyPolicy;

const PrivacyPolicyContainer = styled.div`
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
