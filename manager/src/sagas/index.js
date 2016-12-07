import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import types from '../actions/types';
import {
  signInUser,
  signUpUser,
  getEmployeesRef,
  getSelectedEmployeeRef,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
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
  const employeesRef = yield call(getEmployeesRef);
  yield call(saveEmployee, employeesRef, payload);
  yield put(actions.disconnectedFromServer());
  yield put(actions.resetFields());
  yield call(Actions.employees, { type: 'reset' });
}

function* employeeUpdate({ payload }) {
  yield put(actions.connectingToServer());
  const { id, name, phone, schedule } = payload;
  const selectedEmployeeRef = yield call(getSelectedEmployeeRef, id);
  yield call(updateEmployee, selectedEmployeeRef, { name, phone, schedule });
  yield put(actions.disconnectedFromServer());
  yield put(actions.resetFields());
  yield call(Actions.employees, { type: 'reset' });
}

function* employeeDelete({ id }) {
  yield put(actions.connectingToServer());
  const selectedEmployeeRef = yield call(getSelectedEmployeeRef, id);
  yield call(deleteEmployee, selectedEmployeeRef);
  yield put(actions.disconnectedFromServer());
  yield put(actions.resetFields());
  yield call(Actions.employees, { type: 'reset' });
}

function* listenToEmployeesSetup({ action }) {
  yield put(actions.connectingToServer());
  const employeesRef = yield call(getEmployeesRef);
  yield call(loadEmployeesListener, employeesRef, action);
  yield put(actions.disconnectedFromServer());
}

function* getEmployeesList() {
  yield put(actions.connectingToServer());
  const employeesRef = yield call(getEmployeesRef);
  const list = yield call(getEmployees, employeesRef);
  if (list) {
    yield put(actions.updateEmployeesList(list));
  }
  yield put(actions.disconnectedFromServer());
}

function* showSpinner() {
  yield call(Actions.spinner);
}

function* hideSpinner() {
  yield call(Actions.refresh);
}

// Watchers
export default function* () {
  yield [
    takeLatest(types.USER_LOGIN_REQUEST, userLoginRequest),
    takeLatest(types.SIGNUP_USER_REQUEST, userSignupRequest),
    takeEvery(types.EMPLOYEE_SAVE, employeeSave),
    takeEvery(types.EMPLOYEE_UPDATE, employeeUpdate),
    takeEvery(types.GET_EMPLOYEES_LIST, getEmployeesList),
    takeLatest(types.LISTEN_TO_EMPLOYEES, listenToEmployeesSetup),
    takeLatest(types.EMPLOYEE_FIRE, employeeDelete),
    takeLatest(types.CONNECTING_TO_SERVER, showSpinner),
    takeEvery(types.DISCONNECTED_FROM_SERVER, hideSpinner),
  ];
}
