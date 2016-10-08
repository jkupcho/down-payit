import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.props.form.propertyValue} To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    form: state.form
  };
}

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
