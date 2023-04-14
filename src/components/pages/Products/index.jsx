import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

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

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );

  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState([]);

  const [checkedBrand, setCheckedBrand] = useState("");
  const [checkedFilters, setCheckedFilters] = useState([]);

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
    try {
      setProducts([]);
      setLoading(true);

      const productsData = await getProducts({
        root_category: slug,
        brand: checkedBrand,
        filter_type: checkedFilters.join(","),
        number: currentPage,
        size: 30,
        country: "SG",
        language: "en-SG",
        sort: selected,
      });

      setLoading(false);

      const updatedProductsData = productsData.data;

      const productList = updatedProductsData.data;
      setProducts(productList);

      const paginationData = updatedProductsData.meta;
      setTotalPages(paginationData["total-pages"]);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const changePage = (e, p) => {
    setCurrentPage(p);
    window.scroll(0, 0);
  };

  const saveCheckedBrand = (brand) => {
    setCheckedBrand(brand);
    setCheckedFilters([]);
    setCurrentPage(1);
    window.scroll(0, 0);
  };

  const saveCheckedFilters = (key, value, checked) => {
    let filter = [...checkedFilters];

    if (checked) {
      if (!filter.find((item) => item === `${key}_${value}`)) {
        filter.unshift(`${key}_${value}`);
      }
    } else {
      filter = filter.filter((item) => item !== `${key}_${value}`);
    }

    setCheckedFilters(filter);
    setCurrentPage(1);
    window.scroll(0, 0);
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

    setSearchParams(new URLSearchParams({ page: currentPage }));
  }, [checkedBrand, checkedFilters, selected, currentPage, slug]);

  console.log("current", currentPage);

  return (
    <Layout>
      <MainWrapper>
        <ProductsContainer>
          <FilterPanel
            brands={brands}
            saveCheckedBrand={saveCheckedBrand}
            filters={filters}
            saveCheckedFilters={saveCheckedFilters}
            checkedBrand={checkedBrand}
            checkedFilters={checkedFilters}
          />
          <ProductsWrapper>
            {loading ? (
              <Preloader />
            ) : (
              <>
                <Sorting
                  saveSelected={saveSelected}
                  saveSelectedLabel={saveSelectedLabel}
                  label={selectedLabel}
                />
                <CardsContainer data={products} />
                {(error || !products.length) && (
                  <Error title="Error!" description="No avaible data!" />
                )}
                <CustomPagination
                  count={totalPages}
                  page={currentPage}
                  siblingCount={0}
                  boundaryCount={0}
                  onChange={changePage}
                  showFirstButton
                  showLastButton
                  variant="outlined"
                  shape="rounded"
                />
              </>
            )}
          </ProductsWrapper>
        </ProductsContainer>
      </MainWrapper>
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
  width: 100%;
  display: flex;
  gap: 50px;

  @media (max-width: 821px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  align-items: center;
`;

const CustomPagination = styled(Pagination)`
  margin-top: auto;
  margin-bottom: 0;

  & .MuiPaginationItem-root:hover,
  & .Mui-selected {
    background-color: ${orangeColor} !important;
    color: ${whiteColor};
  }
`;
