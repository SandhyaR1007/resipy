import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipeDetails } from "./pages/ReceipeDetails";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}
