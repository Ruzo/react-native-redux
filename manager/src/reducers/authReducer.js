import types from '../actions/types';

export default authReducer = (state={}, action) => {
  switch (action.type) {

    case types.EMAIL_TEXT_CHANGED:
      return Object.assign({}, state, {email: action.payload});

    case types.PASSWORD_TEXT_CHANGED:
      return Object.assign({}, state, {password: action.payload});

    case types.CONNECTING_TO_SERVER:
      console.log('Connecting to server.');
      return Object.assign({}, state, {loading: true});

    case types.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {user: action.payload, password:'', error: '', loading: false});

    case types.USER_LOGIN_FAIL:
      return Object.assign({}, state, {password: '', error: action.payload, loading: false});

    case types.SIGNUP_USER_SUCCESS:
      return Object.assign({}, state, {user: action.payload, password:'', error: '', loading: false});

    case types.SIGNUP_USER_FAIL:
      return Object.assign({}, state, {password: '', error: action.payload, loading: false});

    default:
      return state;
  }
}