import React, { Component, PropTypes } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { textChanged, loginRequest, signupRequest } from '../actions';
import { ButtonStyle } from './common/styles';
import { LoginStyle } from './styles';

class LoginForm extends Component {
  constructor() {
    super();

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.loginButtonHandler = this.loginButtonHandler.bind(this);
    this.signupButtonHandler = this.signupButtonHandler.bind(this);
  }

  onEmailChange(text) {
    this.props.textChanged(this.props.reducerKey, 'email', text);
  }

  onPasswordChange(text) {
    this.props.textChanged(this.props.reducerKey, 'password', text);
  }

  loginButtonHandler() {
    const { email, password } = this.props;
    this.props.loginRequest(email, password);
  }

  signupButtonHandler() {
    const { email, password } = this.props;
    this.props.signupRequest(email, password);
  }

  render() {
    const { email, password, error, loading } = this.props;
    return (
      <Card style={{ marginTop: 100 }}>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={email}
            onChangeText={this.onEmailChange}
            keyboardType="email-address"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="enter a password"
            value={password}
            onChangeText={this.onPasswordChange}
            secure
          />
        </CardSection>
        <Text style={LoginStyle.errorText}>{error || ' '}</Text>
        <ActivityIndicator animating={loading} size="small" />
        <CardSection>
          <Button
            handler={this.loginButtonHandler}
            compStyle={ButtonStyle.logInOut}
            disabled={loading}
          >
            <Text style={[ButtonStyle.logText, ButtonStyle.logInOutText]}>LOGIN</Text>
          </Button>
          <Button
            handler={this.signupButtonHandler}
            compStyle={ButtonStyle.signup}
            disabled={loading}
          >
            <Text style={[ButtonStyle.logText, ButtonStyle.signupText]}>SIGNUP</Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  textChanged: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
  signupRequest: PropTypes.func.isRequired,
  reducerKey: PropTypes.string.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  user: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ auth, server }) => {
  const { email, password, user, error } = auth;
  const { loading } = server;
  const reducerKey = 'AUTH';
  return {
    email,
    password,
    error,
    loading,
    user,
    reducerKey,
  };
};

export default connect(
  mapStateToProps,
  {
    textChanged,
    loginRequest,
    signupRequest,
  },
)(LoginForm);
