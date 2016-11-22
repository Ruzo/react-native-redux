import types from '../actions/types';

const serverReducer = (state = {}, { type }) => {
  switch (type) {
    case types.CONNECTING_TO_SERVER:
      return Object.assign({}, state, { loading: true });

    case types.DISCONNECTED_FROM_SERVER:
      return Object.assign({}, state, { loading: false });

    default:
      return state;
  }
};

export default serverReducer;
