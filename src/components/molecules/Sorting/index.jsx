import React from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import styled from "styled-components";
import { orangeColor, whiteColor } from "../../../constants/colorPalette";

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
    <SortingContainer>
      <SortingTitle>Sorting</SortingTitle>
      <CustomForm size="small">
        <InputLabel>{label}</InputLabel>
        <Select label={label}>
          {sortingValues.map((value) => (
            <CustomMenuItem key={value} onClick={handleSelect}>
              {value}
            </CustomMenuItem>
          ))}
        </Select>
      </CustomForm>
    </SortingContainer>
  );
};

export default Sorting;

const SortingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: flex-start;

  @media (max-width: 821px) {
    gap: 20px;
  }
`;

const SortingTitle = styled.h4`
  font-weight: 600;
  text-transform: uppercase;
`;

const CustomForm = styled(FormControl)`
  width: 200px;

  @media (max-width: 821px) {
    width: 100%;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${orangeColor} !important;
  }

  .Mui-focused {
    color: ${orangeColor} !important;
  }
`;

const CustomMenuItem = styled(MenuItem)`
  && {
    background-color: ${whiteColor} !important;

    &:hover {
      background-color: ${orangeColor} !important;
      color: ${whiteColor};
    }
  }
`;
