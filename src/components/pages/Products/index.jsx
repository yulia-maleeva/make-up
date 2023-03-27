import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProducts } from "../../../api";

import Layout from "../Layout";
import FilterPanel from "../../organisms/FilterPanel";
import CardsContainer from "../../molecules/CardsContainer";
import Preloader from "../../molecules/Preloader";

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
  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [checkedBrand, setCheckedBrand] = useState("");
  const [checkedFilter, setCheckedFilter] = useState("");

  const [loading, setLoading] = useState(false);

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
      sort: "sales",
    });

    setLoading(false);

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

  const saveCheckedBrand = (brand) => {
    setCheckedBrand(brand);
  };

  const saveCheckedFilters = (filter) => {
    if (filter) {
      setCheckedFilter(`${filter.type}_${filter.value}`);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage, checkedBrand, checkedFilter, slug]);

  return (
    <Layout>
      {loading && <Preloader />}

      {products && (
        <MainContainer>
          <Container>
            <FilterPanel
              saveCheckedBrand={saveCheckedBrand}
              saveCheckedFilters={saveCheckedFilters}
            />
            <CardsContainer data={products} />
          </Container>
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
        </MainContainer>
      )}
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

const Container = styled.div`
  width: 90%;
  display: flex;
  gap: 50px;
`;
