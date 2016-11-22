import types from '../actions/types';

const authReducer = (state = {}, action) => {
  switch (action.type) {

    case types.AUTH_TEXT_CHANGED:
      return Object.assign({}, state, { [action.payload.field]: action.payload.text });

    case types.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, { user: action.payload, password: '', error: '' });

    case types.USER_LOGIN_FAIL:
      return Object.assign({}, state, { password: '', error: action.payload });

    case types.SIGNUP_USER_SUCCESS:
      return Object.assign({}, state, { user: action.payload, password: '', error: '' });

    case types.SIGNUP_USER_FAIL:
      return Object.assign({}, state, { password: '', error: action.payload });

    default:
      return state;
  }
};

export default authReducer;
