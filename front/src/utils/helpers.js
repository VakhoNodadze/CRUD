export const capitalizeWords = (string) => {
  if (!string) {return null;}
  const splitStr = string.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};
export const capitalizeFirstLetter = (string) => {
  if (!string) {return null;}
  const splitStr = string.toLowerCase().split(' ');
  splitStr[0] = splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1);
  // Directly return the joined string
  return splitStr.join(' ');
};
export const generateId = () => `_${Math.random()
    .toString(36)
    .substr(2, 9)}`
