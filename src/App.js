import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import Form from './components/Form';
import Breakdown from './components/Breakdown';
import { getMortgagePayment,
  getPaymentBreakdown,
  getCanCalculatePayment
} from './selectors';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Form {...this.props} />
          </div>
          <div className="col-md-8">
            <Breakdown {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    form: state.form,
    interest: state.interest,
    mortgagePayment: getMortgagePayment(state),
    paymentBreakdown: getPaymentBreakdown(state),
    canCalculatePayment: getCanCalculatePayment(state)
  };
}

function mapDispatchToProps (dispatch) {
  return {
    formUpdated: (payload) => {
      dispatch({
        type: 'FORM_UPDATED',
        payload
      })
    }
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
