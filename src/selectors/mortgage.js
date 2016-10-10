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
  const monthlyInterestRate = calculateMonthlyInterestRate(interest);

  const denominator = (1 - (Math.pow(1 + monthlyInterestRate, -(loanDuration * 12))));

  return (monthlyInterestRate / denominator) * principal;
};

export const calculateMortgagePayment = ({loanDuration, pmi}, interest, principal, monthlyPropertyTax) => {
  const principalPlusInterest = calculatePrincipalPlusInterest(interest, principal, loanDuration);

  const payment = principalPlusInterest + pmi + monthlyPropertyTax;

  return isNumber(payment) ? payment.toFixed(2) : 0;
};

export const canCalculatePayment = ({ loanDuration, propertyValue }, interest) => {
  return isNumber(interest) && (
    (isNumber(loanDuration) && loanDuration > 0) &&
    (isNumber(propertyValue) && propertyValue > 0));
};

export const calculateMonthlyPropertyTax = ({propertyTax}) => {
  return parseFloat(propertyTax / 12);
};

export const calculateMonthlyAmortization = (monthlyInterestRate, principal, principalPlusInterest, month) => {
  const powerOfMonthlyInterest = Math.pow((1 + monthlyInterestRate), month);

  return ((powerOfMonthlyInterest * principal) - (((powerOfMonthlyInterest - 1) / monthlyInterestRate) * principalPlusInterest)).toFixed(2);
};

export const calculateAmortization = ({loanDuration}, monthlyInterestRate, principal, principalPlusInterest) => {
  let retVal = [];

  Array(loanDuration * 12)
    .fill()
    .forEach((obj, i) => {
      const amortization = calculateMonthlyAmortization(monthlyInterestRate, principal, principalPlusInterest, i + 1);
      let previousPrincipal = (i === 0 ? principal : retVal[i - 1].value);
      const monthlyInterest = calculateMonthlyInterest(previousPrincipal, monthlyInterestRate);
      retVal.push({
        value: parseFloat(amortization),
        interest: parseFloat(monthlyInterest.toFixed(2)),
        principal: parseFloat((principalPlusInterest - monthlyInterest).toFixed(2))
      });
    });
  return retVal;
};

export const derivePaymentBreakdown = ({pmi}, monthlyInterest, monthlyPropertyTax, calculatePrincipalPlusInterest) => {
  return [
    { name: 'Principal + Interest', value: parseFloat((calculatePrincipalPlusInterest).toFixed(2)) },
    { name: 'PMI', value: pmi },
    { name: 'Taxes', value: parseFloat(monthlyPropertyTax.toFixed(2)) }
  ];
};