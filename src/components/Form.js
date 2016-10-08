import React from 'react';

export default ({propertyValue, downPayment, loanDuration, propertyTax, pmi, formUpdated}) => {
  return (
    <form>
      <div className="form-group">
        <label>Property Value</label>
        <input type="text" className="form-control" placeholder="Property Value" onChange={ (e) => formUpdated({ field: 'propertyValue', value: +e.target.value })} />
      </div>
      <div className="form-group">
        <label>Down Payment</label>
        <input type="text" className="form-control" placeholder="Down Payment" onChange={ (e) => formUpdated({ field: 'downPayment', value: +e.target.value })}  />
      </div>
      <div className="form-group">
        <label>Loan Duration</label>
        <input type="text" className="form-control" placeholder="Loan Duration" onChange={ (e) => formUpdated({ field: 'loanDuration', value: +e.target.value })}  />
      </div>
      <div className="form-group">
        <label>Property Tax</label>
        <input type="text" className="form-control" placeholder="Property Tax" onChange={ (e) => formUpdated({ field: 'propertyTax', value: +e.target.value })}  />
      </div>
      <div className="form-group">
        <label>PMI</label>
        <input type="text" className="form-control" placeholder="PMI" onChange={ (e) => formUpdated({ field: 'pmi', value: +e.target.value })}  />
      </div>
    </form>
  )
}