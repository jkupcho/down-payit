import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmortization, getCanCalculatePayment } from '../selectors';
import IncompleteForm from '../components/IncompleteForm';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class Amortization extends Component {

  constructor (props) {
    super(props);
    this.filterData = this.filterData.bind(this);
  }

  filterData() {
    return this.props.amortization.filter((item, index) => {
      return index % 12 === 0;
    }).map((item, index) => {
      return {
        ...item,
        year: index + 1
      }
    });
  }

  render() {
    const data = this.filterData();

    let content = <IncompleteForm />;

    if (this.props.canRender) {
      content = (
        <div>
          <div>
            <span>Amount owed at start of year</span>
            <BarChart width={800} height={400} data={data} style={{margin: '0 auto'}}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" animationDuration={300} fill="#B8B5FF" />
            </BarChart>
          </div>

          <div>
            <span>Interest vs. Principal Breakdown</span>
            <BarChart width={800} height={400} data={data} style={{margin: '0 auto'}}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="principal" animationDuration={300} fill="#B8B5FF" />
              <Bar dataKey="interest" animationDuration={300} fill="#A5E8DE" />
            </BarChart>
          </div>
        </div>
      );
    }

    const style = {
      textAlign: 'center'
    };
    return (
      <div className="panel panel-info">
        <div className="panel-heading">Amortization</div>
        <div className="panel-body" style={style}>
          {content}
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    amortization: getAmortization(state),
    form: state.form,
    canRender: getCanCalculatePayment(state)
  }
}

export default connect(
  mapStateToProps
)(Amortization);