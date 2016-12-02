/* eslint-disable import/prefer-default-export */

import types from './types';

export const scheduleChanged = payload =>
  ({ type: types.PAGE_SCHEDULE_CHANGED, payload });

export const updateFields = payload => ({ type: types.UPDATE_FIELDS, payload });

export const resetFields = () => ({ type: types.RESET_FIELDS });

export const employeeSave = payload =>
  ({ type: types.EMPLOYEE_SAVE, payload });

export const employeeUpdate = payload =>
  ({ type: types.EMPLOYEE_UPDATE, payload });

export const employeeDelete = id =>
  ({ type: types.EMPLOYEE_FIRE, id });
