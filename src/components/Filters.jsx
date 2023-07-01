import { useRecipeContext } from "../context/RecipeContext";

export const Filters = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType
  } = useRecipeContext();
  const filters = ["name", "ingredients", "cuisine"];
  return (
    <>
      <div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        {filters.map((data) => (
          <label key={data}>
            <span>{data}</span>
            <input
              type="radio"
              name="category"
              value={data}
              checked={selectedType === data}
              onChange={(e) => setSelectedType(e.target.value)}
            />
          </label>
        ))}
      </div>
    </>
  );
};
