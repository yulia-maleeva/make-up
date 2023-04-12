import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cart";
import categoriesReducer from "./reducers/categories";

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
