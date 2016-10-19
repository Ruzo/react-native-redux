import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {emailTextChanged, passwordTextChanged, loginRequest} from '../actions';
import {ButtonStyle} from './common/styles';
import {LoginStyle} from './styles';

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailTextChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordTextChanged(text);
  }

  loginButtonHandler(){
    const {email, password} = this.props;
    this.props.loginRequest(email, password);
  }

  render() {
    const {email, password, user, error, loading} = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={email}
            onChangeText={this.onEmailChange.bind(this)}
            keyboardType='email-address'
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            placeholder='enter a password'
            value={password}
            onChangeText={this.onPasswordChange.bind(this)}
            secure={true}
          />
        </CardSection>
        <Text style={LoginStyle.errorText}>{error || ' '}</Text>
        <CardSection>
          <Button handler={this.loginButtonHandler.bind(this)} compStyle={ ButtonStyle.logInOut }>
            <Text style={[ButtonStyle.logText, ButtonStyle.logInOutText]}>LOGIN</Text>
          </Button>
        </CardSection>
        <Text>{user}</Text>
      </Card>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password, user, error, loading} = auth;
  return {
    email,
    password,
    error,
    loading,
    user
  }
};

export default connect(mapStateToProps, {emailTextChanged, passwordTextChanged, loginRequest})(LoginForm);