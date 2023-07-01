import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { useFilter } from "../hooks/useFilter";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { actionTypes } from "./recipeReducer";
import { initialState, recipeReducer } from "./recipeReducer";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const { getFilteredData } = useFilter();
  const { getData, setData } = useLocalStorage();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  useEffect(() => {
    if (!getData("recipes")) {
      setData("recipes", JSON.stringify(state.recipes));
    }
  }, []);

  const addRecipe = (recipeData) => {
    const updatedRecipes = [recipeData, ...state.recipes];
    dispatch({
      type: actionTypes.ADD_RECIPE,
      payload: updatedRecipes,
    });
    setData("recipes", JSON.stringify(updatedRecipes));
  };
  const deleteRecipe = (recipeId) => {
    const updatedRecipes = state.recipes.filter(({ id }) => id !== recipeId);
    dispatch({
      type: actionTypes.DELETE_RECIPE,
      payload: updatedRecipes,
    });
    setData("recipes", JSON.stringify(updatedRecipes));
  };

  const getRecipeById = (id) =>
    state.recipes.find((recipe) => recipe.id === Number(id));
  const filteredRecipes = getFilteredData(
    state.recipes,
    selectedType,
    searchQuery
  );
  return (
    <RecipeContext.Provider
      value={{
        getRecipeById,
        filteredRecipes,
        searchQuery,
        setSearchQuery,
        selectedType,
        setSelectedType,
        addRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);
