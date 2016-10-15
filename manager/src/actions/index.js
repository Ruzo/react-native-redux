import types from './types';

export const emailTextChanged = (text) => {
  return {type: types.EMAIL_TEXT_CHANGED, payload: text}
}

export const passwordTextChanged = (text) => {
  return {type: types.PASSWORD_TEXT_CHANGED, payload: text}
}