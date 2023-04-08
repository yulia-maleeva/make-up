import axios from "axios";

//const REACT_BASE_URL = "https://sephora.p.rapidapi.com/";
const REACT_BASE_URL = "/";

const api = axios.create({
  baseURL: REACT_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.SEPHORA_KEY,
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

const monobankApi = axios.create({
  baseURL: "https://api.monobank.ua/",
  headers: {
    "X-Token": "uZh2yQb49lwPZapVEUqkY2RJdJ-YSN_tsYiAAdkP9Gxk",
  },
});

export const getInvoice = (params) => {
  return monobankApi.post("api/merchant/invoice/create", params);
};
