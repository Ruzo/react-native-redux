import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import types from '../actions/types';
import {
  signInUser,
  signUpUser,
  getEmployeeRef,
  saveEmployee,
  getEmployees,
  loadEmployeesListener,
} from '../api';
import * as actions from '../actions';

function* userLoginRequest({ payload }) {
  yield put(actions.connectingToServer());
  const { email, password } = payload;
  const { user, error } = yield call(signInUser, email, password);
  if (user) {
    yield put(actions.userLoginSuccess(user));
    yield call(Actions.main);
  } else {
    yield put(actions.userLoginFail(error));
  }
  yield put(actions.disconnectedFromServer());
}

function* userSignupRequest({ payload }) {
  yield put(actions.connectingToServer());
  const { email, password } = payload;
  const { user, error } = yield call(signUpUser, email, password);
  if (user) {
    yield put(actions.userSignupSuccess(user));
    yield call(Actions.main);
  } else {
    yield put(actions.userSignupFail(error));
  }
  yield put(actions.disconnectedFromServer());
}

function* employeeSave({ payload }) {
  yield put(actions.connectingToServer());
  const employeeRef = yield call(getEmployeeRef);
  yield call(saveEmployee, employeeRef, payload);
  yield call(Actions.employees({ type: 'reset' }));
  yield put(actions.disconnectedFromServer());
}

function* listenToEmployeesSetup({ action }) {
  yield put(actions.connectingToServer());
  const employeeRef = yield call(getEmployeeRef);
  yield call(loadEmployeesListener, employeeRef, action);
  yield put(actions.disconnectedFromServer());
}

function* getEmployeesList() {
  yield put(actions.connectingToServer());
  const employeeRef = yield call(getEmployeeRef);
  const list = yield call(getEmployees, employeeRef);
  if (list) {
    yield put(actions.updateEmployeesList(list));
  }
  yield put(actions.disconnectedFromServer());
}

// Watchers
export default function* () {
  yield [
    takeLatest(types.USER_LOGIN_REQUEST, userLoginRequest),
    takeLatest(types.SIGNUP_USER_REQUEST, userSignupRequest),
    takeEvery(types.EMPLOYEE_SAVE, employeeSave),
    takeEvery(types.GET_EMPLOYEES_LIST, getEmployeesList),
    takeLatest(types.LISTEN_TO_EMPLOYEES, listenToEmployeesSetup),
  ];
}
