import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmortization, getCanCalculatePayment } from '../selectors';
import IncompleteForm from '../components/IncompleteForm';
import AmountOwedStart from '../components/AmountOwedStart';
import InterestVsPrincipal from '../components/InterestVsPrincipal';

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
          <AmountOwedStart data={data} />
          <InterestVsPrincipal data={data} />
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