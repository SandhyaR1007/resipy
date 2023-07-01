import { Link } from "react-router-dom";

export const RecipeCard = ({ recipeData }) => {
  return (
    <div className="recipeCard">
      <header className="recipeCard__header">
        <img src={recipeData.image} alt="" />
      </header>
      <main className="recipeCard__main">
        <h3>{recipeData.name}</h3>
        <p>
          <span>Cuisine:</span> <span>{recipeData.cuisine}</span>
        </p>
        <p>
          <span>Ingredients:</span>{" "}
          <Link to={`/recipe/${recipeData.id}`}>See Recipe</Link>
        </p>
        <p>
          <span>Instructions:</span>{" "}
          <Link to={`/recipe/${recipeData.id}`}>See Recipe</Link>
        </p>
        <p>
          <button>Edit</button>
          <button>Delete</button>
        </p>
      </main>
    </div>
  );
};
