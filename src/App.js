import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import Form from './components/Form';
import Breakdown from './components/Breakdown';
import { getMortgagePayment } from './selectors';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Form {...this.props} />
          </div>
          <div className="col-md-8">
            <Breakdown />
            <p className="well">
              {this.props.mortgagePayment}
            </p>
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
    mortgagePayment: getMortgagePayment(state)
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
