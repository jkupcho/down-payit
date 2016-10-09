import React from 'react';

export default ({label, children}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {children}
    </div>
  );
}
