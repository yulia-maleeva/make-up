import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes/index.js";

import { getProducts } from "../../../api";

import {
  TextField,
  Avatar,
  List,
  ListItemButton,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import styled from "styled-components";
import {
  blackColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette";

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async (value) => {
    setLoading(true);

    const data = await getProducts({
      query: value,
      size: 30,
      country: "SG",
      language: "en-SG",
    });

    const updatedData = data.data;
    const productList = updatedData.data;

    setProducts(productList);
    setIsActive(true);
    setLoading(false);
  };

  const handleInput = (e) => {
    const inputValue = e.target.value.trim();

    if (inputValue === "") {
      setIsActive(false);
      setProducts([]);
      clearTimeout(timerId);
    } else {
      clearTimeout(timerId);
      setTimerId(
        setTimeout(() => {
          getData(inputValue);
        }, 1000)
      );
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, [timerId]);

  return (
    <SearchBarContainer>
      <SearchMask
        onClick={() => {
          setIsActive(false);
        }}
        className={isActive ? "active" : ""}
      />
      <SearchSubContainer>
        <TextField
          type="search"
          placeholder="Search"
          variant="outlined"
          size="small"
          fullWidth
          onInput={handleInput}
          onClick={() => {
            setIsActive(true);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {loading && (
                  <InputAdornment position="end">
                    <RotatingIcon />
                  </InputAdornment>
                )}
              </>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: `${orangeColor}`,
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: `${orangeColor}`,
              },
          }}
        />
        {!!products.length && (
          <CustomList className={isActive ? "active" : ""}>
            {products.map((product) => (
              <CustomListItemButton key={product.id}>
                <CustomLink to={`${ROUTES.PRODUCT}${product.id}`}>
                  <Avatar
                    src={product.attributes["cart-image-urls"][0]}
                    alt={product.attributes.name}
                    variant="rounded"
                    sx={{ width: 25, height: 25 }}
                  />
                  <ProductName>{product.attributes.name}</ProductName>
                </CustomLink>
              </CustomListItemButton>
            ))}
          </CustomList>
        )}
      </SearchSubContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  position: relative;
  width: 242px;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

const SearchSubContainer = styled.div`
  z-index: 999;
  position: relative;
  background-color: white;
  border-radius: 4px;
`;

const SearchMask = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;

  &.active {
    display: block;
  }
`;

const CustomList = styled(List)`
  display: none;

  &.active {
    width: 242px;
    max-height: 380px;
    display: flex;
    flex-direction: column;
    background-color: ${whiteColor};
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    overflow: auto;
    position: absolute !important;
    z-index: 10;
    top: 45px;

    @media (max-width: 480px) {
      max-height: 440px;
    }

    @media (max-width: 769px) {
      width: 100%;
    }
  }
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const ProductName = styled.p`
  font-size: 16px;
  color: ${blackColor};

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const RotatingIcon = styled(AutorenewIcon)`
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CustomListItemButton = styled(ListItemButton)`
  min-height: 60px;
`;
