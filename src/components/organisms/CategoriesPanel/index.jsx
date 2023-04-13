import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { getCategories } from "../../../api";

import { useDispatch } from "react-redux";
import { saveCategories } from "../../../store/actions/categories";

import { useSelector } from "react-redux";

import styled from "styled-components";
import {
  blackColor,
  orangeColor,
  whiteColor,
} from "../../../constants/colorPalette";

const CategoriesPanel = () => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState(null);

  const categoriesInRedux = useSelector((state) => state.categories.categories);

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
    dispatch(saveCategories(categoriesList));
  };

  useEffect(() => {
    if (!categoriesInRedux.length) {
      getData();
    } else {
      setCategories(categoriesInRedux);
    }
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

  @media (max-width: 821px) {
    display: none;
  }
`;

const CategoriesList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
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
