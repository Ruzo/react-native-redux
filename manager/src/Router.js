import React from 'react';
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Employees from './components/Employees';
import EmployeePage from './components/EmployeePage';
import Popup from './components/common/Popup';
import Spinner from './components/Spinner';
import { RouterStyle } from './styles';

const RouterComponent = () => (
  <Router sceneStyle={RouterStyle.mainView}>
    <Scene key="modal" component={Modal} style={{ marginTop: 0 }}>
      <Scene key="root">
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
      </Scene>
      <Scene
        key="popup"
        component={Popup}
        />
      <Scene
        key="spinner"
        component={Spinner}
        />
    </Scene>
  </Router>
);

export default RouterComponent;
