import { calculateMortgagePayment } from './mortgage';

it('should calculate the correct mortgage', () => {
  // https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula
  const form = {
    propertyValue: 200000,
    downPayment: 0,
    loanDuration: 30,
    interestRate: 6.5,
    propertyTax: 0,
    pmi: 0
  };
  
  expect(calculateMortgagePayment(form)).toEqual('1264.14');
});

it('should calculate the correct mortgage with a downpayment', () => {
  const form = {
    propertyValue: 250000,
    downPayment: 50000,
    loanDuration: 30,
    interestRate: 6.5,
    propertyTax: 0,
    pmi: 0
  };

  expect(calculateMortgagePayment(form)).toEqual('1264.14');
});