import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './comps/common';
import LoginPage from './comps/LoginPage';
import LogOutPage from './comps/LogOutPage';

class App extends Component {
  state={user: null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC0awcyMoLOFweoilzkLeFaqPUYZ85AeG0",
      authDomain: "react-native-redux-course.firebaseapp.com",
      databaseURL: "https://react-native-redux-course.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "543934070534"
    });

    this.setState({user: firebase.auth().currentUser});

    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) =>{
      this.setState({user});
    }, (err) =>{
      console.log(err);
    });
  }

  render() {

    return (
      <View>
        <Header headerText="Authorization" />
        {this.state.user ? <LogOutPage /> : <LoginPage />}
      </View>
    );
  }
}

export default App;