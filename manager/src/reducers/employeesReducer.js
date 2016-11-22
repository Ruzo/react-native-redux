import types from '../actions/types';

const employeesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.EMPLOYEE_SAVE:
      return Object.assign({}, state, payload);

    case types.UPDATE_EMPLOYEES_LIST:
      return Object.assign({}, payload);

    default:
      return state;
  }
};

export default employeesReducer;
