import { CATEGORIES_TYPES } from "../types/categories";

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_TYPES.SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
