import { Modal } from "antd";
import { useState } from "react";
import { AddRecipeCard } from "../components/AddRecipeCard";
import { Filters } from "../components/Filters";
import { RecipeCard } from "../components/RecipeCard";
import { useRecipeContext } from "../context/RecipeContext";

export const Home = () => {
  const { filteredRecipes } = useRecipeContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="home">
      <Modal
        title="Add Recipe"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <AddRecipeCard setIsModalOpen={setIsModalOpen} />
      </Modal>
      <nav>
        <div>
          <Filters />
        </div>

        <button onClick={() => setIsModalOpen(true)}>Add Recipe</button>
      </nav>

      <div className="recipeContainer">
        {filteredRecipes.map((data) => (
          <RecipeCard recipeData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
