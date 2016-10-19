import firebase from 'firebase';
import types from './types';

export const emailTextChanged = (text) => {
  return {type: types.EMAIL_TEXT_CHANGED, payload: text}
}

export const passwordTextChanged = (text) => {
  return {type: types.PASSWORD_TEXT_CHANGED, payload: text}
}

export const loginRequest = (email, password) => {
  return {type: types.USER_LOGIN_REQUEST, payload: {email, password}}
}