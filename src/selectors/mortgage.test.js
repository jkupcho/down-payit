import {
  calculateMortgagePayment,
  calculateMonthlyAmortization,
  calculateMonthlyInterestRate,
  calculatePrincipalPlusInterest,
  calculateMonthlyPropertyTax
} from './mortgage';

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
  const principal = form.propertyValue - form.downPayment;
  const monthlyPropertyTax = calculateMonthlyPropertyTax(form);

  expect(calculateMortgagePayment(form, interestRate, principal, monthlyPropertyTax)).toEqual('1264.14');
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
  const principal = form.propertyValue - form.downPayment;
  const monthlyPropertyTax = calculateMonthlyPropertyTax(form);

  expect(calculateMortgagePayment(form, interestRate, principal, monthlyPropertyTax)).toEqual('1663.65');
});

it('should calculate the correct monthly amortization', () => {
  const interestRate = 6;
  const loanDuration = 30;
  const principal = 200000;
  const month = 13;

  const monthlyInterestRate = calculateMonthlyInterestRate(interestRate);
  const principalPlusInterest = calculatePrincipalPlusInterest(interestRate, principal, loanDuration);

  const amortization = calculateMonthlyAmortization(monthlyInterestRate, principal, principalPlusInterest, month);

  console.log(amortization);
});