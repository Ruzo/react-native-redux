import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC0awcyMoLOFweoilzkLeFaqPUYZ85AeG0",
      authDomain: "react-native-redux-course.firebaseapp.com",
      databaseURL: "https://react-native-redux-course.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "543934070534"
    });
  }

  render(){
    const initialState = {
      auth: {
        email: '',
        password: ''
      }
    };

    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return (
      <Provider store={store}>
        <View>
          <Header headerText='MANAGER' />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;