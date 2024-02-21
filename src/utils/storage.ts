export const getStorage = (key: string) => {
  const value = localStorage.getItem(key);
  console.log(typeof value);
  if (!value || value === "undefined") {
    return;
  }
  return JSON.parse(value);
};
export const setStorge = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const clearStorage = () => localStorage.clear();
