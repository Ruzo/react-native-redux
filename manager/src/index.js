/* global window */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase';
import Router from './Router';
import reducers from './reducers';
import sagas from './sagas';
import { daysOfWork } from './settings';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC0awcyMoLOFweoilzkLeFaqPUYZ85AeG0',
      authDomain: 'react-native-redux-course.firebaseapp.com',
      databaseURL: 'https://react-native-redux-course.firebaseio.com',
      storageBucket: '',
      messagingSenderId: '543934070534',
    });
  }

  render() {
    const initialState = {
      auth: {
        email: 'tester@test.com',
        password: '123456',
        user: '',
        error: '',
      },
      employees: {},
      page: {
        name: '',
        phone: '',
        schedule: daysOfWork.slice(0, 5),
      },
      server: {
        loading: false,
      },
    };

/* eslint-disable no-underscore-dangle */
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
      );
    sagaMiddleware.run(sagas);
/* eslint-enable */

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
