import axios from "axios";

//const REACT_BASE_URL = "https://sephora.p.rapidapi.com/";
const REACT_BASE_URL = "/";

const api = axios.create({
  baseURL: REACT_BASE_URL,
  headers: {
    "X-RapidAPI-Key": "09047c13d8msh4061e3864efdb75p162f55jsn062474047960",
    "X-RapidAPI-Host": "sephora.p.rapidapi.com",
  },
});
/*
export const getProducts = (params) => {
  return api.get("products/v2/list", {
    params: params,
  });
};

export const getProduct = (params) => {
  return api.get("products/v2/detail", {
    params: params,
  });
};

export const getFilters = (params) => {
  return api.get("products/v2/get-filters", {
    params: params,
  });
};

export const getCategories = (params) => {
  return api.get("categories/v2/list", {
    params: params,
  });
};*/

export const getProducts = (params) => {
  return api.get("products.json", {
    params: params,
  });
};

export const getProduct = (params) => {
  return api.get("product.json", {
    params: params,
  });
};

export const getFilters = (params) => {
  return api.get("filters.json", {
    params: params,
  });
};

export const getCategories = (params) => {
  return api.get("categories.json", {
    params: params,
  });
};
