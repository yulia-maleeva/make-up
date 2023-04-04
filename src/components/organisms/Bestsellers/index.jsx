import React from "react";

import Title from "../../atoms/Title";
import ProductCard from "../../molecules/ProductCard";

import styled from "styled-components";

const Bestsellers = () => (
  <CardsSection>
    <Title title="Bestsellers" />
    <CardsContainer>
      <ProductCard
        id="12181"
        name="Match Stix Matte Contour Skinstick"
        image="/assets/images/products/Fenty-Beauty-Match-Stix-Matte-Skinstick.webp"
        price="49.00"
      />
      <ProductCard
        id="21679"
        name="Hot Lips Matte Revolution Lipstick"
        image="/assets/images/products/Charlotte-Tilbury-Hot-Lips-Matte-Revolution-Lipstick.webp"
        price="51.00"
      />
      <ProductCard
        id="35245"
        name="Rose Quartz Eyeshadow Palette"
        image="/assets/images/products/Huda-Beauty-Rose-Quartz-Eyeshadow-Palette.webp"
        price="106.00"
      />
      <ProductCard
        id="32367"
        name="Macro Blade Liquid Liner"
        image="/assets/images/products/Natasha-Denona-Macro-Blade-Liquid-Liner.webp"
        price="42.00"
      />
    </CardsContainer>
  </CardsSection>
);

export default Bestsellers;

const CardsSection = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 769px) {
    width: 90%;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;
