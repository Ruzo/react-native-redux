/* eslint-disable import/prefer-default-export */

import types from './types';

export const listenToEmployees = action => ({ type: types.LISTEN_TO_EMPLOYEES, action });

export const getEmployeesList = () => ({ type: types.GET_EMPLOYEES_LIST });

export const updateEmployeesList = payload => ({ type: types.UPDATE_EMPLOYEES_LIST, payload });
