import React, { useState, useEffect } from "react";
import { getProducts } from "../../../api";

import Layout from "../Layout";
import FilterPanel from "../../organisms/FilterPanel";
import CardsContainer from "../../molecules/CardsContainer";

import Pagination from "@mui/material/Pagination";

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
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    const data = await getProducts({
      number: currentPage,
      size: 30,
      country: "SG",
      language: "en-SG",
      sort: "sales",
    });

    const updatedData = data.data;
    console.log(updatedData);

    const productList = updatedData.data;
    setProducts(productList);

    const paginationData = updatedData.meta;
    setTotalPages(paginationData["total-pages"]);
  };

  const handleChange = (e, p) => {
    setCurrentPage(p);
    window.scroll(0, 0);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <Layout>
      <MainContainer>
        <FilterPanel />
        <CardsContainer data={products} />
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
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: customTheme.palette.primary.main,
                color: customTheme.palette.primary.contrastText,
              },
            }}
          />
        </ThemeProvider>
      </MainContainer>
    </Layout>
  );
};

export default Products;

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 100px 0;
`;
