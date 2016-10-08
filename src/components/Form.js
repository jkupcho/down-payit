import React from 'react';
import NumberInput from './NumberInput';

export default ({form, formUpdated}) => {

  return (
    <form>
      <NumberInput inputLabel={'Property Value'} field={'propertyValue'} value={form.propertyValue} handleChange={formUpdated} />
      <NumberInput inputLabel={'Down Payment'} field={'downPayment'} value={form.downPayment} handleChange={formUpdated} />
      <NumberInput inputLabel={'Loan Duration'} field={'loanDuration'} value={form.loanDuration} handleChange={formUpdated} />
      <NumberInput inputLabel={'Property Tax'} field={'propertyTax'} value={form.propertyTax} handleChange={formUpdated} />
      <NumberInput inputLabel={'PMI'} field={'pmi'} value={form.pmi} handleChange={formUpdated} />
    </form>
  )
}