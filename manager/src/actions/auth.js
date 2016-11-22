/* eslint-disable import/prefer-default-export */

import types from './types';

export const loginRequest = (email, password) =>
  ({ type: types.USER_LOGIN_REQUEST, payload: { email, password } });

export const userLoginSuccess = user =>
  ({ type: types.USER_LOGIN_SUCCESS, payload: user.email });

export const userLoginFail = error =>
  ({ type: types.USER_LOGIN_FAIL, payload: error.message });

export const signupRequest = (email, password) =>
  ({ type: types.SIGNUP_USER_REQUEST, payload: { email, password } });

export const userSignupSuccess = user =>
  ({ type: types.SIGNUP_USER_SUCCESS, payload: user.email });

export const userSignupFail = error =>
  ({ type: types.SIGNUP_USER_FAIL, payload: error.message });
