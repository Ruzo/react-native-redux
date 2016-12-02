import types from '../actions/types';
import { daysOfWork } from '../settings';
import { selectableDays } from '../utils';

const initialState = selectableDays(daysOfWork);

const scheduleReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.PAGE_SCHEDULE_CHANGED:
      return { ...state, ...payload };

    case types.UPDATE_FIELDS: {
      const { schedule } = payload;
      return schedule;
    }

    case types.RESET_FIELDS:
      return initialState;

    default:
      return state;
  }
};

export default scheduleReducer;
