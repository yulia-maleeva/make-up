import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { getCategories } from "../../../api";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

const CategoriesPanel = () => {
  const [categories, setCategories] = useState(null);

  const getData = async () => {
    const data = await getCategories({
      number: "1",
      size: "100",
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
  color: #ffffff;
`;

const CategoriesList = styled.ul`
  display: flex;
  gap: 40px;
`;

const CustomLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;
