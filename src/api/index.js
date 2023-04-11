import axios from "axios";

let REACT_BASE_URL;
if (process.env.REACT_APP_ENV === "production") {
  REACT_BASE_URL = "https://sephora.p.rapidapi.com/";
} else {
  REACT_BASE_URL = "/";
}

const makeUpEndpoints = {
  products: function () {
    return process.env.REACT_APP_ENV === "production"
      ? "products/v2/list"
      : "products.json";
  },
  product: function () {
    return process.env.REACT_APP_ENV === "production"
      ? "products/v2/detail"
      : "product.json";
  },
  filters: function () {
    return process.env.REACT_APP_ENV === "production"
      ? "products/v2/get-filters"
      : "filters.json";
  },
  categories: function () {
    return process.env.REACT_APP_ENV === "production"
      ? "categories/v2/list"
      : "categories.json";
  },
};

const sephoraApi = axios.create({
  baseURL: REACT_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_SEPHORA_KEY,
    "X-RapidAPI-Host": "sephora.p.rapidapi.com",
  },
});

export const getProducts = (params) => {
  return sephoraApi.get(makeUpEndpoints.products(), {
    params: params,
  });
};

export const getProduct = (params) => {
  return sephoraApi.get(makeUpEndpoints.product(), {
    params: params,
  });
};

export const getFilters = (params) => {
  return sephoraApi.get(makeUpEndpoints.filters(), {
    params: params,
  });
};

export const getCategories = (params) => {
  return sephoraApi.get(makeUpEndpoints.categories(), {
    params: params,
  });
};

const monobankApi = axios.create({
  baseURL: "https://api.monobank.ua/",
  headers: {
    "X-Token": process.env.REACT_APP_MONOBANK_KEY,
  },
});

export const getInvoice = (params) => {
  return monobankApi.post("api/merchant/invoice/create", params);
};
