import {
  calculateMortgagePayment,
  calculateMonthlyAmortization,
  calculateMonthlyInterestRate,
  calculatePrincipalPlusInterest,
  calculateMonthlyPropertyTax,
  calculateAmortization
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


describe('amortization', () => {
  const interestRate = 6;
  const loanDuration = 10;
  const principal = 200000;

  const monthlyInterestRate = calculateMonthlyInterestRate(interestRate);
  const principalPlusInterest = calculatePrincipalPlusInterest(interestRate, principal, loanDuration);

  it('should calculate the correct monthly amortization', () => {
    const month = 13;

    const amortization = calculateMonthlyAmortization(monthlyInterestRate, principal, principalPlusInterest, month);

    expect(amortization).toEqual('183649.87');
  });

  it('should do stuff', () => {
    const retVal = calculateAmortization({loanDuration}, monthlyInterestRate, principal, principalPlusInterest);

    expect(retVal[1]).toEqual({value: 197553.08, interest: 993.90, principal: 1226.51});
  });

});
