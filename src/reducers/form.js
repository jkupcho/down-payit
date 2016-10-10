const initialState = {
  propertyValue: 250000,
  downPayment: 10000,
  loanDuration: 30,
  propertyTax: 5000,
  pmi: 131
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_UPDATED':
      return { ...state, ...action.payload};
    default:
      return state;
  }
}