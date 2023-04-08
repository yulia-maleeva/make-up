import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { getCategories } from "../../../api";

import styled from "styled-components";
import {
  blackColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette";

const CategoriesPanel = () => {
  const [categories, setCategories] = useState(null);

  const getData = async () => {
    const data = await getCategories({
      country: "SG",
      language: "en-SG",
    });

    const updatedData = data.data;

    const categoriesList = updatedData.data.filter(
      (item) => item.attributes["top-level"] === true
    );

    setCategories(categoriesList);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    categories && (
      <CategoriesContainer>
        <CategoriesList>
          {categories.map((category) => (
            <CustomLink
              to={`${ROUTES.CATEGORY}${category.attributes["slug-url"]}`}
              key={category.id}
            >
              {category.attributes.label}
            </CustomLink>
          ))}
        </CategoriesList>
      </CategoriesContainer>
    )
  );
};

export default CategoriesPanel;

const CategoriesContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${orangeColor};
  color: ${whiteColor};

  @media (max-width: 480px) {
    height: 100px;
  }
`;

const CategoriesList = styled.ul`
  display: flex;
  gap: 40px;

  @media (max-width: 769px) {
    width: 90%;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 20px;
    text-align: center;
  }
`;

const CustomLink = styled(Link)`
  color: ${whiteColor};
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${blackColor};
  }
`;
