import { createSelector } from 'reselect';
import {
  calculateMortgagePayment,
  calculatePrincipal,
  calculateMonthlyInterestRate,
  calculateMonthlyInterest,
  derivePaymentBreakdown,
  canCalculatePayment,
  calculateMonthlyPropertyTax,
  calculateAmortization,
  calculatePrincipalPlusInterest
} from './mortgage'

const getForm = (state) => state.form;
const getInterest = (state) => state.interest;
const getLoanDuration = (state) => state.form.loanDuration;

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

export const getMonthlyPropertyTax = createSelector(
  [ getForm ],
  calculateMonthlyPropertyTax
);

export const getMortgagePayment = createSelector(
  [ getForm, getInterest, getPrincipal, getMonthlyPropertyTax ],
  calculateMortgagePayment
);

export const getPrincipalPlusInterest = createSelector(
  [ getInterest, getPrincipal, getLoanDuration ],
  calculatePrincipalPlusInterest
);

export const getPaymentBreakdown = createSelector(
  [ getForm, getMonthlyInterest, getMonthlyPropertyTax, getPrincipalPlusInterest ],
  derivePaymentBreakdown
);

export const getCanCalculatePayment = createSelector(
  [ getForm, getInterest ],
  canCalculatePayment
);

export const getAmortization = createSelector(
  [ getForm, getMonthlyInterestRate, getPrincipal, getPrincipalPlusInterest ],
  calculateAmortization
);