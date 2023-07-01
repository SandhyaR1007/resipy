import { recipesData } from "../data";
export const actionTypes = {
  ADD_RECIPE: "ADD_RECIPE",
  DELETE_RECIPE: "DELETE_RECIPE",
  EDIT_RECIPE: "EDIT_RECIPE"
};
export const initialState = {
  recipes: localStorage.getItem("recipes")
    ? JSON.parse(localStorage.getItem("recipes"))
    : recipesData
};

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      return { ...state, recipes: action.payload };
    case actionTypes.EDIT_RECIPE:
      return { ...state, recipes: action.payload };
    case actionTypes.DELETE_RECIPE:
      return { ...state, recipes: action.payload };
    default:
      return state;
  }
};
