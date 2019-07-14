/**
 * 
 * @param {String} hexColor 
 * @param {Number} opacity 
 */
export const HexColorA = (hexColor, opacity = 1) => {
  const r = parseInt(hexColor.substring(1,3),16);
  const g = parseInt(hexColor.substring(3,5),16);
  const b = parseInt(hexColor.substring(5,7),16);
  return `rgba(${r},${g},${b},${opacity})`;
}