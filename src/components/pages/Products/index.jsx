import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProducts } from "../../../api";

import Layout from "../Layout";
import FilterPanel from "../../organisms/FilterPanel";
import CardsContainer from "../../molecules/CardsContainer";
import Preloader from "../../molecules/Preloader";
import Error from "../../molecules/Error";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#f6623e",
      contrastText: "#ffffff",
    },
  },
});

const Products = () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [checkedBrand, setCheckedBrand] = useState("");
  const [checkedFilter, setCheckedFilter] = useState("");
  const [selected, setSelected] = useState("");

  const getData = async () => {
    setLoading(true);

    const data = await getProducts({
      root_category: slug,
      brand: checkedBrand,
      filter_type: checkedFilter,
      number: currentPage,
      size: 30,
      country: "SG",
      language: "en-SG",
      sort: selected,
    });

    if (!data.statusText === "OK") {
      setLoading(false);
      setProducts([]);
      setError(true);
      return;
    }

    const updatedData = data.data;

    setLoading(false);

    const productList = updatedData.data;
    setProducts(productList);
    console.log(productList);

    const paginationData = updatedData.meta;
    setTotalPages(paginationData["total-pages"]);
  };

  const handleChange = (e, p) => {
    setCurrentPage(p);
    window.scroll(0, 0);
  };

  const saveCheckedBrand = (brand) => {
    setCheckedBrand(brand);
  };

  const saveCheckedFilters = (filter) => {
    if (filter) {
      setCheckedFilter(`${filter.type}_${filter.value}`);
    }
  };

  const handleSelect = (e) => {
    const selectName = e.target.innerText.toLowerCase();

    switch (selectName) {
      case "published at":
        setSelected("published_at");
        break;
      case "$-$$$":
        setSelected("price");
        break;
      case "$$$-$":
        setSelected("-price");
        break;
      default:
        setSelected(selectName);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage, checkedBrand, checkedFilter, selected, slug]);

  return (
    <Layout>
      {loading && <Preloader />}
      {error && <Error />}
      {products && (
        <>
          <ProductsContainer>
            <FilterPanel
              saveCheckedBrand={saveCheckedBrand}
              saveCheckedFilters={saveCheckedFilters}
            />
            <ProductsWrapper>
              <FormControl size="small" sx={{ width: 200 }}>
                <InputLabel>Sort</InputLabel>
                <Select label="Sort">
                  <MenuItem onClick={handleSelect}>Relevance</MenuItem>
                  <MenuItem onClick={handleSelect}>Sales</MenuItem>
                  <MenuItem onClick={handleSelect}>Published at</MenuItem>
                  <MenuItem onClick={handleSelect}>Rating</MenuItem>
                  <MenuItem onClick={handleSelect}>$-$$$</MenuItem>
                  <MenuItem onClick={handleSelect}>$$$-$</MenuItem>
                </Select>
              </FormControl>
              <CardsContainer data={products} />
            </ProductsWrapper>
          </ProductsContainer>
          <ThemeProvider theme={customTheme}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handleChange}
              showFirstButton
              showLastButton
              variant="outlined"
              shape="rounded"
              sx={{
                "& .Mui-selected": {
                  backgroundColor: customTheme.palette.primary.main,
                  color: customTheme.palette.primary.contrastText,
                },
                "& .Mui-selected:hover": {
                  backgroundColor: customTheme.palette.primary.main,
                  color: customTheme.palette.primary.contrastText,
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: customTheme.palette.primary.main,
                  color: customTheme.palette.primary.contrastText,
                },
              }}
            />
          </ThemeProvider>
        </>
      )}
    </Layout>
  );
};

export default Products;

const ProductsContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 50px;
  margin-top: 100px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
