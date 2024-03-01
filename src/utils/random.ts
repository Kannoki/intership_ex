export const generateRandomArray = (
  length: number,
  minVal: number,
  maxVal: number
) =>
  Array.from(
    { length },
    () => Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal
  );
