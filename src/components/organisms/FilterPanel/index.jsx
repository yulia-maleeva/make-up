import React, { useState, useEffect } from "react";
import { getFilters } from "../../../api";

const FilterPanel = () => {
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState([]);

  const getData = async () => {
    const data = await getFilters({
      root_brand: "aerin",
      root_category: "makeup",
      country: "SG",
      language: "en-SG",
    });

    const updatedData = data.data;
    console.log(updatedData);

    const newBrands = [];
    const newFilters = [];

    updatedData.included.map((includedItem) => {
      if (includedItem.type === "brands") {
        newBrands.push(includedItem.attributes.name);
      }
    });

    let filterItem = {};

    updatedData.included
      .filter(
        (includedItem) => !["categories", "brands"].includes(includedItem.type)
      )
      .forEach((includedItem, key, arr) => {
        if (includedItem.type == "filter-types") {
          if (filterItem) {
            newFilters.push(filterItem);
          }

          filterItem = {
            name: includedItem.attributes.name,
            id: includedItem.id,
            values: [],
          };
        }

        if (includedItem.type == "filter-values") {
          filterItem.values.push({
            value: includedItem.attributes.value,
            id: includedItem.id,
          });
        }

        if (key === arr.length - 1) {
          newFilters.push(filterItem);
        }
      });

    console.log(newFilters);

    setBrands(newBrands);
    setFilters(newFilters);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>Brands</h3>
      {brands.map((brand) => (
        <>
          <label>{brand}</label>
          <br />
          <input type="checkbox" />
        </>
      ))}

      <h3>Categories</h3>
    </>
  );
};

export default FilterPanel;
