const initialState = {
  propertyValue: 0,
  downPayment: 0,
  loanDuration: 0,
  propertyTax: 12312,
  pmi: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_UPDATED':
      return { ...state, ...action.payload};
    default:
      return state;
  }
}