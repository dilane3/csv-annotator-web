export const formatSize = (size) => {
  if (size < 1000) return `${size} o`;
  if (size < 10000) return `${Math.floor((size / 1024) * 100) / 100} Ko`;
};
