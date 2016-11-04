import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Employees from './components/Employees';
import {RouterStyle} from './styles';

export default RouterComponent = () => {
  return (
    <Router sceneStyle={RouterStyle.mainView}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login or Signup" />
      </Scene>
      <Scene key="main">
        <Scene key="employees" component={Employees} title="Employees" />
      </Scene>
    </Router>
  )
}