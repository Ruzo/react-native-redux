import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import firebase from 'firebase';
import types from '../actions/types';
import {signInUser} from '../api';

function* userLoginRequest({payload}){
  const {email, password} = payload;
  const {user, error} = yield call(signInUser, email, password);
  user ? yield put({type: types.USER_LOGIN_SUCCESS, payload: user.email}) : yield put({type: types.USER_LOGIN_FAIL, payload: error.message});
}

function* userLoginRequest_Saga(){
  yield* takeLatest(types.USER_LOGIN_REQUEST, userLoginRequest);
}

export default userLoginRequest_Saga;