import { useEffect, useState } from "react";
import { useRecipeContext } from "../context/RecipeContext";
export const AddRecipeCard = ({ setIsModalOpen }) => {
  const { addRecipe } = useRecipeContext();
  const [newRecipe, setNewRecipe] = useState({
    id: Date.now(),
    image: null,
    name: "",
    cuisine: "",
    ingredients: "",
    instructions: [],
  });
  useEffect(() => {
    setNewRecipe({
      id: Date.now(),
      image: null,
      name: "",
      cuisine: "",
      ingredients: "",
      instructions: [],
    });
  }, []);

  const [stepText, setStepText] = useState("");

  const handleChange = (e) =>
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  const handleAddStep = () => {
    setNewRecipe({
      ...newRecipe,
      instructions: [...newRecipe.instructions, stepText],
    });
    setStepText("");
  };
  const imageHandler = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      setNewRecipe({ ...newRecipe, image: reader.result });
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      ...newRecipe,
      ingredients: newRecipe.ingredients.split(","),
    });
    setIsModalOpen(false);
  };
  const disabled =
    newRecipe.image === null ||
    newRecipe.name.trim().length === 0 ||
    newRecipe.cuisine.trim().length === 0 ||
    newRecipe.ingredients.trim().length === 0 ||
    newRecipe.instructions.length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={imageHandler}
          required
        />
        <div>
          {newRecipe?.image && (
            <img
              src={newRecipe.image}
              alt="recipeImg"
              width={200}
              height={200}
            />
          )}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Cuisine"
          name="cuisine"
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="ingredients"
        id=""
        rows="3"
        onChange={handleChange}
        placeholder="Add Comma Seperated Ingredients"
        required
      ></textarea>
      <div>
        <h5>Instructions:</h5>
        <ol>
          {newRecipe.instructions.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
      <div>
        <label>
          <input
            type="text"
            placeholder="Step"
            value={stepText}
            onChange={(e) => setStepText(e.target.value)}
          />
        </label>
        <button disabled={stepText.trim().length === 0} onClick={handleAddStep}>
          Add Step
        </button>
      </div>
      <div>
        <button type="submit" disabled={disabled}>
          Save
        </button>
      </div>
    </form>
  );
};
