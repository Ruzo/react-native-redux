import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import firebase from 'firebase';
import {logOut} from '../api';
import {Card, CardSection, Button} from './common';
import {ButtonStyle} from './common/styles';
import {SpinnerStyle} from './styles';

class LogOutPage extends Component {
  state={
    loading: false,
    error: ''
  }

  logoutHandler(){
    this.setState({loading: true});
    logOut().then(() => {
      console.log('Signed Out!');
      this.setState({loading: false});
    }, (err) => console.log(err));
  }

  render() {
    const user = firebase.auth().currentUser && firebase.auth().currentUser.email;
    return (
      <View>
        <View style={SpinnerStyle.container}>
          <ActivityIndicator
            style={SpinnerStyle.spinner}
            size='small'
            animating={this.state.loading}
          />
        </View>
        <Card>
          <CardSection>
            {user && <Text>Current User is {user}</Text>}
          </CardSection>
          <CardSection>
            <Button
              handler={this.logoutHandler.bind(this)}
              compStyle={[ButtonStyle.logButton, ButtonStyle.logInOut]}
            >
              <Text style={[ButtonStyle.logText, ButtonStyle.logInOutText]}>Logout</Text>
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LogOutPage;