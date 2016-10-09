import React, { Component } from 'react';
import { isNumber,
  convertToNumberFromLocaleString,
  hasTrailingDecimalPoint
} from '../utils';
import { debounce } from 'lodash';

export default class NumericInput extends Component {

  constructor() {
    super();

    // Rebind to allow for React functions to be accessible through 'this'.
    // Also, adding debounce to it only propagates state changes after 500 ms.
    this.updateValue = debounce(this.updateValue, 500);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      formattedValue: 0,
      numValue: 0
    });

  }

  handleChange(event) {
    const numStr = event.target.value;
    const numValue = convertToNumberFromLocaleString(numStr);
    if (isNumber(numValue)) {
      const hasTrailingDecimal = hasTrailingDecimalPoint(numStr);
      this.setState({
        formattedValue: numValue.toLocaleString(undefined, { maximumFractionDigits: 2}) + (hasTrailingDecimal ? '.' : '')
      });
      this.updateValue(numValue);
    }
  }

  updateValue(numValue) {
    this.setState({
      numValue
    });
  }

  render() {
    const { formattedValue } = this.state;

    return (
        <input className="form-control"
          onChange={this.handleChange}
          value={formattedValue} />
    )
  }
}