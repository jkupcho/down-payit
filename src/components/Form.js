import React from 'react';
import Input from './Input';
import NumberInput from './NumberInput';
import NumericInput from '../containers/NumericInput';

export default ({form, formUpdated, interest}) => {

  return (
    <form>
      <NumberInput inputLabel={'Property Value'} field={'propertyValue'} value={form.propertyValue} handleChange={formUpdated} />
      <NumberInput inputLabel={'Down Payment'} field={'downPayment'} value={form.downPayment} handleChange={formUpdated} />
      <NumberInput inputLabel={'Loan Duration'} field={'loanDuration'} value={form.loanDuration} handleChange={formUpdated} />
      <NumberInput inputLabel={'Property Tax'} field={'propertyTax'} value={form.propertyTax} handleChange={formUpdated} />
      <NumericInput />
      <NumberInput inputLabel={'PMI'} field={'pmi'} value={form.pmi} handleChange={formUpdated} />
      <Input inputLabel={'APR'} field={'interest'} value={interest} handleChange={formUpdated} />
    </form>
  )
}