import { useState } from "react";
import { useRecipeContext } from "../context/RecipeContext";
export const AddRecipeCard = ({ setIsModalOpen }) => {
  const { addRecipe } = useRecipeContext();
  const [newRecipe, setNewRecipe] = useState({
    id: Date.now(),
    image: null,
    name: "",
    cuisine: "",
    ingredients: "",
    instructions: []
  });

  const [stepText, setStepText] = useState("");
  const [preview, setPreview] = useState(null);
  const handleChange = (e) =>
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  const handleAddStep = () => {
    setNewRecipe({
      ...newRecipe,
      instructions: [...newRecipe.instructions, stepText]
    });
    setStepText("");
  };
  const imageHandler = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      setPreview(reader.result);
    };
    setNewRecipe({ ...newRecipe, image: e.target.files[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={imageHandler}
          required
        />
        {newRecipe?.image && (
          <img src={preview} alt="recipeImg" width={200} height={200} />
        )}
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
        <button type="reset">Reset</button>
        <button
          type="submit"
          onClick={() => {
            addRecipe({
              ...newRecipe,
              ingredients: newRecipe.ingredients.split(",")
            });
            setIsModalOpen(false);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};
