const initialState = {
  propertyValue: 250000,
  downPayment: 0,
  loanDuration: 30,
  propertyTax: 5500,
  pmi: 115
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_UPDATED':
      return { ...state, ...action.payload};
    default:
      return state;
  }
}