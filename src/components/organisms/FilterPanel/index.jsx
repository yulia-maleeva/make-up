import React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const FilterPanel = ({
  brands,
  saveCheckedBrand,
  filters,
  saveCheckedFilter,
  checkedBrand,
  checkedFilter,
}) => {
  const handleCheckBrand = (e) => {
    saveCheckedBrand(e.target.checked ? e.target.id : "");
  };

  const handleCheckFilter = (e) => {
    const filter = {
      type: e.target.dataset.id,
      value: e.target.id,
    };
    saveCheckedFilter(e.target.checked ? filter : "");
  };

  return (
    <FilterContainer>
      {brands.length > 0 && (
        <FilterCategory>
          <FilterTitle>Brands</FilterTitle>
          <FilterGroup>
            {brands.map((brand) => (
              <FormControlLabel
                key={brand.attributes.name}
                control={
                  <Checkbox
                    checked={checkedBrand === brand.id}
                    id={brand.id}
                    onChange={handleCheckBrand}
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
      {filters.length > 0 &&
        filters.map((filter) => (
          <FilterCategory key={filter.name}>
            <FilterTitle>{filter.name}</FilterTitle>
            <FilterGroup>
              {filter.values.map((value) => (
                <FormControlLabel
                  key={value.value}
                  control={
                    <Checkbox
                      inputProps={{ "data-id": filter.id }}
                      checked={checkedFilter === `${filter.id}_${value.id}`}
                      id={value.id}
                      onChange={handleCheckFilter}
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
    </FilterContainer>
  );
};

export default FilterPanel;

const FilterContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 30px;

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
  gap: 10px;
  overflow: auto;
`;
