import types from '../actions/types';

export default authReducer = (state={}, action) => {
  switch (action.type) {

    case types.EMAIL_TEXT_CHANGED:
      return Object.assign({}, state, {email: action.payload});

    case types.PASSWORD_TEXT_CHANGED:
      return Object.assign({}, state, {password: action.payload});

    default:
      return state;
  }
}