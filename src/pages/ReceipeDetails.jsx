import { useParams, NavLink } from "react-router-dom";
import { useRecipeContext } from "../context/RecipeContext";

export const RecipeDetails = () => {
  const { getRecipeById } = useRecipeContext();
  const { recipeId } = useParams();
  const recipeDetails = getRecipeById(recipeId);
  console.log({ recipeDetails });
  return (
    <div className="recipeDetails">
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <header>
        <img src={recipeDetails?.image} alt={recipeDetails?.name} />
      </header>
      <main>
        <h2>{recipeDetails?.name}</h2>
        <h4>
          Cuisine: <span>{recipeDetails?.cuisine}</span>
        </h4>
        <div>
          <h4>Ingredients:</h4>
          <p>{recipeDetails?.ingredients?.map((data) => data)?.join(", ")}</p>
        </div>
        <div>
          <h4>Instructions:</h4>
          <ol>
            {recipeDetails?.instructions?.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
};
