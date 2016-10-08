import React from 'react';

export default ({field, value, inputLabel, handleChange}) => {

  function propagateUpdate (event) {
    return handleChange({
      [field]: +event.target.value
    });
  }

  return (
    <div className="form-group">
      <label>{inputLabel}</label>
      <input type="text"
             className="form-control"
             placeholder={inputLabel}
             onChange={propagateUpdate}
             value={value}
             />
    </div>
  )
}
