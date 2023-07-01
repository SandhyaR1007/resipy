const useLocalStorage = () => {
  const getData = (key) => localStorage.getItem(key);
  const setData = (key, value) => localStorage.setItem(key, value);
  return { getData, setData };
};
export { useLocalStorage };
