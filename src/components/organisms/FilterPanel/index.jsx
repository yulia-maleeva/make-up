import React, { useState, useEffect } from "react";
import { getFilters } from "../../../api";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const FilterPanel = ({ saveCheckedBrand, saveCheckedFilters }) => {
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checkedBrand, setCheckedBrand] = useState("");
  const [checkedFilters, setcheckedFilters] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const getData = async () => {
    const data = await getFilters({
      root_category: "makeup",
      brand: checkedBrand,
      country: "SG",
      language: "en-SG",
    });

    const updatedData = data.data;

    const filteredBrands = updatedData.included.filter(
      (item) => item.type === "brands"
    );

    setBrands(filteredBrands);

    const filteredTypesAndValues = updatedData.included.filter(
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

  const checkBrand = (e) => {
    if (e.target.checked) {
      setCheckedBrand(e.target.id);
    } else {
      setCheckedBrand("");
    }
  };

  const checkFilter = (e) => {
    setcheckedFilters({
      type: e.target.dataset.id,
      value: e.target.id,
    });
  };

  saveCheckedBrand(checkedBrand);
  saveCheckedFilters(checkedFilters);

  const toggleMenu = () => {
    setPanelOpen(!panelOpen);
  };

  useEffect(() => {
    getData();
  }, [checkedBrand, checkedFilters]);

  return (
    <>
      {brands && filters ? (
        <>
          <FilterIcon onClick={toggleMenu} />
          <FilterContainer open={panelOpen}>
            <Close onClick={toggleMenu} />
            {brands.length > 0 && (
              <FilterCategory>
                <FilterTitle>Brands</FilterTitle>
                <FilterGroup>
                  {brands &&
                    brands.map((brand) => (
                      <FormControlLabel
                        key={brand.attributes.name}
                        control={
                          <Checkbox
                            id={brand.id}
                            onChange={checkBrand}
                            sx={{
                              "&.Mui-checked": {
                                color: `${orangeColor}`,
                              },
                            }}
                          />
                        }
                        label={brand.attributes.name}
                      />
                    ))}
                </FilterGroup>
              </FilterCategory>
            )}
            <>
              {filters &&
                filters.map((filter) => (
                  <FilterCategory>
                    <FilterTitle>{filter.name}</FilterTitle>
                    <FilterGroup>
                      {filter.values.map((value) => (
                        <FormControlLabel
                          key={value.value}
                          control={
                            <Checkbox
                              inputProps={{ "data-id": filter.id }}
                              id={value.id}
                              onChange={checkFilter}
                              sx={{
                                "&.Mui-checked": {
                                  color: `${orangeColor}`,
                                },
                              }}
                            />
                          }
                          label={value.value}
                        />
                      ))}
                    </FilterGroup>
                  </FilterCategory>
                ))}
            </>
          </FilterContainer>
        </>
      ) : null}
    </>
  );
};

export default FilterPanel;

const FilterContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 769px) {
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? "0" : "-100%")};
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    padding: 80px 0;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    overflow: auto;

    & svg {
      color: #0000000;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
`;

const FilterCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 769px) {
    padding-left: 20px;
  }
`;

const FilterTitle = styled.h4`
  font-weight: 600;
  text-transform: uppercase;
`;

const FilterGroup = styled.div`
  max-height: 200px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const FilterIcon = styled(FilterListIcon)`
  cursor: pointer;

  @media (min-width: 769px) {
    display: none !important;
  }
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (min-width: 769px) {
    display: none !important;
  }
`;
