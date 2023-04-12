import { CATEGORIES_TYPES } from "../types/categories";

export const saveCategories = (categories) => ({
  type: CATEGORIES_TYPES.SAVE_CATEGORIES,
  payload: categories,
});
