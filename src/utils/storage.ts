export const getStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
};
export const setStorge = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
