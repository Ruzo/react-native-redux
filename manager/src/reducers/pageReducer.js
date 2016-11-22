import update from 'immutability-helper';
import types from '../actions/types';

const pageReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.PAGE_TEXT_CHANGED:
      return Object.assign({}, state, { [payload.field]: payload.text });
    case types.PAGE_SCHEDULE_CHANGED:
      return Object.assign({},
        state,
        {
          schedule: update(state.schedule,
            { $splice: [[payload.id, 1, payload.day]] }),
        });
    default:
      return state;
  }
};

export default pageReducer;
