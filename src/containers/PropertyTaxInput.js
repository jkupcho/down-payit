import React, { Component } from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';

export default class PropertyTaxInput extends Component {

  constructor(props) {
    super(props);

    this.updatePercentage = this.updatePercentage.bind(this);
    this.updateValue = debounce(this.updateValue, 750);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      isPercentage: false,
      value: this.props.value
    });
  }

  updatePercentage(newPercentage) {
    const previousValue = this.state.isPercentage;

    if (newPercentage !== previousValue) {
      let value = this.props.propertyValue * (this.state.value / 100);
      // If the old value was not a percentage, convert to a
      if (!previousValue) {
        value = (this.state.value / this.props.propertyValue) * 100;
      }

      this.setState({
        isPercentage: newPercentage,
        value
      });
    }
  }

  onChange(event) {
    const value = event.target.value;
    let newValue = value;

    if (this.state.isPercentage) {
      newValue = (parseFloat(newValue) / 100) * this.props.propertyValue;
    }

    this.setState({
      value
    });

    this.updateValue(newValue);
  }

  updateValue(value) {
    this.props.handleChange({
      [this.props.field]: value
    });
  }

  render() {
    const { isPercentage, value } = this.state;
    const defaultClasses = {
      'btn': true,
      'btn-default': true
    };

    const yearlyClasses = classNames({
      ...defaultClasses,
      'active': !isPercentage
    });

    const percentageClasses = classNames({
      ...defaultClasses,
      'active': isPercentage
    });

    return (
      <div>
        <input type="text" className="form-control" value={value} onChange={this.onChange} />
        <div className="btn-group" role="group">
          <button type="button" onClick={this.updatePercentage.bind(this, false)} className={yearlyClasses}>Yearly</button>
          <button type="button" onClick={this.updatePercentage.bind(this, true)} className={percentageClasses}>Percentage</button>
        </div>
      </div>
    )
  }

}
