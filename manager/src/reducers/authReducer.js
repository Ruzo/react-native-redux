import types from '../actions/types';

export default authReducer = (state={}, action) => {
  switch (action.type) {

    case types.EMAIL_TEXT_CHANGED:
      return Object.assign({}, state, {email: action.payload});

    case types.PASSWORD_TEXT_CHANGED:
      return Object.assign({}, state, {password: action.payload});

    case types.USER_LOGIN_SUCCESS:
      console.log('Success! ', action.payload);
      return Object.assign({}, state, {user: action.payload, password:'', error: '', loading: false});

    case types.USER_LOGIN_FAIL:
      console.log('Fail! ', action.payload);
      return Object.assign({}, state, {password: '', error: action.payload, loading: false})

    default:
      return state;
  }
}