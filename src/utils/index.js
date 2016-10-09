function hasTrailingDecimalPoint (numStr) {
  const firstIndex = numStr.indexOf('.');
  const lastIndex = numStr.lastIndexOf('.');

  return firstIndex !== -1 && (firstIndex === lastIndex);
}

export const isNumber = (value) => {
  if (value === '') { return ''; }
  return !isNaN(value) && isFinite(value);
};

/***
 * Maintain the trailing period to allow for state to persist.
 *
 * For Example: if the user types '1000.' it should convert
 * to '1,000.' to maintain the decimal otherwise, a user would never be able to
 * type a decimal within the input (with the way this is currently implemented)
 *
 * @param numStr a string representation of the number.
 *
 * Assumptions:
 * This function expects that numStr has already been verified as being an actual
 * 'number'.
 */
export const convertNumberToLocaleString = (numStr) => {
  const convertedNumber = parseFloat(numStr);
  const hasTrailingDecimal = hasTrailingDecimalPoint(numStr);

  return convertedNumber.toLocaleString() + (hasTrailingDecimal ? '.' : '');
};
