import firebase from 'firebase';
import types from './types';

export const emailTextChanged = (text) => {
  return {type: types.EMAIL_TEXT_CHANGED, payload: text}
}

export const passwordTextChanged = (text) => {
  return {type: types.PASSWORD_TEXT_CHANGED, payload: text}
}

export const connectingToServer = () => ({type: types.CONNECTING_TO_SERVER});

export const loginRequest = (email, password) => {
  return {type: types.USER_LOGIN_REQUEST, payload: {email, password}}
}

export const userLoginSuccess = (user) => {
  return {type: types.USER_LOGIN_SUCCESS, payload: user.email}
}

export const userLoginFail = (error) => {
  return {type: types.USER_LOGIN_FAIL, payload: error.message}
}

export const signupRequest = (email, password) => {
  return {type: types.SIGNUP_USER_REQUEST, payload: {email, password}}
}

export const userSignupSuccess = (user) => {
  return {type: types.SIGNUP_USER_SUCCESS, payload: user.email}
}

export const userSignupFail = (error) => {
  return {type: types.SIGNUP_USER_FAIL, payload: error.message}
}
