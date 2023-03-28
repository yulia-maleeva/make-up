import React from "react";

import Title from "../../atoms/Title";
import ProductCard from "../../molecules/ProductCard";

import styled from "styled-components";

const NewArrivals = () => (
  <CardsWrapper>
    <Title title="New Arrivals" />
    <CardsContainer>
      <ProductCard
        id="37466"
        name="Cheek Stain (Limited Edition)"
        image="/assets/images/products/Tarte-Cheek-Stain-Limited-Edition.webp"
        price="48.00"
      />
      <ProductCard
        id="12821"
        name="Glowstarter Mega Illuminating Moisturizer"
        image="/assets/images/products/Glamglow-Glowstarter-Mega-illuminating-Moisturizer.webp"
        price="76.00"
      />
      <ProductCard
        id="31323"
        name="Liquid Touch Weightless Foundation"
        image="/assets/images/products/Rare-Beauty-Liquid-Touch-Weightless-Foundation.webp"
        price="52.00"
      />
      <ProductCard
        id="41365"
        name="GrandeBROW Brow Enhancing Serum"
        image="/assets/images/products/Grande-Cosmetics-GrandeBROW-Brow-Enhancing-Serum.webp"
        price="117.00"
      />
    </CardsContainer>
  </CardsWrapper>
);

export default NewArrivals;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
`;
