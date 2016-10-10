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
  getLoanDurationFromForm,
  calculatePrincipalPlusInterest
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

export const getMonthlyPropertyTax = createSelector(
  [ getForm ],
  calculateMonthlyPropertyTax
);

export const getMortgagePayment = createSelector(
  [ getForm, getInterest, getPrincipal, getMonthlyPropertyTax ],
  calculateMortgagePayment
);

export const getPaymentBreakdown = createSelector(
  [ getForm, getPrincipal, getMonthlyInterest, getInterest, getMonthlyPropertyTax ],
  derivePaymentBreakdown
);

export const getCanCalculatePayment = createSelector(
  [ getForm, getInterest ],
  canCalculatePayment
);

export const getLoanDuration = createSelector(
  [ getForm ],
  getLoanDurationFromForm
);

export const getPrincipalPlusInterest = createSelector(
  [ getInterest, getPrincipal, getLoanDuration ],
  calculatePrincipalPlusInterest
)

export const getAmortization = createSelector(
  [ getForm, getMonthlyInterestRate, getPrincipal, getPrincipalPlusInterest ],
  calculateAmortization
);