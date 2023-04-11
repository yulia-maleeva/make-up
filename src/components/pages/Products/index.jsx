import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getFilters, getProducts } from "../../../api";

import Layout from "../Layout";
import FilterPanel from "../../organisms/FilterPanel";
import CardsContainer from "../../molecules/CardsContainer";
import Sorting from "../../molecules/Sorting";
import Preloader from "../../molecules/Preloader";
import Error from "../../molecules/Error";

import { Pagination } from "@mui/material";

import styled from "styled-components";
import { orangeColor, whiteColor } from "../../../constants/colorPalette";

const Products = () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState([]);

  const [checkedBrand, setCheckedBrand] = useState("");
  const [checkedFilter, setCheckedFilter] = useState("");

  const [selected, setSelected] = useState("rating");
  const [selectedLabel, setSelectedLabel] = useState("Rating");

  const getFiltersData = async () => {
    const filtersData = await getFilters({
      root_category: "makeup",
      brand: checkedBrand,
      country: "SG",
      language: "en-SG",
    });

    const updatedFilters = filtersData.data;

    const filteredBrands = updatedFilters.included.filter(
      (item) => item.type === "brands"
    );

    setBrands(filteredBrands);

    const filteredTypesAndValues = updatedFilters.included.filter(
      (item) => item.type === "filter-types" || item.type === "filter-values"
    );

    let filteredItem = false;
    let filteredItems = [];

    filteredTypesAndValues.forEach((item, key, arr) => {
      if (item.type === "filter-types") {
        if (filteredItem) {
          filteredItems.push(filteredItem);
        } else {
          filteredItem = {};
        }

        filteredItem = {
          id: item.id,
          name: item.attributes.name,
          values: [],
        };
      }

      if (item.type === "filter-values") {
        filteredItem.values.push({
          id: item.id,
          value: item.attributes.value,
        });
      }

      if (key === arr.length - 1) {
        filteredItems.push(filteredItem);
      }
    });

    setFilters(filteredItems);
  };

  const getProductsData = async () => {
    setProducts([]);
    setLoading(true);

    const productsData = await getProducts({
      root_category: slug,
      brand: checkedBrand,
      filter_type: checkedFilter,
      number: currentPage,
      size: 30,
      country: "SG",
      language: "en-SG",
      sort: selected,
    }).catch(() => {
      setLoading(false);
      setError(true);
    });

    const updatedProductsData = productsData.data;
    setLoading(false);

    const productList = updatedProductsData.data;
    setProducts(productList);

    const paginationData = updatedProductsData.meta;
    setTotalPages(paginationData["total-pages"]);
  };

  const changePage = (e, p) => {
    setCurrentPage(p);
    window.scroll(0, 0);
  };

  const saveCheckedBrand = (brand) => {
    setCheckedBrand(brand);
    setCurrentPage(1);
  };

  const saveCheckedFilter = (filter) => {
    setCheckedFilter(`${filter.type}_${filter.value}`);
    setCurrentPage(1);
  };

  const saveSelected = (selected) => {
    setSelected(selected);
    setCurrentPage(1);
  };

  const saveSelectedLabel = (selectedLabel) => {
    setSelectedLabel(selectedLabel);
  };

  useEffect(() => {
    getFiltersData();
    getProductsData();
  }, [checkedBrand, checkedFilter, selected, currentPage, slug]);

  return (
    <Layout>
      {loading && <Preloader />}
      {error && <Error title="Error!" description="No avaible data!" />}{" "}
      {products.length > 0 && (
        <MainWrapper>
          <ProductsContainer>
            <FilterPanel
              brands={brands}
              saveCheckedBrand={saveCheckedBrand}
              filters={filters}
              saveCheckedFilter={saveCheckedFilter}
              checkedBrand={checkedBrand}
              checkedFilter={checkedFilter}
            />
            <ProductsWrapper>
              <Sorting
                saveSelected={saveSelected}
                saveSelectedLabel={saveSelectedLabel}
                label={selectedLabel}
              />
              <CardsContainer data={products} />
            </ProductsWrapper>
          </ProductsContainer>
          <CustomPagination
            count={totalPages}
            page={currentPage}
            onChange={changePage}
            siblingCount={0}
            boundaryCount={0}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
          />
        </MainWrapper>
      )}
    </Layout>
  );
};

export default Products;

const MainWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 100px;

  @media (max-width: 769px) {
    width: 90%;
    margin-top: 50px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CustomPagination = styled(Pagination)`
  & .MuiPaginationItem-root:hover,
  & .Mui-selected {
    background-color: ${orangeColor} !important;
    color: ${whiteColor};
  }
`;
