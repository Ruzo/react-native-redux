import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {emailTextChanged, passwordTextChanged} from '../actions';

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailTextChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordTextChanged(text);
  }

  render() {
    const {email, password} = this.props;
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
      </Card>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  email: auth.email,
  password: auth.password
});

export default connect(mapStateToProps, {emailTextChanged, passwordTextChanged})(LoginForm);