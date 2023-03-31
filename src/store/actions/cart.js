import { CART_TYPES } from "../types/cart";

export const addItem = (item) => ({
  type: CART_TYPES.ADD_ITEM,
  payload: item,
});
