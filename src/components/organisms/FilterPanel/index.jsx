import React, { useState, useEffect } from "react";
import { getFilters } from "../../../api";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styled from "styled-components";

const FilterPanel = ({ saveCheckedBrand, saveCheckedFilters }) => {
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checkedBrand, setCheckedBrand] = useState("");
  const [checkedFilters, setcheckedFilters] = useState(null);

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

  useEffect(() => {
    getData();
  }, [checkedBrand, checkedFilters]);

  return (
    <FilterContainer>
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
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                  />
                }
                label={brand.attributes.name}
              />
            ))}
        </FilterGroup>
      </FilterCategory>

      <FilterCategory>
        {filters &&
          filters.map((filter) => (
            <>
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
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                      />
                    }
                    label={value.value}
                  />
                ))}
              </FilterGroup>
            </>
          ))}
      </FilterCategory>
    </FilterContainer>
  );
};

export default FilterPanel;

const FilterContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  overflow: auto;
`;
