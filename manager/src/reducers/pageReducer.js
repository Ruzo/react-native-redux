import types from '../actions/types';

const initialState = {
  name: '',
  phone: '',
};

const pageReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.PAGE_TEXT_CHANGED:
      return Object.assign({}, state, { [payload.field]: payload.text });

    case types.UPDATE_FIELDS: {
      const { name, phone } = payload;
      return { name, phone };
    }

    case types.RESET_FIELDS:
      return initialState;

    default:
      return state;
  }
};

export default pageReducer;
