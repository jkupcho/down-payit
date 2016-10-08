export const isNumber = (value) => {
  if (value === '') { return ''; }
  return !isNaN(parseFloat(value)) && isFinite(value);
}