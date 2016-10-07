import { calculateMortgagePayment } from './mortgage';

it('should calculate the correct mortgage', () => {
  // https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula
  const form = {
    propertyValue: 200000,
    downPayment: 0,
    loanDuration: 30,
    propertyTax: 0,
    pmi: 0
  };

  const interestRate = 6.5;

  expect(calculateMortgagePayment(form, interestRate)).toEqual('1264.14');
});

it('should calculate the correct mortgage with a downpayment', () => {
  const form = {
    propertyValue: 250000,
    downPayment: 16000,
    loanDuration: 15,
    propertyTax: 0,
    pmi: 0
  };

  const interestRate = 3.42;

  expect(calculateMortgagePayment(form, interestRate)).toEqual('1663.65');
});