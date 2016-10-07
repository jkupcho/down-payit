import reducer from './form';

it('should return initial state', () => {
  expect(reducer(undefined, {}))
    .toEqual({ propertyValue: 0, downPayment: 0, loanDuration: 0, propertyTax: 0, pmi: 0});
});

it('should update state when passed a new property', () => {
 const action = { type: 'FORM_UPDATED', payload: { propertyValue: 100000 }};

 expect(reducer(undefined, action))
  .toEqual({ propertyValue: 100000, downPayment: 0, loanDuration: 0, propertyTax: 0, pmi: 0})
});