import React from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import styled from "styled-components";

const Sorting = ({ saveSelected, saveSelectedLabel, label }) => {
  const sortingValues = [
    "Relevance",
    "Sales",
    "Published at",
    "Rating",
    "$-$$$",
    "$$$-$",
  ];

  const handleSelect = (e) => {
    const selectName = e.target.innerText.toLowerCase();

    switch (selectName) {
      case "published at":
        saveSelected("published_at");
        saveSelectedLabel("published at");
        break;
      case "$-$$$":
        saveSelected("price");
        saveSelectedLabel("$-$$$");
        break;
      case "$$$-$":
        saveSelected("-price");
        saveSelectedLabel("$$$-$");
        break;
      default:
        saveSelected(selectName);
        saveSelectedLabel(selectName);
    }
  };
  return (
    <CustomForm size="small">
      <InputLabel>{label}</InputLabel>
      <Select label={label}>
        {sortingValues.map((value) => (
          <MenuItem key={value} onClick={handleSelect}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </CustomForm>
  );
};

export default Sorting;

const CustomForm = styled(FormControl)`
  width: 200px;
`;
