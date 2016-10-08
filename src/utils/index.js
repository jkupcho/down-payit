export const isNumber = (value) => {
  console.log(value);
  if (value === '') { return ''; }
  return !isNaN(parseFloat(value)) && isFinite(value);
}