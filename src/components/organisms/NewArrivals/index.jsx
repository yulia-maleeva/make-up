import React from "react";

import Title from "../../atoms/Title";
import ProductCard from "../../molecules/ProductCard";

import styled from "styled-components";

const NewArrivals = () => (
  <CardsSection>
    <Title title="New Arrivals" />
    <CardsContainer>
      <ProductCard
        id="37466"
        name="Cheek Stain (Limited Edition)"
        image="/assets/images/products/Tarte-Cheek-Stain-Limited-Edition.webp"
        price={4800}
        shownPrice="48"
      />
      <ProductCard
        id="12821"
        name="Glowstarter Mega Illuminating Moisturizer"
        image="/assets/images/products/Glamglow-Glowstarter-Mega-illuminating-Moisturizer.webp"
        price={7600}
        shownPrice="76"
      />
      <ProductCard
        id="31323"
        name="Liquid Touch Weightless Foundation"
        image="/assets/images/products/Rare-Beauty-Liquid-Touch-Weightless-Foundation.webp"
        price={5200}
        shownPrice="52"
      />
      <ProductCard
        id="41365"
        name="GrandeBROW Brow Enhancing Serum"
        image="/assets/images/products/Grande-Cosmetics-GrandeBROW-Brow-Enhancing-Serum.webp"
        price={11700}
        shownPrice="117"
      />
    </CardsContainer>
  </CardsSection>
);

export default NewArrivals;

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
