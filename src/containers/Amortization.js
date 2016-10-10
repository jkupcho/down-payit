import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmortization } from '../selectors';

import { BarChart, Bar, XAxis, YAxis } from 'recharts';

class Amortization extends Component {

  render() {
    const data = this.props.amortization.filter((item, index) => {
        return index % 12 === 0;
    }).map((item, index) => {
      return {
        ...item,
        year: index + 1
      }
    });

    return (
      <BarChart width={800} height={400} data={data}>
        <XAxis dataKey="year" />
        <YAxis />
        <Bar dataKey="value" animationDuration={300} />
      </BarChart>
    );
  }

}

function mapStateToProps(state) {
  return {
    amortization: getAmortization(state),
    form: state.form
  }
}

export default connect(
  mapStateToProps
)(Amortization);