import React from 'react';
import Input from './Input';

export default ({form, formUpdated}) => {

  return (
    <form>
      <Input inputLabel={'Property Value'} field={'propertyValue'} value={form.propertyValue} handleChange={formUpdated} />
      <Input inputLabel={'Down Payment'} field={'downPayment'} value={form.downPayment} handleChange={formUpdated} />
      <Input inputLabel={'Loan Duration'} field={'loanDuration'} value={form.loanDuration} handleChange={formUpdated} />
      <Input inputLabel={'Property Tax'} field={'propertyTax'} value={form.propertyTax} handleChange={formUpdated} />
      <Input inputLabel={'PMI'} field={'pmi'} value={form.pmi} handleChange={formUpdated} />
    </form>
  )
}