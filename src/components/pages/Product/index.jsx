import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../../../api";

import Layout from "../Layout";
import ProductAccordion from "../../molecules/ProductAccordion";

import Rating from "@mui/material/Rating";

import styled from "styled-components";
import { darkGreyColor, orangeColor } from "../../../constants/colorPalette";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getData = async () => {
    const data = await getProduct({
      id: id,
      country: "SG",
      language: "en-SG",
    });

    const productAttributes = data.data.data.attributes;

    setProduct(productAttributes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      {product && (
        <ProductContainer>
          <ProductMainInfoContainer>
            <ProductImageContainer>
              <ProductImage src={product["image-urls"][0]} alt={product.name} />
            </ProductImageContainer>
            <ProductMainInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></ProductDescription>
              <Rating
                value={product.rating}
                precision={0.1}
                readOnly
                size="large"
              />
              <ProductPrice>{product["display-price"]}</ProductPrice>
            </ProductMainInfo>
          </ProductMainInfoContainer>
          <ProductAdditionalInfoContainer>
            <ProductAccordion
              title="How to use"
              description={product["how-to-text"]}
            />
            <ProductAccordion
              title="Ingridients"
              description={product.ingredients}
            />
            <ProductAccordion title="Benefits" description={product.benefits} />
          </ProductAdditionalInfoContainer>
        </ProductContainer>
      )}
    </Layout>
  );
};

export default Product;

const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
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
