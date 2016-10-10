import React from 'react';
import FormControl from './FormControl';
import NumericInput from '../containers/NumericInput';
import PropertyTaxInput from '../containers/PropertyTaxInput';

export default ({form, formUpdated, interest}) => {

  return (
    <form>
      <FormControl label={'Property Value'}>
        <NumericInput handleChange={formUpdated} field={'propertyValue'} value={form.propertyValue} />
      </FormControl>
      <FormControl label={'Down Payment'}>
        <NumericInput handleChange={formUpdated} field={'downPayment'} value={form.downPayment} />
      </FormControl>
      <FormControl label={'Loan Duration'}>
        <NumericInput handleChange={formUpdated} field={'loanDuration'} value={form.loanDuration} />
      </FormControl>
      <FormControl label={'Property Tax'}>
        <PropertyTaxInput handleChange={formUpdated} field={'propertyTax'} propertyValue={form.propertyValue} value={form.propertyTax} />
      </FormControl>
      <FormControl label={'PMI'}>
        <NumericInput handleChange={formUpdated} field={'pmi'} value={form.pmi} />
      </FormControl>
      <FormControl label={'APR'}>
        <NumericInput handleChange={formUpdated} field={'interest'} value={interest} />
      </FormControl>
    </form>
  )
}