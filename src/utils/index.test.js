import { isNumber, convertNumberToLocaleString } from './index';

describe('isNumber', () => {

  it('should return false for alphanumeric value', () => {
    expect(isNumber('abc')).toBe(false);
  });

  it('should return true an actual number', () => {
    expect(isNumber(1300)).toBe(true);
    expect(isNumber(1300.)).toBe(true);
  });

  it('should return false for unknown values', () => {
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });

});

describe('convertNumberToLocaleString', () => {

  it('should convert known numbers', () => {
    const converted = convertNumberToLocaleString('1000');
    expect(converted).toBe('1,000');
  });

});


