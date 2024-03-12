export const generateColor = (str: string) => {
  const hash = str
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  return "#" + ((hash & 0xffffff) | 0x1000000).toString(16).slice(1);
};
