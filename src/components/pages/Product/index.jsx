import React, { useState, useEffect } from "react";
import { getProduct } from "../../../api";

import Layout from "../Layout";

import Rating from "@mui/material/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "styled-components";
import { darkGreyColor, orangeColor } from "../../../constants/colorPalette";

const Product = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const data = await getProduct({
      id: 38316,
      country: "SG",
      language: "en-SG",
    });

    const productAttributes = data.data.data.attributes;
    console.log(productAttributes);

    setProduct(productAttributes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <MainContainer>
        <ProductContainer>
          <ProductMainInfoContainer>
            <ProductImageContainer>
              <ProductImage src="" alt="image" />
            </ProductImageContainer>
            <ProductMainInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></ProductDescription>
              <Rating readOnly value={4.5} precision={0.1} size="large" />
              <ProductPrice>$18</ProductPrice>
            </ProductMainInfo>
          </ProductMainInfoContainer>
          <ProductAdditionalInfoContainer>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AccordionTitle>How to use</AccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionDescription></AccordionDescription>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <AccordionTitle>Ingridients</AccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionDescription>
                  Avocado Retinol Eye Sleeping Mask
                </AccordionDescription>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <AccordionTitle>Benefits</AccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionDescription>
                  This midi-size set of bestsellers, including the cult
                  favourite Watermelon Niacinamide Dew Drops, harnesses the
                  power of watermelon and clinically effective actives - PHA,
                  BHA, retinol, and hyaluronic acid - to visibly brighten,
                  tighten pores, gently exfoliate, and hydrate. Discover real
                  results and glowing skin.
                </AccordionDescription>
              </AccordionDetails>
            </Accordion>
          </ProductAdditionalInfoContainer>
        </ProductContainer>
      </MainContainer>
    </Layout>
  );
};

export default Product;

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;

const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ProductMainInfoContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const ProductImageContainer = styled.div`
  width: 465px;
  height: 465px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductMainInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ProductName = styled.h1`
  font-size: 36px;
  line-height: 48px;
`;

const ProductDescription = styled.p`
  font-size: 20px;
  line-height: 36px;
  color: ${darkGreyColor};
`;

const ProductPrice = styled.div`
  width: 100px;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  background-color: ${orangeColor};
  color: #ffffff;
  border-radius: 4px;
`;

const ProductAdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const AccordionTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`;

const AccordionDescription = styled.div`
  line-height: 36px;
`;
