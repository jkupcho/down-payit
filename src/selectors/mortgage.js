import { isNumber } from '../utils';

export const calculateMonthlyInterestRate = (interest) => {
  return ((interest / 100) / 12);
};

export const calculateMonthlyInterest = (principal, monthlyInterestRate) => {
  return principal * monthlyInterestRate;
};

export const calculatePrincipal = ({propertyValue, downPayment}) => {
  return propertyValue - downPayment;
};

/***
 * This will be key for calculating the debt table.
 * @param interest
 * @param principal
 * @param loanDuration
 */
export const calculatePrincipalPlusInterest = (interest, principal, loanDuration) => {
  const monthlyInterest = calculateMonthlyInterestRate(interest);
  const numerator = calculateMonthlyInterest(principal, monthlyInterest);

  const denominator = (1 - (Math.pow(1 + monthlyInterest, (-loanDuration * 12))));

  return (numerator / denominator);
};

export const calculateMortgagePayment = ({loanDuration, pmi, propertyTax}, interest, principal) => {
  const principalPlusInterest = calculatePrincipalPlusInterest(interest, principal, loanDuration);

  const payment = principalPlusInterest + pmi + propertyTax;

  return isNumber(payment) ? payment.toFixed(2) : 0;
};

export const canCalculatePayment = ({ loanDuration, propertyValue }, interest) => {
  return isNumber(interest) && (
    (isNumber(loanDuration) && loanDuration > 0) &&
    (isNumber(propertyValue) && propertyValue > 0));
};

export const derivePaymentBreakdown = ({pmi, propertyTax, loanDuration}, principal, monthlyInterest, interest) => {
  return [
    {
      name: 'Interest',
      value: parseFloat(monthlyInterest.toFixed(2))
    },
    {
      name: 'PMI',
      value: pmi
    },
    {
      name: 'Principal',
      value: parseFloat((calculatePrincipalPlusInterest(interest, principal, loanDuration) - monthlyInterest).toFixed(2))
    },
    {
      name: 'Taxes',
      value: propertyTax
    }
  ];
};