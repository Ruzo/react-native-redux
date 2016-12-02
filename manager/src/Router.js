import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Employees from './components/Employees';
import EmployeePage from './components/EmployeePage';
import { RouterStyle } from './styles';

const RouterComponent = () => (
  <Router sceneStyle={RouterStyle.mainView}>
    <Scene key="auth">
      <Scene
        key="login"
        component={LoginForm}
        title="Login or Signup"
      />
    </Scene>
    <Scene key="main">
      <Scene
        key="employees"
        component={Employees}
        title="Employees"
        rightTitle="Add"
        onRight={() => Actions.employeePage({ employee: null })}
      />
      <Scene
        key="employeePage"
        component={EmployeePage}
        title="Employee Page"
      />
    </Scene>
  </Router>
);

export default RouterComponent;
