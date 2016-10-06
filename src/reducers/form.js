export default (state = { propertyValue: 0, downPayment: 0, loanDuration: 0, propertyTax: 0, pmi: 0}, action) => {
    switch (action.type) {
        case 'FORM_UPDATED':
            return { ...state, ...action.payload}
        default:
            return state;
    }
}