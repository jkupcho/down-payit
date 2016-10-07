export const calculateMortgagePayment = (form, interest) => {
  const monthlyInterest = ((interest / 100) / 12);
  const principal = (form.propertyValue - form.downPayment);

  const numerator = (monthlyInterest * principal);
  const denominator = (1 - (Math.pow(1 + monthlyInterest, (-form.loanDuration * 12))));

  return (numerator / denominator).toFixed(2);
};