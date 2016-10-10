import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import form from './reducers/form';
import interest from './reducers/interest';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const reducers = combineReducers({
  form,
  interest
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
