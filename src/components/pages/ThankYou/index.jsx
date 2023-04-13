import React from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/actions/cart";

import styled from "styled-components";
import {
  darkGreyColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette";

const ThankYou = () => {
  const dispatch = useDispatch();
  dispatch(clearCart());

  return (
    <ThankYouWrapper>
      <ThankYouContainer>
        <ThankYouImage src="/assets/images/check-mark.png" alt="check-mark" />
        <ThankYouTitle>Thank you!</ThankYouTitle>
        <ThankYouText>
          Your order has been received and will be shipped to you shortly.
        </ThankYouText>
        <CustomLink to={ROUTES.HOME}>Home</CustomLink>
      </ThankYouContainer>
    </ThankYouWrapper>
  );
};

export default ThankYou;

const ThankYouWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;
`;

const ThankYouImage = styled.img`
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ThankYouTitle = styled.p`
  font-family: "Jost";
  font-size: 48px;
  font-weight: 500;
`;

const ThankYouText = styled.p`
  font-family: "Jost";
  font-size: 24px;
  color: ${darkGreyColor};
  line-height: 36px;
`;

const CustomLink = styled(Link)`
  width: 150px;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  border-radius: 4px;
  padding: 10px;
  background-color: ${orangeColor};
  color: ${whiteColor};

  &:hover {
    background-color: ${whiteColor};
    color: ${orangeColor};
    border: 1px solid ${orangeColor};
  }

  &:focus {
    outline: none;
  }
`;
