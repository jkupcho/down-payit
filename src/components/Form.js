import React from 'react';
import FormControl from './FormControl';
import NumericInput from '../containers/NumericInput';
import PropertyTaxInput from '../containers/PropertyTaxInput';

export default ({form, formUpdated, interest}) => {

  return (
    <form className="form-horizontal">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <FormControl label={'Property Value'}>
                  <NumericInput handleChange={formUpdated} field={'propertyValue'} value={form.propertyValue} />
                </FormControl>
              </div>
              <div className="col-md-offset-1 col-md-5">
                <FormControl label={'Down Payment'}>
                  <NumericInput handleChange={formUpdated} field={'downPayment'} value={form.downPayment} />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-md-offset-1 col-md-2">
            <div className="row">
              <div className="col-md-offset-1 col-md-11">
                <FormControl label={'Duration'}>
                  <NumericInput handleChange={formUpdated} field={'loanDuration'} value={form.loanDuration} />
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormControl label={'Tax'}>
              <PropertyTaxInput handleChange={formUpdated} field={'propertyTax'} propertyValue={form.propertyValue} value={form.propertyTax} />
            </FormControl>
          </div>
          <div className="col-md-offset-1 col-md-2">
            <FormControl label={'PMI'}>
              <NumericInput handleChange={formUpdated} field={'pmi'} value={form.pmi} />
            </FormControl>
          </div>
          <div className="col-md-offset-1 col-md-2">
            <FormControl label={'APR'}>
              <NumericInput handleChange={formUpdated} field={'interest'} value={interest} />
            </FormControl>
          </div>
        </div>
    </form>
  )
}