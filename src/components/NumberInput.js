import React from 'react';
import Input from './Input';

import { isNumber } from '../utils';

export default (props) => {

  function toNumber() {
    return props.value.toLocaleString();
  }

  function convertValue (payload) {
    const converted = +payload[props.field].replace(/,/g, '');
    if (isNumber(converted)) {
      props.handleChange({
        [props.field]: converted
      });
    }
  }

  return (
    <Input {...props} value={toNumber()} handleChange={convertValue} />
  )

}
