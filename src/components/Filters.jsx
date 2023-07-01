import { useRecipeContext } from "../context/RecipeContext";

export const Filters = () => {
  const { searchQuery, setSearchQuery, selectedType, setSelectedType } =
    useRecipeContext();
  const filters = ["name", "ingredients", "cuisine"];
  return (
    <div className="filters">
      <label htmlFor="search"> Select a type to Search:</label>
      <input
        id="search"
        type="search"
        placeholder="Search by type"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        disabled={selectedType.length === 0}
      />

      <div className="radios">
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
    </div>
  );
};
