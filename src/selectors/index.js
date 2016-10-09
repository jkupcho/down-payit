import { createSelector } from 'reselect';
import {
  calculateMortgagePayment,
  calculatePrincipal,
  calculateMonthlyInterestRate,
  calculateMonthlyInterest,
  derivePaymentBreakdown,
  canCalculatePayment
} from './mortgage'

const getForm = (state) => state.form;
const getInterest = (state) => state.interest;

export const getMonthlyInterestRate = createSelector(
  [ getInterest ],
  calculateMonthlyInterestRate
);

export const getPrincipal = createSelector(
  [ getForm ],
  calculatePrincipal
);

export const getMonthlyInterest = createSelector(
  [ getPrincipal, getMonthlyInterestRate ],
  calculateMonthlyInterest
);

export const getMortgagePayment = createSelector(
  [ getForm, getInterest, getPrincipal ],
  calculateMortgagePayment
);

export const getPaymentBreakdown = createSelector(
  [ getForm, getPrincipal, getMonthlyInterest, getInterest ],
  derivePaymentBreakdown
);

export const getCanCalculatePayment = createSelector(
  [ getForm, getInterest ],
  canCalculatePayment
);