import { CART_TYPES } from "../types/cart";

export const toggleCart = (toggle) => ({
  type: CART_TYPES.TOGGLE_CART,
  payload: toggle,
});

export const addItem = (item) => ({
  type: CART_TYPES.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: CART_TYPES.REMOVE_ITEM,
  payload: id,
});

export const incrementItem = (id) => ({
  type: CART_TYPES.INCREMENT,
  payload: id,
});

export const decrementItem = (id) => ({
  type: CART_TYPES.DECREMENT,
  payload: id,
});
