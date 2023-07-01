const useFilter = () => {
  const getFilteredData = (data, selectedType, searchQuery) => {
    switch (selectedType) {
      case "name":
        return data.filter(({ name }) =>
          name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      case "ingredients":
        return data.filter(({ ingredients }) =>
          ingredients.some((data) =>
            data.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      case "cuisine":
        return data.filter(({ cuisine }) =>
          cuisine.toLowerCase().includes(searchQuery.toLowerCase())
        );
      default:
        return data;
    }
  };
  return { getFilteredData };
};
export { useFilter };
