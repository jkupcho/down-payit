import { createSelector } from 'reselect';
import { calculateMortgagePayment, calculatePrincipal } from './mortgage'

const getForm = (state) => state.form;
const getInterest = (state) => state.interest;

export const getPrincipal = createSelector(
  [ getForm ],
  calculatePrincipal
)

export const getMortgagePayment = createSelector(
  [ getForm, getInterest, getPrincipal ],
  calculateMortgagePayment
);