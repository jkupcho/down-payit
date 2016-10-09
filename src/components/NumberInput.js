import React from 'react';
import Input from './Input';

import { isNumber } from '../utils';

export default (props) => {

  function toNumber() {
    if (props.value === 0) { return ''; }
    return props.value.toLocaleString();
  }

  function convertValue (payload) {
    const converted = payload[props.field].replace(/,/g, '');
    if (isNumber(converted) || converted.length === 0) {
      props.onChange({
        [props.field]: +converted
      });
    }
  }

  return (
    <Input {...props} value={toNumber()} handleChange={convertValue} />
  )

}
