import axios from "axios";

//const REACT_BASE_URL = "https://sephora.p.rapidapi.com/";
const REACT_BASE_URL = "/";

const makeUpEndpoints = {
  products: function () {
    return process.env.ENV === "production"
      ? "products/v2/list"
      : "products.json";
  },
  product: function () {
    return process.env.ENV === "production"
      ? "products/v2/detail"
      : "product.json";
  },
  filters: function () {
    return process.env.ENV === "production"
      ? "products/v2/get-filters"
      : "filters.json";
  },
  categories: function () {
    return process.env.ENV === "production"
      ? "categories/v2/list"
      : "categories.json";
  },
};

const SephoraApi = axios.create({
  baseURL: REACT_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.SEPHORA_KEY,
    "X-RapidAPI-Host": "sephora.p.rapidapi.com",
  },
});

export const getProducts = (params) => {
  return SephoraApi.get(makeUpEndpoints.products(), {
    params: params,
  });
};

export const getProduct = (params) => {
  return SephoraApi.get(makeUpEndpoints.product(), {
    params: params,
  });
};

export const getFilters = (params) => {
  return SephoraApi.get(makeUpEndpoints.filters(), {
    params: params,
  });
};

export const getCategories = (params) => {
  return SephoraApi.get(makeUpEndpoints.categories(), {
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
