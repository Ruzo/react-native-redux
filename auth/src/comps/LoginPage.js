import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
import {Card, CardSection, Button, Input} from './common';
import {logIn, signUp} from '../api';
import {ButtonStyle} from './common/styles';
import {LoginPageStyle, SpinnerStyle, ErrorTextStyle} from './styles';

class LoginPage extends Component {
  state={
    email: '',
    password: '',
    error: '',
    loading: false
  }

  buttonsHandler(event){
    this.setState({loading: true, error: ''});
    const {email, password} = this.state;
    const action = event=='signup' ? signUp : logIn;
    action(email, password)
      .then(() => {
        console.log(`${event} was successful!`);
        this.setState({loading: false});
      })
      .catch((error) => {
        console.log('err: ', error.message);
        this.setState({loading: false, error: error.message});
      });
  }

  render() {
    return (
      <View style={LoginPageStyle.container}>
        <View style={SpinnerStyle.container}>
          <ActivityIndicator
            style={SpinnerStyle.spinner}
            size='small'
            animating={this.state.loading}
          />
        </View>

        <Card>

          <CardSection>
            <Input
              label="Email"
              placeholder="user@email.com"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              keyboardType="email-address"
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              placeholder="Enter password"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              secure={true}
            />
          </CardSection>

          <CardSection>
            <Button
              compStyle={[ButtonStyle.logButton, ButtonStyle.signUp]}
              handler={this.buttonsHandler.bind(this, 'signup')}
            >
              <Text style={[ButtonStyle.logText, ButtonStyle.signUpText]}>Sign Up</Text>
            </Button>
            <Button
              compStyle={[ButtonStyle.logButton, ButtonStyle.logInOut]}
              handler={this.buttonsHandler.bind(this, 'login')}
            >
              <Text style={[ButtonStyle.logText, ButtonStyle.logInOutText]}>Login</Text>
            </Button>
          </CardSection>
        </Card>
          <Text style={ErrorTextStyle.text}>
            {this.state.error}
          </Text>
      </View>
    );
  }
}

export default LoginPage;