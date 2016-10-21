import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import firebase from 'firebase';
import types from '../actions/types';
import {signInUser, signUpUser} from '../api';
import * as actions from '../actions';

function* userLoginRequest({payload}){
  yield put(actions.connectingToServer());
  const {email, password} = payload;
  const {user, error} = yield call(signInUser, email, password);
  user ? yield put(actions.userLoginSuccess(user)) : yield put(actions.userLoginFail(error));
}

function* userSignupRequest({payload}){
  yield put(actions.connectingToServer());
  const {email, password} = payload;
  const {user, error} = yield call(signUpUser, email, password);
  user ? yield put(actions.userSignupSuccess(user)) : yield put(actions.userSignupFail(error));
}


// Watchers
export default function*(){
  yield [
    takeLatest(types.USER_LOGIN_REQUEST, userLoginRequest),
    takeLatest(types.SIGNUP_USER_REQUEST, userSignupRequest)
  ];
}
