import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { getProduct } from "../../../api";

import Layout from "../Layout";
import Button from "../../atoms/Button";
import Accordion from "../../molecules/Accordion";
import Preloader from "../../molecules/Preloader";
import Error from "../../molecules/Error";

import Rating from "@mui/material/Rating";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "../../../store/actions/cart";

import styled from "styled-components";
import {
  darkGreyColor,
  orangeColor,
  blackColor,
} from "../../../constants/colorPalette";

const Product = () => {
  window.scroll(0, 0);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [productId, setProductId] = useState("");

  const getData = async () => {
    try {
      setProduct(null);
      setLoading(true);

      const data = await getProduct({
        id: id,
        country: "SG",
        language: "en-SG",
      });

      setLoading(false);

      const productAttributes = data.data.data.attributes;
      setProduct(productAttributes);

      setProductId(data.data.data.id);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const addItemToCart = () => {
    const item = {
      id: productId,
      image: product["cart-image-urls"][0],
      name: product.name,
      price: product.price,
      displayPrice: product["display-price"],
      quantity: 1,
    };
    dispatch(addItem(item));
    dispatch(toggleCart(true));
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      {loading && <Preloader />}
      {error && <Error />}
      {product && (
        <ProductContainer>
          <BackLink onClick={goBack}>
            <ArrowBackIcon />
            Back
          </BackLink>
          <ProductMainInfoContainer>
            <ProductImageContainer>
              <ProductImage
                src={product?.["image-urls"]?.[0]}
                alt={product?.name}
              />
            </ProductImageContainer>
            <ProductMainInfo>
              <ProductName>{product?.name}</ProductName>
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product?.description }}
              ></ProductDescription>
              <Rating
                value={product?.rating}
                precision={0.1}
                readOnly
                size="large"
              />
              <ProductPrice>{product?.["display-price"]}</ProductPrice>
              <Button text="Add to cart" onClick={addItemToCart} />
            </ProductMainInfo>
          </ProductMainInfoContainer>
          <ProductAdditionalInfoContainer>
            <Accordion
              title="How to use"
              description={product?.["how-to-text"]}
              defaultExpanded={true}
            />
            <Accordion
              title="Ingredients"
              description={product?.ingredients}
              defaultExpanded={false}
            />
            <Accordion
              title="Benefits"
              description={product?.benefits}
              defaultExpanded={false}
            />
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

  @media (max-width: 769px) {
    width: 90%;
    margin-top: 50px;
  }
`;

const ProductMainInfoContainer = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImageContainer = styled.div`
  width: 465px;
  height: 465px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  @media (max-width: 769px) {
    width: 300px;
    height: 300px;
  }
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

  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
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
  font-size: 28px;
  font-weight: 500;
`;

const ProductAdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const BackLink = styled.button`
  width: fit-content;
  display: flex;
  gap: 10px;
  font-size: 24px;
  display: flex;
  color: ${blackColor};
  border: none;
  background-color: transparent;

  &:hover {
    color: ${orangeColor};
  }
`;
