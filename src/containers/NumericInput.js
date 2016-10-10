import React, { Component } from 'react';
import { isNumber,
  convertToNumberFromLocaleString,
  hasTrailingDecimalPoint
} from '../utils';
import { debounce } from 'lodash';

export default class NumericInput extends Component {

  constructor(props) {
    super(props);

    // Rebind to allow for React functions to be accessible through 'this' within
    // non-React lifecycle functions.
    // Also, adding debounce to it only propagates state changes after 750 ms.
    this.updateValue = debounce(this.updateValue, 750);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      formattedValue: this.formatValue(this.props.value)
    });
  }

  formatValue(value) {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  onChange(event) {
    const numStr = event.target.value;
    const numValue = convertToNumberFromLocaleString(numStr);
    if (isNumber(numValue)) {
      const hasTrailingDecimal = hasTrailingDecimalPoint(numStr);
      this.setState({
        formattedValue: this.formatValue(numValue) + (hasTrailingDecimal ? '.' : '')
      });
      this.updateValue(numValue);
    }
  }

  updateValue(numValue) {
    this.props.handleChange({
      [this.props.field]: numValue
    });
  }

  render() {
    const { formattedValue } = this.state;

    return (
        <input className="form-control"
          onChange={this.onChange}
          value={formattedValue} />
    )
  }
}