import { createSelector } from 'reselect';
import { calculateMortgagePayment } from './mortgage'

const getForm = (state) => state.form;
const getInterest = (state) => state.interest;

export const getMortgagePayment = createSelector(
  [ getForm, getInterest ],
  calculateMortgagePayment
);