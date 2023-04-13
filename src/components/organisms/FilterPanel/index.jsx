import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

import styled from "styled-components";
import { orangeColor, whiteColor } from "../../../constants/colorPalette";

const FilterPanel = ({
  brands,
  saveCheckedBrand,
  filters,
  saveCheckedFilters,
  checkedBrand,
  checkedFilters,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheckBrand = (e) => {
    saveCheckedBrand(e.target.checked ? e.target.id : "");
  };

  const handleCheckFilter = (e) => {
    saveCheckedFilters(e.target.dataset.id, e.target.id, e.target.checked);
  };

  return (
    <>
      <FiltersMenu>
        <CustomFilterIcon onClick={handleClick} />
        <FilterMenuTitle>Filters</FilterMenuTitle>
      </FiltersMenu>
      <FilterContainer open={open}>
        <CustomCloseIcon onClick={handleClick} />
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
                        checked={checkedFilters.includes(
                          `${filter.id}_${value.id}`
                        )}
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
    </>
  );
};

export default FilterPanel;

const FilterContainer = styled.div`
  min-width: 250px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 821px) {
    max-width: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? "0" : "-100%")};
    bottom: 0;
    z-index: 100;
    padding: 20px;
    background-color: ${whiteColor};
    transition: all 0.3s ease-in-out;
    overflow: auto;
  }
`;

const FilterCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const CustomFilterIcon = styled(FilterListIcon)`
  cursor: pointer;
  background-color: ${orangeColor};
  border-radius: 4px;
  color: ${whiteColor};
`;

const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  align-self: end;

  @media (min-width: 821px) {
    display: none !important;
  }
`;

const FiltersMenu = styled.div`
  display: none;

  @media (max-width: 821px) {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
  }
`;

const FilterMenuTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`;
